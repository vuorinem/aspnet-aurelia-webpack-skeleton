# ASP.NET Core / Aurelia / Webpack Skeleton

This is a SPA skeleton application for developing on Aurelia with ASP.NET Core server, using Webpack as the module / asset bundler.

The main focus is in the developer experience when using Visual Studio. It supportts different development workflows depending on user preferences and available tools.

## Usage

### Traditional

Build & Start from VS every time when making changes.

### Watcher

Build & Start from VS once and start ```watch``` script on the background (using either command line or [NPM Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)). Application will automatically re-build when making changes, so refreshing the browser will show them.

### Dev Server

Run ```start``` script (using command line or Task Runner). Changes will automatically show up in the browser without refresh, using Hot Module Replacement.

## Current technology choices

- ASP.NET Core 2.0
- Webpack 4
- Aurelia
- Typescript
- Yarn (should work with npm too)

## Planned development
- Use Bootstrap 4
- Sass loader config