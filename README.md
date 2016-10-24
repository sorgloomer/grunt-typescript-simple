# grunt-typescript-simple

> tsc-like Grunt task

## Getting Started
This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typescript-simple --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typescript-simple');
```

## The "typescript_simple" task

### Overview
In your project's Gruntfile, add a section named `typescript_simple` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  typescript_simple: {
    options: {
      // typescript CompilerOptions
    },
    dist: {
      outDir: "dist",
      files: [{ cwd: "src", src: "**/*.ts", expand: true }]
    }
  },
});
```

### Options

All typescript compiler options can be used except `outFile`. See https://www.typescriptlang.org/docs/handbook/compiler-options.html. In addition, the plugin recognizes the following options:

#### options.typescript
Type: `Typescript`
Default value: `require("typescript")`

The `typescript` module to be used. By default the plugin will load the `"typescript"` peer dependency.


### Usage Examples

#### Default Options
In this example, the default options are used to compile typescript sources

```js
grunt.initConfig({
  typescript_simple: {
    dist: {
      outDir: "dist",
      files: [{ cwd: "src", src: "**/*.ts", expand: true }]
    }
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  typescript_simple: {
    options: {
      typescript: require("typescript"),
      target: "es5",
      modules: "es5",
      strictNullChecks: true,
      noImplicitAny: true
    },
    dist: {
      outDir: "dist",
      files: [{ cwd: "src", src: "**/*.ts", expand: true }]
    }
  },
});
```

## Release History

### 0.1.0

 * Throw on type errors from pre-emit diagnostics
 * Throw if emit failed for some reason
