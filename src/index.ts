// ======= Primitive Types & Aliases ========

export type UnknownObj<K extends PropertyKey = PropertyKey> = Record<K, unknown>

export type NestedObj<K extends PropertyKey = PropertyKey, V = unknown> = {
  [Key in K]?: V | NestedObj<K, V>
}

// ======== Utility Types ========

export type ObjKey<O> = keyof O
export type ObjVal<O> = O[keyof O]

/**
 * Prettifies a complex type for easier debugging.
 */
export type Prettify<O> = {
  [K in keyof O]: O[K]
} & {}


export type IsEqual<X, Y, Then = true, Else = false> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? Then
  : Else

/**
 * errors at TypeScript compile-time if passed a value that is not `true`:
 * 
 * the following will not error and will return `true`;
 *
 * ```ts
 * Expect<true>;
 * ```
 * 
 * all other inputs will return `false`.
 * 
 * all other inputs will error, except for `never`.
 * 
 * src: https://github.com/MichiganTypeScript/type-testing/blob/main/src/Expect.ts
 */
export type Expect<T extends true> = IsEqual<T, true, true, false>;

/**
 * Check if there is an object type in a union.
 */
export type IsObjIncluded<T> = Extract<T, UnknownObj> extends never ? false : true

export type JoinStr<S1 extends string, S2 extends string, Separator extends string = ''> = S1 extends '' ? S2 : S2 extends '' ? S1 : `${S1}${Separator}${S2}` 

/**
 * Extracts the value type from a nested object.
 */
export type NestedObjVal<O extends UnknownObj> = {
  [K in keyof O]: O[K] extends UnknownObj ? NestedObjVal<O[K]> : O[K]
}[keyof O]
