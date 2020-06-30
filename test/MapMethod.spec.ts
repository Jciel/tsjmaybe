import { Maybe, Some, None } from "../src"

describe('Test method map from maybe type', () => {

  let maybeSomeNumber: Maybe<number>
  let maybeNoneNumber: Maybe<number>

  beforeAll(() => {
    maybeSomeNumber = new Some(4)
    maybeNoneNumber = new None()
  })

  test('Test method map in a Some with function that returns a number, in this case it should return ' +
      'a Some with the value', () => {

    const mapSomeReturnValue = maybeSomeNumber.map((value: number) => value * 2)

    expect(mapSomeReturnValue instanceof Some).toEqual(true)
    expect(mapSomeReturnValue.getValue()).toEqual(8)
  })

  test('Test method map in a Some with function that returns a value with a diferent type from the original, ' +
      'in this case it should return a Some with the value', () => {

    const mapSomeReturnAnotherType = maybeSomeNumber.map((value: number) => "string returned")

    expect(mapSomeReturnAnotherType instanceof Some).toEqual(true)
    expect(mapSomeReturnAnotherType.getValue()).toEqual("string returned")
  })

  test('Test method map in a Some with function that returns "void", in this case it should return a None', () => {

    const mapSomeReturnVoid = maybeSomeNumber.map((value: number) => { return } )

    expect(mapSomeReturnVoid instanceof None).toEqual(true)
    expect(mapSomeReturnVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some with function that returns undefined, in this case it should return a None', () => {

    const mapSomeReturnUndefined = maybeSomeNumber.map((value: number) => { return undefined } )

    expect(mapSomeReturnUndefined instanceof None).toEqual(true)
    expect(mapSomeReturnUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some with function that returns an object, in this case it should return a Some ' +
      'with the object', () => {

    const mapSomeReturnObject = maybeSomeNumber.map((value: number) => { return { a: 4 }} )

    expect(mapSomeReturnObject instanceof Some).toEqual(true)
    expect(mapSomeReturnObject.getValue()).toEqual({ a: 4 })
    expect(mapSomeReturnObject.getValue()).toHaveProperty("a")
  })

  test('Test method map in a Some applying a sequence of functions, in this case it should return ' +
      'a Some with the value', () => {

    const mapSomeChain = maybeSomeNumber.map(v => v + 2).map(v => v + 4)

    expect(mapSomeChain instanceof Some).toEqual(true)
    expect(mapSomeChain.getValue()).toEqual(10)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns "void", ' +
      'in this case it should return a None', () => {

    const mapSomeChainVoid = maybeSomeNumber.map(s => { return }).map(s => 9)

    expect(mapSomeChainVoid instanceof None).toEqual(true)
    expect(mapSomeChainVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns undefined, ' +
      'in this case it should return a None', () => {

    const mapSomeChainUndefined = maybeSomeNumber.map(s => { return undefined }).map(s => 9)

    expect(mapSomeChainUndefined instanceof None).toEqual(true)
    expect(mapSomeChainUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns null, ' +
      'in this case it should return a None', () => {

    const mapSomeChainNull = maybeSomeNumber.map(s => { return null }).map(s => 9)

    expect(mapSomeChainNull instanceof None).toEqual(true)
    expect(mapSomeChainNull.getValue()).toEqual(undefined)
  })


  test('Test method map in a None with function that returns a number, in this case it should return ' +
      'a None', () => {

    const mapNoneReturnValue = maybeNoneNumber.map((value: number) => 2)

    expect(mapNoneReturnValue instanceof None).toEqual(true)
    expect(mapNoneReturnValue.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns a value with a diferent type from the original, ' +
      'in this case it should return a None', () => {

    const mapNoneReturnAnotherType = maybeNoneNumber.map((value: number) => "string returned")

    expect(mapNoneReturnAnotherType instanceof None).toEqual(true)
    expect(mapNoneReturnAnotherType.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns "void", in this case it should return a None', () => {

    const mapNoneReturnVoid = maybeNoneNumber.map((value: number) => { return } )

    expect(mapNoneReturnVoid instanceof None).toEqual(true)
    expect(mapNoneReturnVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns undefined, in this case it should return a None', () => {

    const mapNoneReturnUndefined = maybeNoneNumber.map((value: number) => { return undefined } )

    expect(mapNoneReturnUndefined instanceof None).toEqual(true)
    expect(mapNoneReturnUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns an object, in this case it should return a None', () => {

    const mapNoneReturnObject = maybeNoneNumber.map((value: number) => { return { a: 4 }} )

    expect(mapNoneReturnObject instanceof None).toEqual(true)
    expect(mapNoneReturnObject.getValue()).toEqual({ a: 4 })
    expect(mapNoneReturnObject.getValue()).toHaveProperty("a")
  })

  test('Test method map in a None applying a sequence of functions, in this case it should return a None', () => {

    const mapNoneChain = maybeNoneNumber.map(v => 2).map(v => v + 4)

    expect(mapNoneChain instanceof None).toEqual(true)
    expect(mapNoneChain.getValue()).toEqual(6)
  })

  test('Test method map in a None applying a sequence of functions in which one returns "void", ' +
      'in this case it should return a None', () => {

    const mapNoneChainVoid = maybeNoneNumber.map(s => { return }).map(s => 9)

    expect(mapNoneChainVoid instanceof None).toEqual(true)
    expect(mapNoneChainVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions in which one returns undefined, ' +
      'in this case it should return a None', () => {

    const mapNoneChainUndefined = maybeNoneNumber.map(s => { return undefined }).map(s => 9)

    expect(mapNoneChainUndefined instanceof None).toEqual(true)
    expect(mapNoneChainUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions in which one returns null, ' +
      'in this case it should return a None', () => {

    const mapNoneChainNull = maybeNoneNumber.map(s => { return null }).map(s => 9)

    expect(mapNoneChainNull instanceof None).toEqual(true)
    expect(mapNoneChainNull.getValue()).toEqual(undefined)
  })
})
