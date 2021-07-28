import { Maybe, Some, None } from "../src/Maybe"

describe('Test method withDefaultValue from maybe type', () => {
    let maybeSomeNumber: Maybe<number>
    let maybeNoneNumber: Maybe<number>

    beforeAll(() => {
        maybeSomeNumber = new Some(4)
        maybeNoneNumber = new None()
    })

    test('Test method withDefaultValue with default value', () => {
        const defaultSomeNumber = maybeSomeNumber.withDefaultValue(7)
        const defaultNoneNumber = maybeNoneNumber.withDefaultValue(7)

        expect(defaultSomeNumber).toBeInstanceOf(Some)
        expect(defaultNoneNumber).toBeInstanceOf(Some)
        expect(defaultSomeNumber.getValue()).toEqual(4)
        expect(defaultNoneNumber.getValue()).toEqual(7)
    })

    test('Test of method withDefaultValue after method matchWith witch are Some and return an value, ' +
        'in this case the result of Some pattern are another Some and the withDefaultValue method return a Some ' +
        'with the same value', () => {

        const defaulMatchWithSomeReturnSameType = maybeSomeNumber.matchWith({
            Some: (value: number) => { return 25 },
            None: () => { return undefined }
        }).withDefaultValue(8)

        expect(defaulMatchWithSomeReturnSameType).toBeInstanceOf(Some)
        expect(defaulMatchWithSomeReturnSameType.getValue()).toEqual(25)
    })

    test('Test of method withDefaultValue after method matchWith witch are Some and return undefined, ' +
        'this case the result of Some pattern is an None and the withDefaultValue method return an Some with' +
        'the value', () => {

        const defaulMatchWithSomeReturnUndefined = maybeSomeNumber.matchWith({
            Some: (value: number) => { return undefined },
            None: () => { return 20 }
        }).withDefaultValue(8)

        expect(defaulMatchWithSomeReturnUndefined).toBeInstanceOf(Some)
        expect(defaulMatchWithSomeReturnUndefined.getValue()).toEqual(8)
    })

    test('Test of method withDefaultValue after method matchWith witch are None and return an value, ' +
        'this case result of None pattern return an Some and the withDefaultMethod return a Some with same ' +
        'value', () => {

        const defaulMatchWithNoneReturnSameType = maybeNoneNumber.matchWith({
            Some: (value: number) => { return 5 },
            None: () => { return 33 }
        }).withDefaultValue(8)

        expect(defaulMatchWithNoneReturnSameType).toBeInstanceOf(Some)
        expect(defaulMatchWithNoneReturnSameType.getValue()).toEqual(33)
    })

    test('Test of method withDefaultValue after method matchWith with are None and return undefined, ' +
        'in this case the result os None pattern is a None and the withDefaultMethod return A Some with the ' +
        'default value', () => {

        const defaulMatchWithNoneReturnUndefined = maybeNoneNumber.matchWith({
            Some: (value: number) => { return 5 },
            None: () => { return undefined }
        }).withDefaultValue(8)

        expect(defaulMatchWithNoneReturnUndefined).toBeInstanceOf(Some)
        expect(defaulMatchWithNoneReturnUndefined.getValue()).toEqual(8)
    })
})
