# Hydra React native

## Development

### Requirements

- NodeJS (16+)
- yarn
- openjdk 11
- Android studio (for android development). In the SDK manager (Tools -> SDK manager -> SDK Tools) install following tools
    - Android SDK Build-Tools
    - NDK (Side By Side)
    - Android SDK Command-line Tools
    - CMake
    - Android Emulator
    - Android SDK Platform-Tools
- XCode (for ios development)

if you have [asdf](https://asdf-vm.com) installed you can use that to get the right software versions

### Commands

- `yarn install` installs the needed dependencies
- `yarn android` or `yarn ios`

You might still have to set your `ANDROID_HOME` in your `~/.bashrc`

```shell
export ANDROID_HOME=${HOME}/Android/Sdk
export PATH=${ANDROID_HOME}/tools:${PATH}
export PATH=${ANDROID_HOME}/emulator:${PATH}
export PATH=${ANDROID_HOME}/platform-tools:${PATH}
```

### Expo-go

To preview the app on your own phone, download the expo go app [here](https://expo.dev/expo-go) and scan the QR-code shown in your terminal (make sure you developing using the Expo Go app, Above the list with keys it should say: `Using Expo Go`)

### Nix

If you're a nix & flake user you can use the devShell which includes android-studio and the right image versions needed to run the emulator

### Libraries

We use a lot of libraries around react-native to help us.
- [expo](https://expo.dev)
- [react-native-paper](https://callstack.github.io/react-native-paper/), a UI library that gives us the material-UI look
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/), a drop in replacement to fix the performance limitations of react native's gesture handler
