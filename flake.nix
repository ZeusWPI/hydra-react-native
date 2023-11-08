{
  description = "virtual environments";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    devshell = {
      url = "github:numtide/devshell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, flake-utils, devshell, nixpkgs }:
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
          toolsVersion = null;
          platformToolsVersion = "34.0.4";
          buildToolsVersions = [ "34.0.0" "30.0.3" ];
          includeEmulator = true;
          includeSystemImages = true;
          abiVersions = [ "arm64-v8a" "x86_64" ];
          emulatorVersion = "33.1.6";
          platformVersions = [ "34" "33" ];
          systemImageTypes = [ "google_apis_playstore" ];
          cmakeVersions = [ "3.22.1" ];
          includeNDK = true;
          ndkVersions = ["23.1.7779620"];
          useGoogleAPIs = true;
          includeExtras = [
            "extras;google;gcm"
          ];
          extraLicenses = [
            "android-sdk-license"
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
              value = androidRootSdk;
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
              value = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${androidRootSdk}/build-tools/34.0.0/aapt2";
            }
            {
              name = "JAVA_HOME";
              value = jdk11.home;
            }
          ];
        };
    });
}
