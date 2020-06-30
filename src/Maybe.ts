export type Maybe<T> =
    | None<T>
    | Some<T>

export class Some<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value
    }

    map<U>(f: (value: T) =>  U): Maybe<U>  {
        let nv = f(this.value)
        if (typeof nv === "undefined" || nv === null) {
            return new None()
        }
        return new Some(nv)
    }

    matchWith<A>(pattern: { Some: (value: T) => A, None: () => A }): Maybe<A> {
        const v = pattern.Some(this.value)

        if (typeof v === "undefined" || v === null) {
            return new None<A>()
        }
        return new Some(v)
    }

    withDefaultValue(defValue: T): Maybe<T> {
        return new Some(this.value)
    }
}

export class None<T> {
    private value!: T

    getValue(): T { return this.value }

    map<U>(f: (value: T) => U): Maybe<U> {
        return new None()
    }

    matchWith<A>(pattern: { Some: (value: T) => A, None: () => A }): Maybe<A> {
        const v = pattern.None()
        if (typeof v === "undefined" || v === null) {
            return new None<A>()
        }
        return new Some(v)
    }

    withDefaultValue<C>(defValue: C): Maybe<C> {
        return new Some(defValue)
    }
}



