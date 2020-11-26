# Generator

## Installation

```
yarn global add yo
yarn global add generator-beda
```

## Usage

```
yo beda
```

## Application generator

Usage:

```
yo beda:app
```

## React Native container generator 

Usage: 

```
yo beda:rn-container
```

Generated code depends on:

- `react`
- `react-native-navigation`
- `react-test-renderer`
- `jest`


# Generators development

For local generator development:

1. Install [yeoman](https://yeoman.io/):

```
yarn global add yo
```

2. Link local project as npm package:

```
npm link
```

3. Modify specified generator code.

4. Run specified generator, for example:

```
yo beda:rn-container
```
