{
  description = "virtual environments";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    android.url = "github:tadfisher/android-nixpkgs/stable";
  };
  outputs = { self, flake-utils, devshell, nixpkgs, android }:
    {

      overlay = final: prev: {
        inherit (self.packages.${final.system}) android-sdk android-studio;
      };
    }
    // flake-utils.lib.eachDefaultSystem (system:
      let 
        inherit (nixpkgs) lib;
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [ devshell.overlays.default self.overlay ];
        };
      in
      {
        packages = {
          android-sdk = android.sdk.${system} (sdkPkgs: with sdkPkgs; [
              # Useful packages for building and testing.
              build-tools-34-0-0
              cmdline-tools-latest
              emulator
              platform-tools
              platforms-android-34
              system-images-android-34-google-apis-x86-64
            ]
            ++ lib.optionals (system == "aarch64-darwin") [
              system-images-android-34-google-apis-arm64-v8a
              system-images-android-34-google-apis-playstore-arm64-v8a
            ]
            ++ lib.optionals (system == "x86_64-darwin" || system == "x86_64-linux") [
              system-images-android-34-google-apis-x86-64
              system-images-android-34-google-apis-playstore-x86-64
            ]);
          } // {
            android-studio = pkgs.androidStudioPackages.stable;
          };
        devShells.default = pkgs.devshell.mkShell {
          name = "hydra-react-native";
          packages = with pkgs; [jdk11 gradle git android-sdk android-studio nodejs nodePackages.yarn ];
          env = with pkgs; [
            {
              name = "ANDROID_HOME";
              value = "${android-sdk}/share/android-sdk";
            }
            {
              name = "ANDROID_SDK_ROOT";
              value = "${android-sdk}/share/android-sdk";
            }
            {
              name = "JAVA_HOME";
              value = jdk11.home;
            }
          ];
        };
    });
}
