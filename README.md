oclif-debug
===========



[![Version](https://img.shields.io/npm/v/oclif-debug.svg)](https://npmjs.org/package/oclif-debug)
[![CircleCI](https://circleci.com/gh/jdxcode/oclif-debug/tree/master.svg?style=shield)](https://circleci.com/gh/jdxcode/oclif-debug/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jdxcode/oclif-debug?branch=master&svg=true)](https://ci.appveyor.com/project/jdxcode/oclif-debug/branch/master)
[![Codecov](https://codecov.io/gh/jdxcode/oclif-debug/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/oclif-debug)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-debug.svg)](https://npmjs.org/package/oclif-debug)
[![License](https://img.shields.io/npm/l/oclif-debug.svg)](https://github.com/jdxcode/oclif-debug/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-debug
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
oclif-debug/0.0.0 darwin-x64 node-v10.3.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)

## `oclif-example hello [FILE]`

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jdxcode/oclif-debug/blob/v0.0.0/src/commands/hello.ts)_
<!-- commandsstop -->
