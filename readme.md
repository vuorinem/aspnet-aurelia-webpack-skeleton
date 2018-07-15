# ASP.NET Core / Aurelia / Webpack Skeleton

This is a SPA skeleton application for developing on Aurelia with ASP.NET Core server, using Webpack as the module / asset bundler.

The main focus is in the developer experience when using Visual Studio.

## Preparing

Run `dotnet restore` to install .NET Core libraries

Run `yarn install` or `npm install` to install JavaScript libraries

## Development

You can start the application directly from Visual Studio.

HMR (Hot Module Replacement) support uses [JavaScriptServices](https://github.com/aspnet/JavaScriptServices) and is configured by calling `UseWebpackDevMiddleware`.

## Publishing

A different webpack configuration will be used for publishing optimised output and separate css file for production. This is run automatically when publishing from VS.

## Technology choices

- ASP.NET Core 2.1
- Webpack 4
- Aurelia
- Typescript
- Bootstrap 4
- Sass
- Yarn (should work with npm too)
