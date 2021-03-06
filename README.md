# Beda Software - Frontent project generator

This generator helps to create predefined frontend (web and mobile) applications compatible to an [Aidbox](https://docs.aidbox.app/) app.

### This template includes:

-   Template for monorepo (shared files, common settings including linters, ci/cd and etc)
-   Template for mobile (ios/android)
-   Template for web

### What’s Included?

-   A web application based on the create react app [typescript template](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app);
-   A React Native mobile application (iOS/Android) with `react-native-navigation` and `react-native-notifications`;
-   A shared repository with default FHIR and Aidbox resources type declarations;
-   Plugged in [aidbox-react](https://github.com/beda-software/aidbox-react) package;
-   Shared ESLint and Prettier configuration files;
-   [react-test-renderer](https://www.npmjs.com/package/react-test-renderer);
-   CI/CD files (Docker, GitLab) including files to run tests using Aidbox;
-   An inialized and configured Git repository.

### Folder structure (simplified)

```
frontend
└───chart
└───mobile
└───shared
└───web
└───chart
│   other files
```

## Usage: How to create a new frontend project

1. Run this generator:

```
npx yo beda
```

2. Reply to questions:

-   `What do you want to create:` Choose "Project".

-   `Path to monorepo git repository:` Hit "Enter" to use default template. If you want to use another template, provide a path to the git repository with another template. Can I provide a link to a local directory?

-   `Your mobile project name:` Provide a name for mobile app directory that will be added to the frontent directory, e.g. "mobile". Wait while generator is installing project files in the "frontend" directory.

3. Go to the "frontend" directory:

```
cd ./frontend
```

4. Run the project:

```
yarn start
```

To start web app only:

```
yarn start:web
```

To start mobile app only:

```
yarn start:mobile
```

5. Then open http://localhost:3000/ to see your web app.

6. Add a remote for the repository

```
git remote add origin <path_to_git_repository>
```

For advanced usage and other details **check** [`template-monorepo`](./template-monorepo/README.md) please

## Development: How to change this template

For development - clone the repo then try to run application generator:

```
git clone git@github.com:beda-software/frontend-beda-software-stack.git
cd ./frontend-beda-software-stack
npx yo ./generator-beda/generators/app
```

Set the current repo path as `.` as answer for the following question:

```
? Path to monorepo git repository (https://github.com/beda-software/frontend-beda-software-stack.git)
```
