# Monorepo template

This template includes:

- Template for monorepo (shared files, common settings including linters, ci/cd and etc)
- Template for mobile (ios/android)
- Template for web

# Usage

Run in console:

```
npx yo beda
cd ./frontend
yarn start
```

For advanced usage and other details check [`template-monorepo`](./template-monorepo/README.md) please

# Development

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
