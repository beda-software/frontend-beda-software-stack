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
-   K8S_CONFIG - textual representation of config (save it as a var)

**Note:** backend image repository should be in one group along with monorepo

Before first deploy:

1. fill shared/src/config.TIER.ts with needed settings
2. create namespace `YOUR_PROJECT-REPOSITORY_NAME-web-TIER` for each tier, where `YOUR_PROJECT` is the name of the group in gitlab, `REPOSITORY_NAME` is the name of this repository (default is frontend) and `TIER` is develop/staging/production.
3. Create deploy token in gitlab for each tier
4. Run command

```
kubectl -n NAMESPACE create secret docker-registry gitlab-registry --docker-username=TOKEN_USERNAME --docker-password=TOKEN_PASSWORD --docker-email=YOUR_EMAIL --docker-server=registry.bro.engineering
```

for each namespace

As a result, your site will be accesible via `TIER-web.KUBE_INGRESS_BASE_DOMAIN`, for example `develop-web.example.beda.software`

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

## Push notifications

Mobile template includes setup for push notifications. To finish up setup:

-   On ios use your developer certificate

-   On android you need to configure google-services.json. See https://firebase.google.com/docs/android/setup for details

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

If any of native dependencies was omitted you'll see this error

`ERROR Invariant Violation: No callback found with cbID...`
