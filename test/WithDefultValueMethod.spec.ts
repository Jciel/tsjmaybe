import { Maybe, Some, None } from "../src/Maybe"

describe('Test method withDefaultValue from maybe type', () => {
    let maybeSomeNumber: Maybe<number>
    let maybeNoneNumber: Maybe<number>

    beforeAll(() => {
        maybeSomeNumber = new Some(4)
        maybeNoneNumber = new None()

        let fff = maybeNoneNumber.withDefaultValue("7")
    })

    test('Test method withDefaultValue with default value', () => {
        const defaultSomeNumber = maybeSomeNumber.withDefaultValue(7)
        const defaultNoneNumber = maybeNoneNumber.withDefaultValue(7)

        expect(defaultSomeNumber instanceof Some).toEqual(true)
        expect(defaultNoneNumber instanceof Some).toEqual(true)
        expect(defaultSomeNumber.getValue()).toEqual(4)
        expect(defaultNoneNumber.getValue()).toEqual(7)
    })

    test('Test of method withDefaultValue after method matchWith', () => {
        const defaulMatchWithSomeReturnSameType = maybeSomeNumber.matchWith({
            Some: (value: number) => { return 25 },
            None: () => { return undefined }
        }).withDefaultValue(8)

        const defaulMatchWithSomeReturnUndefined = maybeSomeNumber.matchWith({
            Some: (value: number) => { return undefined },
            None: () => { return 20 }
        }).withDefaultValue(8)

        const defaulMatchWithNoneReturnSameType = maybeNoneNumber.matchWith({
            Some: (value: number) => { return 5 },
            None: () => { return 33 }
        }).withDefaultValue(8)

        const defaulMatchWithNoneReturnUndefined = maybeNoneNumber.matchWith({
            Some: (value: number) => { return 5 },
            None: () => { return undefined }
        }).withDefaultValue(8)

        expect(defaulMatchWithSomeReturnSameType instanceof Some).toEqual(true)
        expect(defaulMatchWithSomeReturnUndefined instanceof Some).toEqual(true)
        expect(defaulMatchWithNoneReturnSameType instanceof Some).toEqual(true)
        expect(defaulMatchWithNoneReturnUndefined instanceof Some).toEqual(true)

        expect(defaulMatchWithSomeReturnSameType.getValue()).toEqual(25)
        expect(defaulMatchWithSomeReturnUndefined.getValue()).toEqual(8)
        expect(defaulMatchWithNoneReturnSameType.getValue()).toEqual(33)
        expect(defaulMatchWithNoneReturnUndefined.getValue()).toEqual(8)
    })
})
