# scss-watch

A very simple package to watch for scss file changes and generate the css file for them accordingly. This package will generate the file **in place** under the same name as the scss file.

This package can be installed globally or in just one project.

## Usage:
```
scss-watch <build|watch|help>
  build:   Compiles all the SCSS files in the current directory.
  watch:   Watches for changes and recompiles the changed SCSS files.
  help:    Prints this help menu.
```

## Usage Globally

scss-watch is a CLI tool that can be installed globally for use anywhere on the operating system. See "Usage" above for the syntax.

## Usage in a Project

scss-watch can also be installed on a single project if prefered. The commands can work in the scripts section of your `package.json` file. Example `package.json`:

```
{
  "name": "custom-package",
  "version": "1.0.0",
  "description": "a cool package",
  "main": "starting_file.js",
  "scripts": {
    "watch": "scss-watch watch",
    "build": "scss-watch build"
  }
}
```
