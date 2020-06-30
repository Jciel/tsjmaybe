import { Maybe, Some, None } from "../src/Maybe"

describe('Test method map from maybe type', () => {

  test('Test method map with data type number', () => {
    let maybeSomeNumber: Maybe<number>
    let maybeNoneNumber: Maybe<number>

    maybeSomeNumber = new Some(4)
    maybeNoneNumber = new None()

    const mapSomeNumber = maybeSomeNumber.map((value: number) => value * 2)
    const mapNoneNumber = maybeNoneNumber.map((value: number) => value * 2)
    const mapSomeReturnAnotherType = maybeSomeNumber.map((value: number) => "string returned")
    const mapSomeReturnVoid = maybeSomeNumber.map((value: number) => { return } )
    const mapSomeReturnUndefined = maybeSomeNumber.map((value: number) => { return undefined } )
    const mapSomeReturnObject = maybeSomeNumber.map((value: number) => { return { a: 4 }} )

    expect(maybeSomeNumber instanceof Some).toEqual(true)
    expect(maybeNoneNumber instanceof None).toEqual(true)
    expect(mapSomeNumber instanceof Some).toEqual(true)
    expect(mapNoneNumber instanceof None).toEqual(true)
    expect(mapSomeReturnAnotherType instanceof Some).toEqual(true)
    expect(mapSomeReturnVoid instanceof None).toEqual(true)
    expect(mapSomeReturnUndefined instanceof None).toEqual(true)
    expect(mapSomeReturnObject instanceof Some).toEqual(true)

    expect(mapSomeNumber.getValue()).toEqual(8)
    expect(mapNoneNumber.getValue()).toEqual(undefined)
    expect(mapSomeReturnAnotherType.getValue()).toEqual("string returned")
    expect(mapSomeReturnVoid.getValue()).toEqual(undefined)
    expect(mapSomeReturnUndefined.getValue()).toEqual(undefined)
    expect(mapSomeReturnObject.getValue()).toEqual({ a: 4 })
    expect(mapSomeReturnObject.getValue()).toHaveProperty("a")
  })

  test('Test method map with data type string', () => {
    let maybeSomeString: Maybe<string>
    let maybeNoneString: Maybe<string>

    maybeSomeString = new Some("Test ")
    maybeNoneString = new None()

    const mapSomeTrim = maybeSomeString.map(s => s.trim())
    const mapSomeChain = maybeSomeString.map(s => s.trim()).map(s => s.toUpperCase())
    const mapSomeReturnAnotherType = maybeSomeString.map((value: string) => 7)
    const mapSomeChainFail = maybeSomeString.map(s => { return }).map(s => "string")
    const mapNoneString = maybeNoneString.map(s => s.trim())
    const mapNoneChain = maybeNoneString.map(s => s.trim()).map(s => s.toUpperCase())
    const mapNoneReturnString = maybeNoneString.map(s => "string")


    expect(mapSomeTrim instanceof Some).toEqual(true)
    expect(mapSomeChain instanceof Some).toEqual(true)
    expect(mapSomeReturnAnotherType instanceof Some).toEqual(true)
    expect(mapNoneString instanceof None).toEqual(true)
    expect(mapNoneChain instanceof None).toEqual(true)
    expect(mapSomeChainFail instanceof None).toEqual(true)
    expect(mapNoneReturnString instanceof None).toEqual(true)

    expect(mapSomeTrim.getValue()).toEqual("Test")
    expect(mapSomeChain.getValue()).toEqual("TEST")
    expect(mapSomeReturnAnotherType.getValue()).toEqual(7)
    expect(mapNoneChain.getValue()).toEqual(undefined)
    expect(mapNoneReturnString.getValue()).toEqual(undefined)
  })

  test('Test method map with data type Array', () => {
    let maybeSomeArray: Maybe<number[]>
    let maybeNoneArray: Maybe<number[]>

    maybeSomeArray = new Some([1, 2, 3, 4])
    maybeNoneArray = new None()

    const mapSomeArray = maybeSomeArray.map((value: Array<number>) => value.map(v => v + 2))
    const mapSomeReturnAnotherType = maybeSomeArray.map((value: Array<number>) => "string")
    const mapSomeReturnVoid = maybeSomeArray.map((value: Array<number>) => { return })
    const mapSomeReturnUndefined = maybeSomeArray.map((value: Array<number>) => { return undefined })
    const mapNoneArray = maybeNoneArray.map((value: Array<number>) => value.map(v => v + 2))

    expect(mapSomeArray instanceof Some).toEqual(true)
    expect(mapSomeReturnAnotherType instanceof Some).toEqual(true)
    expect(mapSomeReturnVoid instanceof None).toEqual(true)
    expect(mapSomeReturnUndefined instanceof None).toEqual(true)
    expect(mapNoneArray instanceof None).toEqual(true)

    expect(mapSomeArray.getValue()).toEqual([3, 4, 5, 6])
    expect(mapSomeArray.getValue() instanceof Array).toEqual(true)
    expect(mapSomeReturnAnotherType.getValue()).toEqual("string")
    expect(mapSomeReturnVoid.getValue()).toEqual(undefined)
    expect(mapSomeReturnUndefined.getValue()).toEqual(undefined)
    expect(mapNoneArray.getValue()).toEqual(undefined)
  })

  test('Test method map with data type Object', () => {
    class SomeClass {
      field: number[] = [1, 2, 3]
      someMethod(): string {
        return "test"
      }
    }
    let someClass = new SomeClass()
    let maybeSomeObject: Maybe<SomeClass> = new Some(someClass)
    let maybeNoneObject: Maybe<SomeClass> = new None()

    const mapSomeObject = maybeSomeObject.map((value: SomeClass) => {
      value.field = [1, 5, 9]
      return value
    })

    const mapSomeReturnAnotherType = maybeSomeObject.map((value: SomeClass) => "string")


    expect(mapSomeObject instanceof Some).toEqual(true)
    expect(mapSomeReturnAnotherType instanceof Some).toEqual(true)

    expect(mapSomeObject.getValue()).toEqual({ field: [1, 5, 9] })
    expect(mapSomeObject.getValue() instanceof SomeClass).toEqual(true)
    expect(mapSomeReturnAnotherType.getValue()).toEqual("string")
  })
})
