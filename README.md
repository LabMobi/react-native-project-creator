# React Native Template

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development

## Requirements

- ts-node
- [environment setup](https://reactnative.dev/docs/environment-setup) for
  react-native

## How to use

```
npx react-native init <app-name> --template https://github.com/LabMobi/react-native-project-creator
```

## How to change bundle identifier

```
npx react-native-rename "APP_NAME" -b "bundle_identifier"
```

After renaming project you should clean, build, and reinstall third party dependencies to get it running properly with the new name and bundle identifier.

https://github.com/junedomingo/react-native-rename

## Change bundle identifier manually

Based on the react-native version you are using there are bunch of files that have to be changed on both platforms (android and ios)

List of files to edit:

IOS

[application_build_scheem].plist (this is a dict/xml file that contains keys that are used by default if no changes added to project (react-native-cli init type of project)

ANDROID

1. strings.xml (change app_name key value)
2. manifest.xml (change package attribute)
3. build.gradle (change applicationId value)
4. MainActivity.java (change java class package)
5. MainApplication.java (change java class package)

We also need to change the folder paths to match new name -- change com.oldName to com.newname.mobile, then change folder paths from app/src/java/com/oldName/ to app/src/java/com/newname/mobile/.

Ref: https://stackoverflow.com/a/44481467/10693194

## Project Environments

This template creates 3 environments. Development, Staging and Production.

## Content

This template will setup the following libs:

- [React Navigation](https://reactnavigation.org): Navigation
- [React Navigation Stack](https://reactnavigation.org/docs/hello-react-navigation): Stack Navigation
- [React Navigation Tab](https://reactnavigation.org/docs/tab-based-navigation): Tab Navigation
- [i18next & react-i18next](https://www.i18next.com): Multilanguage support
- [Axios](https://github.com/axios/axios): API Calls
- [Async Storage](https://github.com/react-native-async-storage/async-storage#readme): Asynchronous, persistent, key-value storage system
- [React Redux](https://github.com/reduxjs/react-redux): Global State management
- [reduxjs/toolkit](https://redux-toolkit.js.org): The official, opinionated, batteries-included toolset for efficient Redux development
- [React-Native-SVG](https://github.com/software-mansion/react-native-svg): SVG Support
- [React Native Config](https://github.com/luggit/react-native-config): Environment Variables
- [React Native Rename](https://github.com/junedomingo/react-native-rename): Change name and bundle identifier easily

Components:

- Typography
- Icon
- Container

The following tools are also setup:

- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)

Other Features:

- Multilanguage Support
- Dark & Light Theme Support
