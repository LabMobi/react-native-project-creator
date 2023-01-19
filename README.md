Mobi Lab / We make robots talk to humans

# React Native Template

This project aims to be a strong foundation for React Native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development with TypeScript.

## Requirements

- ts-node
- [environment setup](https://reactnative.dev/docs/environment-setup) for
  React Native

## How to use

```
npx react-native init <app-name> --template https://github.com/LabMobi/react-native-project-creator
```

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
- [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view): A ScrollView component that handles keyboard appearance and automatically scrolls to focused TextInput.
- [React-Native-SVG](https://github.com/software-mansion/react-native-svg): SVG Support
- [React Native Config](https://github.com/luggit/react-native-config): Environment Variables
- [React Native Rename](https://github.com/junedomingo/react-native-rename): Change name and bundle identifier easily

## Optional libs

- [React Native UI Lib](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup)
  > [optional](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#optional-dependencies)
  > and
  > [native dependencies](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#install-native-dependencies)
  > are not installed
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Device Info](https://github.com/react-native-device-info/react-native-device-info)
- [React Query](https://react-query.tanstack.com/)
- [React Hooks Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)

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

## How to change bundle identifier (Optional)

```
npx react-native-rename "APP_NAME" -b "bundle_identifier"
```

After renaming project you should clean, build, and reinstall third party dependencies to get it running properly with the new name and bundle identifier.

https://github.com/junedomingo/react-native-rename

## Change bundle identifier manually (Optional)

Based on the React Native version you are using there are bunch of files that have to be changed on both platforms (Android and iOS)

List of files to edit:

iOS

[application_build_scheem].plist (this is a dict/xml file that contains keys that are used by default if no changes added to project (react-native-cli init type of project)

Android

1. strings.xml (change app_name key value)
2. manifest.xml (change package attribute)
3. build.gradle (change applicationId value)
4. MainActivity.java (change java class package)
5. MainApplication.java (change java class package)

We also need to change the folder paths to match new name -- change com.oldName to com.newname.mobile, then change folder paths from app/src/java/com/oldName/ to app/src/java/com/newname/mobile/.

Ref: https://stackoverflow.com/a/44481467/10693194

## Contact

### Mobi Lab

Email: [hello@lab.mobi](mailto:hello@lab.mobi)

Twitter: https://mobile.twitter.com/LabMobi

Web: https://lab.mobi/
