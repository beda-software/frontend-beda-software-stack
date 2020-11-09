## Local setup

In the project we have three environments:

-   develop
-   staging
-   production

Local environment is required for developing. Before you start, run:

```
cp shared/src/config.local.ts shared/src/config.ts
```

This file (`shared/src/config.ts`) is ignored by git. So, feel free to change it.

## CI/CD setup

See [mobile/README.md](mobile/README.md) for initial setup.

CI/CD for whole monorepo is already set up using .gitlab-ci.yml. You need only to set CI/CD variables:

-   TESTS_AIDBOX_LICENSE_ID
-   TESTS_AIDBOX_LICENSE_KEY
-   TESTS_BACKEND_IMAGE_REPOSITORY (something like registry.bro.engineering/YOUR_PROJECT/backend)
-   KUBE_INGRESS_BASE_DOMAIN (something like YOUR_PROJECT.beda.software)

**Note:** backend image repository should be in one group along with monorepo

### yarn start

```sh
yarn start           # start watch all workspaces
yarn start:web       # start watch web workspace
yarn start:mobile    # start watch mobile workspace
```

### yarn test

```sh
yarn test            # launch tests for all workspaces
yarn test:web        # launch tests for web workspace
yarn test:mobile     # launch tests for mobile workspace
```

## Troubleshooting

-   Do not forget to add mobile native dependencies to `frontend/package.json` to workspaces/nohoist section

```json
"nohoist": [
    "**/react-native",
    "**/react-native/**",
    "**/react-native-navigation",
    "**/react-native-navigation/**"
]
```

You can see this error in cli in this case

`ERROR Invariant Violation: No callback found with cbID...`
