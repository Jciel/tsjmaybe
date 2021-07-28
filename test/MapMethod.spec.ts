import { Maybe, Some, None } from "../src"

describe('Test method map from maybe type', () => {

  let maybeSomeNumber: Maybe<number>
  let maybeNoneNumber: Maybe<number>
  let testando: Maybe<number>

  beforeAll(() => {
    maybeSomeNumber = new Some(4)
    maybeNoneNumber = new None()
  })

  test('Test method map in a Some with function that returns a number, in this case it should return ' +
      'a Some with the value', () => {

    const mapSomeReturnValue = maybeSomeNumber.map((value: number) => value * 2)

    expect(mapSomeReturnValue).toBeInstanceOf(Some)
    expect(mapSomeReturnValue.getValue()).toEqual(8)
  })

  test('Test method map in a Some with function that returns a value with a diferent type from the original, ' +
      'in this case it should return a Some with the  new value type', () => {

    const mapSomeReturnAnotherType = maybeSomeNumber.map((value: number) => "string returned")

    expect(mapSomeReturnAnotherType).toBeInstanceOf(Some)
    expect(mapSomeReturnAnotherType.getValue()).toEqual("string returned")
  })

  test('Test method map in a Some with function that returns "void", in this case it should return a None', () => {

    const mapSomeReturnVoid = maybeSomeNumber.map((value: number) => { return } )

    expect(mapSomeReturnVoid).toBeInstanceOf(None)
    expect(mapSomeReturnVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some with function that returns undefined, in this case it should return a None', () => {

    const mapSomeReturnUndefined = maybeSomeNumber.map((value: number) => { return undefined } )

    expect(mapSomeReturnUndefined).toBeInstanceOf(None)
    expect(mapSomeReturnUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some with function that returns an object, in this case it should return a Some ' +
      'with the object', () => {

    const mapSomeReturnObject = maybeSomeNumber.map((value: number) => { return { a: 4 }} )

    expect(mapSomeReturnObject).toBeInstanceOf(Some)
    expect(mapSomeReturnObject.getValue()).toEqual({ a: 4 })
    expect(mapSomeReturnObject.getValue()).toHaveProperty("a")
  })


  test('Test method map in a Some with function that alter the value object, in this case it should return a' +
      'Some but not alter the original object. I can alter the Some value and not alter the original object', () => {

    const val = { a: 1, b: 2 }
    const objOrigin = new Some(val)
    const mapSomeAlterObject = objOrigin.map((value) => {
      value.a = 55
      return value
    })

    expect(mapSomeAlterObject).toBeInstanceOf(Some)
    expect(mapSomeAlterObject.getValue()).toEqual({ a: 55, b: 2})
    expect(val).toEqual({ a: 1, b: 2})
  })

  test('Test method map in a Some with function that returns an exist object, in this case it should return a' +
      'Some but not the same exist object. I can alter the original object and not alter the Some value', () => {

    const val = { a: 1, b: 2 }
    const mapSomeAlterObject = maybeSomeNumber.map((value) => {
      return val
    })

    val.a = 99

    expect(mapSomeAlterObject).toBeInstanceOf(Some)
    expect(mapSomeAlterObject.getValue()).toEqual({ a: 1, b: 2 })
    expect(val).toEqual({ a: 99, b: 2 })
  })

  test('Test method map in a Some applying a sequence of functions, in this case it should return ' +
      'a Some with the value from the last aplication', () => {

    const mapSomeChain = maybeSomeNumber.map(v => v + 2).map(v => v + 4)

    expect(mapSomeChain).toBeInstanceOf(Some)
    expect(mapSomeChain.getValue()).toEqual(10)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns "void", ' +
      'in this case it should return a None', () => {

    const mapSomeChainVoid = maybeSomeNumber.map(s => { return }).map(s => 9)

    expect(mapSomeChainVoid).toBeInstanceOf(None)
    expect(mapSomeChainVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns undefined, ' +
      'in this case it should return a None', () => {

    const mapSomeChainUndefined = maybeSomeNumber.map(s => { return undefined }).map(s => 9)

    expect(mapSomeChainUndefined).toBeInstanceOf(None)
    expect(mapSomeChainUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a Some applying a sequence of functions in which one returns null, ' +
      'in this case it should return a None', () => {

    const mapSomeChainNull = maybeSomeNumber.map(s => { return null }).map(s => 9)

    expect(mapSomeChainNull).toBeInstanceOf(None)
    expect(mapSomeChainNull.getValue()).toEqual(undefined)
  })


  test('Test method map in a None with function that returns a number, in this case it should return ' +
      'a None', () => {

    const mapNoneReturnValue = maybeNoneNumber.map((value: number) => 2)

    expect(mapNoneReturnValue).toBeInstanceOf(None)
    expect(mapNoneReturnValue.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns a value with a diferent type from the original, ' +
      'in this case it should return a None', () => {

    const mapNoneReturnAnotherType = maybeNoneNumber.map((value: number) => "string returned")

    expect(mapNoneReturnAnotherType).toBeInstanceOf(None)
    expect(mapNoneReturnAnotherType.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns "void", in this case it should return a None', () => {

    const mapNoneReturnVoid = maybeNoneNumber.map((value: number) => { return } )

    expect(mapNoneReturnVoid).toBeInstanceOf(None)
    expect(mapNoneReturnVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns undefined, in this case it should return a None', () => {

    const mapNoneReturnUndefined = maybeNoneNumber.map((value: number) => { return undefined } )

    expect(mapNoneReturnUndefined).toBeInstanceOf(None)
    expect(mapNoneReturnUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a None with function that returns an object, in this case it should return a None', () => {

    const mapNoneReturnObject = maybeNoneNumber.map((value: number) => { return { a: 4 }} )

    expect(mapNoneReturnObject).toBeInstanceOf(None)
    expect(mapNoneReturnObject.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions, in this case it should return a None', () => {

    const mapNoneChain = maybeNoneNumber.map(v => 2).map(v => v + 4)

    expect(mapNoneChain).toBeInstanceOf(None)
    expect(mapNoneChain.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions in which one returns "void", ' +
      'in this case it should return a None', () => {

    const mapNoneChainVoid = maybeNoneNumber.map(s => { return }).map(s => 9)

    expect(mapNoneChainVoid).toBeInstanceOf(None)
    expect(mapNoneChainVoid.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions in which one returns undefined, ' +
      'in this case it should return a None', () => {

    const mapNoneChainUndefined = maybeNoneNumber.map(s => { return undefined }).map(s => 9)

    expect(mapNoneChainUndefined).toBeInstanceOf(None)
    expect(mapNoneChainUndefined.getValue()).toEqual(undefined)
  })

  test('Test method map in a None applying a sequence of functions in which one returns null, ' +
      'in this case it should return a None', () => {

    const mapNoneChainNull = maybeNoneNumber.map(s => { return null }).map(s => 9)

    expect(mapNoneChainNull).toBeInstanceOf(None)
    expect(mapNoneChainNull.getValue()).toEqual(undefined)
  })
})
