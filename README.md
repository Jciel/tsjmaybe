
# tsjmaybe

Maybe is a type with tow variantes Some and None, can have nothing (None) or some value (Some).  
The Maybe variable makes it possible to have a something depending on the particular value.  

<br>

#### Starting
tsjmaybe is available as a package on npm.
```
$ npm install tsjmaybe
```

<br>

#### Definition
```typescript
type Maybe<T> = 
    | Some<T>
    | None<T>
```  

<br>
<br>

__getValue__ -> T   
```typescript
const existString: Maybe<string> = new Some(" maybe ")
const noExistString: Maybe<string> = new None()

existString.getValue()   // " maybe "
noExistString.getValue() //
```

<br>

__map__ \<U\>(T) => U -> Maybe\<U\>    
```typescript
const existString: Maybe<string> = new Some(" maybe ")
const noExistString: Maybe<string> = new None()

const resultMapExistString = existString
                               .map(s => s.trim())
                               .map(s => s.toUpperCase()) // Maybe<string> -> Some { value: "MAYBE" }


const resultMapNoExistString = noExistString
                                 .map(s => s.trim())
                                 .map(s => s.toUpperCase()) // Maybe<string> -> None {}

```

<br>

__matchWith__ \<U, C\>{ Some: (T) => U, None: () => C } -> Maybe\<U\> | Maybe\<C\>    
```typescript
const existString: Maybe<string> = new Some(" maybe ")
const noExistString: Maybe<string> = new None()

const matchWithString = existString.matchWith({
        Some: (value: string) => {              
            return value.length
        },
        None: () => {
            return
        }
    }) // Maybe<number> -> Some { value: 5 }

const matchWithNoString = noExistString.matchWith({
        Some: (value: string) => {
            return value.length
        },
        None: () => {
            return
        }
    }) // Maybe<string> -> None {}


const matchWithReturnNewMaybe = noExistString.matchWith({
        Some: (value: string) => {
            return value.length
        },
        None: () => {
            return "Add some string"
        }
    }) // Maybe<string> -> Some { value: "Add some string" }
```  

<br>

__withDefaultValue__ T -> Maybe\<T\>      
```typescript
const some: Maybe<number> = new Some(7) // Some { value: 7 }
const none: Maybe<number> = new None()  // None {}

const defaultSome = some.withDefaultValue(4) // Some { value: 7 }
const defaultNone = none.withDefaultValue(4) // Some { value: 4 }


const noExistString: Maybe<string> = new None()
const matchWithNoString = noExistString.matchWith({
        Some: (value: string) => {
            return value.length
        },
        None: () => {
            return
        }
    }).withDefaultValue("Length unknown") // Maybe<string> -> Some { value: "Length unknown" }
```
    

<br>
<br>

#### Contribute

Report a suggestion by posting an issue   
Star the project

<br>

#### License
MIT
