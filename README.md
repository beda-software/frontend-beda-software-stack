# Beda Software - Frontent project generator

## What is the purpose of this project?

This template includes:

- Template for monorepo (shared files, common settings including linters, ci/cd and etc)
- Template for mobile (ios/android)
- Template for web


## What’s Included?
- A web application
- A React Native application
- A shared repository


## Usage (if you want to create a new frontend project)

1. Install a [Yeoman](https://www.npmjs.com/package/yo)
```npm install -g yo```

2. Run the generator
```npx yo beda```

Run in console:

```
npx yo beda
cd ./frontend
yarn start
```

# Development (if you want to change this generator or its templates)

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
