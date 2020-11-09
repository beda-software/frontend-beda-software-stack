# Generator

Usage: 

```
npx yo beda
```

## Application generator

Usage:

```
npx yo beda:app
```

## React Native container generator 

Usage: 

```
npx yo beda:rn-container
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
npm install -g yo
```

2. Link local project as npm package:

```
npm link
```

3. Run specified generator, for example:

```
yo beda:rn-container
```
