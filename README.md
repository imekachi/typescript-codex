# typescript-codex

A package that includes useful typescript types and utilities from my typescript learning journey.

Feel free to download and use it if you find it useful.

Some are copied from the internet, some I wrote them myself.

## Installation

```sh
npm i -D typescript-codex
```

## Usage
```ts
import { FlattenObj, NestedObj } from 'typescript-codex
import { flatten } from flat

// An example of how to resolve tailwind config to flattened config obj
export const resolveNestedKeys = <T extends NestedObj<string | number, string>>(obj: T) => {
  return flatten(obj, { delimiter: '-' }) as FlattenObj<T, '-'>
}
```