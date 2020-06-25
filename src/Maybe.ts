export type Maybe<T> =
    | None<T>
    | Some<T>

export class Some<T> {
    constructor(private value: T) {}
    getValue(): T | void { return this.value }
    map<U>(f: (t: T) =>  U): Maybe<U> { return new Some(f(this.value)) }
    matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
        return new Some(pattern.Some(this.value))
    }
}

export class None<T> {
    getValue(): T | void { return }
    map<U>(f: (t: T) => U):  Maybe<U> { return new None() }
    matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
        const v = pattern.None()
        if (typeof v === "undefined" || v === null) {
            return new None<C>()
        }
        return new Some(v)
    }
}
