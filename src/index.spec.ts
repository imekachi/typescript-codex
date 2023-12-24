import { Expect, IsEqual, JoinStr } from '.'

const isEqual = {
  true: () => {
    type Actual = IsEqual<true, true>
    type Expected = true
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  false: () => {
    type Actual = IsEqual<true, false>
    type Expected = false
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  boolean: () => {
    type Actual = IsEqual<true, boolean>
    type Expected = false
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  object: () => {
    type Actual = IsEqual<{}, object>
    type Expected = false
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'empty object': () => {
    type Actual = IsEqual<{}, {}>
    type Expected = true
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'custom output then': () => {
    type Actual = IsEqual<true, true, 'yes', 'no'>
    type Expected = 'yes'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'custom output else': () => {
    type Actual = IsEqual<true, false, 'yes', 'no'>
    type Expected = 'no'
    type Test = Expect<IsEqual<Actual, Expected>>
  },

}

const joinStr = {
  'empty strings': () => {
    type Actual = JoinStr<'', ''>
    type Expected = ''
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'empty string and non-empty string': () => {
    type Actual = JoinStr<'', 'b'>
    type Expected = 'b'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'non-empty string and empty string': () => {
    type Actual = JoinStr<'a', ''>
    type Expected = 'a'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'non-empty strings': () => {
    type Actual = JoinStr<'a', 'b'>
    type Expected = 'ab'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'non-empty strings with separator': () => {
    type Actual = JoinStr<'a', 'b', '-'>
    type Expected = 'a-b'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
  'non-empty strings with separator of multiple characters': () => {
    type Actual = JoinStr<'a', 'b', '---'>
    type Expected = 'a---b'
    type Test = Expect<IsEqual<Actual, Expected>>
  },
}
