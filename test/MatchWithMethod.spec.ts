import { Maybe, Some, None } from "../src"

describe('Test method map from maybe type', () => {

    let maybeSomeNumber: Maybe<number>
    let maybeNoneNumber: Maybe<number>

    beforeAll(() => {
        maybeSomeNumber = new Some(4)
        maybeNoneNumber = new None()
    })

    test('Test method matchWith with an Some, this execute Some branch patern and that return an value, and ' +
        'in which case, they must returns Some with the value', () => {

        const matchWithSome = maybeSomeNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return 0 }
        })

        expect(matchWithSome instanceof Some).toEqual(true)
        expect(matchWithSome.getValue()).toEqual(8)
    })

    test('Test method matchWith with an Some, this execute Some branch pattern and that return an value with a ' +
        'diferent type from the original. They must returns a Some with the value' , () => {

        const matchWithSomeReturnAnotherType = maybeSomeNumber.matchWith({
            Some: (value: number) => { return "string" },
            None: () => { return "" }
        })

        expect(matchWithSomeReturnAnotherType instanceof Some).toEqual(true)
        expect(matchWithSomeReturnAnotherType.getValue()).toEqual("string")
    })

    test('Test method matchWith with an Some, this execute Some branch pattern and that return "void", This case ' +
        'must returns an None', () => {

        const matchWithSomeReturnVoid = maybeSomeNumber.matchWith({
            Some: (value: number) => { return },
            None: () => { return }
        })

        expect(matchWithSomeReturnVoid instanceof None).toEqual(true)
        expect(matchWithSomeReturnVoid.getValue()).toEqual(undefined)
    })

    test('Test method matchWith with an Some, this execute Some branch pattern and that return null, This case ' +
        'must returns an None', () => {

        const matchWithSomeReturnNull = maybeSomeNumber.matchWith({
            Some: (value: number) => { return null },
            None: () => { return null }
        })

        expect(matchWithSomeReturnNull instanceof None).toEqual(true)
        expect(matchWithSomeReturnNull.getValue()).toEqual(undefined)
    })

    test('Test method matchWith with an Some, this execute Some branch pattern and that return undefined, in this ' +
        'case that must returns an None', () => {

        const matchWithSomeReturnUndefined = maybeSomeNumber.matchWith({
            Some: (value: number) => { return undefined },
            None: () => { return }
        })

        expect(matchWithSomeReturnUndefined instanceof None).toEqual(true)
        expect(matchWithSomeReturnUndefined.getValue()).toEqual(undefined)
    })

    test('Test method matchWith with an None, this execute None branch pattern and that return an value, in this ' +
        'case, that return an Some with the value', () => {

        const matchWithNoneReturnNumber = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return 0 }
        })

        expect(matchWithNoneReturnNumber instanceof Some).toEqual(true)
        expect(matchWithNoneReturnNumber.getValue()).toEqual(0)
    })

    test('Test method matchWith with an None, this execute None branch pattern and that return an value with a ' +
        'diferent type from the original. They must returns a Some with the value', () => {

        const matchWithNoneReturnAnotherType = maybeNoneNumber.matchWith({
            Some: (value: number) => { return "" },
            None: () => { return "string" }
        })

        expect(matchWithNoneReturnAnotherType instanceof Some).toEqual(true)
        expect(matchWithNoneReturnAnotherType.getValue()).toEqual("string")
    })


    test('Test method matchWith with an None, this execute None branch pattern and that return "void", This case ' +
        'must returns an None', () => {

        const matchWithNoneReturnVoid = maybeNoneNumber.matchWith({
            Some: (value: number) => { return },
            None: () => { return }
        })

        expect(matchWithNoneReturnVoid instanceof None).toEqual(true)
        expect(matchWithNoneReturnVoid.getValue()).toEqual(undefined)
    })

    test('Test method matchWith with an None, this execute None branch pattern and that return undefined, in this ' +
        'case that must returns an None', () => {

        const matchWithNoneReturnUndefined = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return undefined }
        })

        expect(matchWithNoneReturnUndefined instanceof None).toEqual(true)
        expect(matchWithNoneReturnUndefined.getValue()).toEqual(undefined)
    })

    test('Test method matchWith with an None, this execute None branch pattern and that return null, This case ' +
        'must returns an None', () => {

        const matchWithNoneReturnNull = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return null }
        })

        expect(matchWithNoneReturnNull instanceof None).toEqual(true)
        expect(matchWithNoneReturnNull.getValue()).toEqual(undefined)
    })
})
