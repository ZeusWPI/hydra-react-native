{
  description = "virtual environments";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, flake-utils, devshell, nixpkgs, android }:
    flake-utils.lib.eachDefaultSystem (system:
      let 
        inherit (nixpkgs) lib;
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
          config.android_sdk.accept_license = true;
          overlays = [ devshell.overlays.default ];
        };
        androidComposition = pkgs.androidenv.composeAndroidPackages {
          toolsVersion = "26.1.1";
          platformToolsVersion = "33.0.3";
          buildToolsVersions = [ "30.0.3" ];
          includeEmulator = true;
          emulatorVersion = "31.3.14";
          platformVersions = [ "33" ];
          includeSources = false;
          includeSystemImages = false;
          systemImageTypes = [ "google_apis_playstore" ];
          abiVersions = [ "armeabi-v7a" "arm64-v8a" ];
          cmakeVersions = [ "3.18.1" ];
          includeNDK = true;
          ndkVersions = ["22.1.7171670"];
          useGoogleAPIs = false;
          useGoogleTVAddOns = false;
          includeExtras = [
            "extras;google;gcm"
          ];
        };
        androidRootSdk = "${androidComposition.androidsdk}/libexec/android-sdk";
      in
      {
        devShells.default = pkgs.devshell.mkShell {
          name = "hydra-react-native";
          packages = with pkgs; [
            jdk11 gradle git androidComposition.androidsdk
            nodejs nodePackages.yarn android-studio
          ];
          env = with pkgs; [
            {
              name = "ANDROID_HOME";
              value = "${androidComposition.androidsdk}/libexec/android-sdk";
            }
            {
              name = "ANDROID_SDK_ROOT";
              value = androidRootSdk;
            }
            {
              name = "ANDROID_NDK_ROOT";
              value = "${androidRootSdk}/ndk-bundle";
            }
            {
              name = "GRADLE_OPTS";
              value = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${androidRootSdk}/build-tools/33.0.1/aapt2";
            }
            {
              name = "JAVA_HOME";
              value = jdk11.home;
            }
          ];
        };
    });
}
