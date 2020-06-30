import { Maybe, Some, None } from "../src/Maybe"

describe('Test method map from maybe type', () => {
    let maybeSomeNumber: Maybe<number>
    let maybeNoneNumber: Maybe<number>

    beforeAll(() => {
        maybeSomeNumber = new Some(4)
        maybeNoneNumber = new None()
    })

    test('Test method matchWith', () => {
        const matchWithSome = maybeSomeNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return 0 }
        })
        const matchWithSomeReturnAnotherType = maybeSomeNumber.matchWith({
            Some: (value: number) => { return "string" },
            None: () => { return "" }
        })
        const matchWithSomeReturnVoid = maybeSomeNumber.matchWith({
            Some: (value: number) => { return },
            None: () => { return }
        })
        const matchWithSomeReturnNull = maybeSomeNumber.matchWith({
            Some: (value: number) => { return null },
            None: () => { return null }
        })
        const matchWithSomeReturnUndefined = maybeSomeNumber.matchWith({
            Some: (value: number) => { return undefined },
            None: () => { return }
        })
        const matchWithNoneReturnNumber = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return 0 }
        })
        const matchWithNoneReturnAnotherType = maybeNoneNumber.matchWith({
            Some: (value: number) => { return "" },
            None: () => { return "string" }
        })
        const matchWithNoneReturnVoid = maybeNoneNumber.matchWith({
            Some: (value: number) => { return },
            None: () => { return }
        })
        const matchWithNoneReturnUndefined = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return undefined }
        })

        const matchWithNoneReturnNull = maybeNoneNumber.matchWith({
            Some: (value: number) => { return value * 2 },
            None: () => { return null }
        })


        expect(matchWithSome instanceof Some).toEqual(true)
        expect(matchWithSomeReturnAnotherType instanceof Some).toEqual(true)
        expect(matchWithSomeReturnVoid instanceof None).toEqual(true)
        expect(matchWithSomeReturnNull instanceof None).toEqual(true)
        expect(matchWithSomeReturnUndefined instanceof None).toEqual(true)
        expect(matchWithNoneReturnNumber instanceof Some).toEqual(true)
        expect(matchWithNoneReturnAnotherType instanceof Some).toEqual(true)
        expect(matchWithNoneReturnVoid instanceof None).toEqual(true)
        expect(matchWithNoneReturnUndefined instanceof None).toEqual(true)
        expect(matchWithNoneReturnNull instanceof None).toEqual(true)

        expect(matchWithSome.getValue()).toEqual(8)
        expect(matchWithSomeReturnAnotherType.getValue()).toEqual("string")
        expect(matchWithSomeReturnVoid.getValue()).toEqual(undefined)
        expect(matchWithSomeReturnNull.getValue()).toEqual(undefined)
        expect(matchWithSomeReturnUndefined.getValue()).toEqual(undefined)
        expect(matchWithNoneReturnNumber.getValue()).toEqual(0)
        expect(matchWithNoneReturnAnotherType.getValue()).toEqual("string")
        expect(matchWithNoneReturnVoid.getValue()).toEqual(undefined)
        expect(matchWithNoneReturnUndefined.getValue()).toEqual(undefined)
        expect(matchWithNoneReturnNull.getValue()).toEqual(undefined)
    })
})
