# EasyEncrypt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dev notes
Install up-to-date versions of nodejs and npm via [nvm](https://github.com/creationix/nvm)

```
nvm install node
nvm use node
node -v # verify that version 10 as of 2018-05
npm -v # verify that version 5.6 as of 2018-05
```

Install [angular](https://angular.io/guide/quickstart)

```
npm install -g @angular/cli
ng new easy-encrypt
```

Serve with AWS instance

```
# need disable-host-check for https://stackoverflow.com/questions/43677629/invalid-host-header-when-running-angular-cli-development-server-c9-io#43712004
ng serve --host 0.0.0.0 --port 3000 --disable-host-check
```

Follow tutorial

..


```
npm install node-forge
```

Build and deploy

```
ng build
mv dist/easy-encrypt/* docs/
```
