const cloneDeep = require('lodash.clonedeep');

export type Maybe<T> =
    | None<T>
    | Some<T>

type MapParameter<T, U> = (value: T) => NonNullable<U> | null | undefined

type PaternMatch<T, A> = {
    Some: (value: T) => NonNullable<A> | null | undefined,
    None: () => NonNullable<A> | null | undefined
}

export class Some<T> {
    constructor(private value: NonNullable<T>) {
        this.value = cloneDeep(value)
    }

    getValue(): T {
        return this.value
    }

    map<U>(f: MapParameter<T, U>): Maybe<U>  {
        let nv = f(cloneDeep(this.value))
        if (typeof nv === "undefined" || nv === null) {
            return new None()
        }

        return new Some(nv)
    }

    matchWith<A>(pattern: PaternMatch<T, A>): Maybe<A> {
        const v = pattern.Some(cloneDeep(this.value))

        if (typeof v === "undefined" || v === null) {
            return new None<A>()
        }
        return new Some(v)
    }

    withDefaultValue(defValue: T): Maybe<T> {
        return new Some(cloneDeep(this.value))
    }
}

export class None<T> {
    private value!: T

    getValue(): T { return this.value }

    map<U>(f: MapParameter<T, U>): Maybe<U> {
        return new None()
    }

    matchWith<A>(pattern: PaternMatch<T, A>): Maybe<A> {
        const v = pattern.None()
        if (typeof v === "undefined" || v === null) {
            return new None<A>()
        }
        return new Some(v)
    }

    withDefaultValue<C>(defValue: C): Maybe<C> {
        return new Some(cloneDeep(defValue))
    }
}



