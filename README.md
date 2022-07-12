# COMPETING ANT APP
# Version 1.0
# Technologies
## Dependencies
This dependencies will be installed in the setup section with

> npm install

- [React](https://reactjs.org/)
- [react-native](https://www.npmjs.com/package/react-native)
- [@apollo/client](https://www.npmjs.com/package/@apollo/client)
- [graphql](https://www.npmjs.com/package/graphql)
- [react-native-snap-carousel](https://www.npmjs.com/package/react-native-snap-carousel)

### Visual Studio Code
#### Required extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [JSON5 syntax](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-json5)
- [npm](https://marketplace.visualstudio.com/items?itemName=fknop.vscode-npm)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Setup

Installing the dependencies in the setting up environment steps.
Make sure you are following the steps in the "React Native CLI Quickstart" section :
(https://reactnative.dev/docs/environment-setup)

- Development OS: macOS
- Target OS: iOS

> brew install node
> brew install watchman

If you have already installed Node on your system, make sure it is Node 12 or newer.

Install Xcode via the Mac App Store and the iOS Simulator and all the necessary tools to build your iOS app

> sudo gem install cocoapods

Make sure you have npx installed

Open the terminal and go to the directory where you want the project to be.

Clone the files from the repository

> git clone https://github.com/LuciaOsi/sg_ant_challenge.git

Access to the newly created folder

> cd ./sg_challenge

Run the node package manager to install javascript dependencies in the folder:

> npm install

Go to the ios folder and install CocoaPods library dependencies for your Xcode projects

> cd ios
> npx pod-install

## Run environment


The project is meant to be used in iPhone devices.
If you want to run the project in:

**iOS**
> npm run ios

#### Project structure

```
.src/
    .assets/
        .images/
    .components/
        .ants/
        .common/
        .login/
        .race/
    .utils/
    .views/
        .css/
            colors.js

```