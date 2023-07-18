<template>
  <h1>测试登录</h1>
</template>

<script setup lang="ts">
const num = 123;
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
function getBear() {
  return {
    name: "22",
    honey: true
  };
}
// const bear:Bear = getBear()
// // const x = "hello" as number;

// let x: "hello" = "hello";

// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" } as const;
// console.log(req);
// handleRequest(req.url, req.method);

// 使用.!对必存在的对象可以使用
// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }

// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       // 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }
// getUsersOnlineMessage(222);

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }

// type Shape = Circle | Square ;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//       default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }

// 使用后置感叹号！
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//     // 'shape.radius' is possibly 'undefined'.
//   }
//   return shape.sideLength ** 2
// }

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc);

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// // s is of type 'string'
// const s = firstElement(["a", "b", "c"]);
// // n is of type 'number'
// const n = firstElement([1, 2, 3]);
// // u is of type undefined
// const u = firstElement([]);

// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//   return arr.map(func);
// }

// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// console.log(parsed);

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// longerArray is of type 'number[]'
// const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

// function fail(msg: string): never {
//   throw new Error(msg);
// }

// function multiply(n: number, ...m: number[]) {
//   return m.map((x) => n * x);
// }
// // 'a' gets value [10, 20, 30, 40]
// const a = multiply(10, 1, 2, 3, 4);

// const args = [8, 5] as const;
// const angle = Math.atan2(...args);
// type voidFunc = () => void;

// const f1: voidFunc = () => {
//   return true;
// };

// const f2: voidFunc = () => true;

// const f3: voidFunc = function () {
//   return true;
// };

// const v1 = f1();

// const v2 = f2();

// const v3 = f3();

// function f22(): void {
//   // @ts-expect-error
//   return true;
// }

// const f33 = function (): void {
//   // @ts-expect-error
//   return true;
// };

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle = {
//   color: "red",
//   radius: 42,
// };

// interface Box<Type> {
//   contents: Type;
// }

// let x: Box<string> = {
//   contents: "hello world",
// };

// let y:Box<number> = {
//   contents:123
// }
// // we could check 'x.contents'
// if (typeof x.contents === "string") {
//   console.log(x.contents.toLowerCase());
// }

// // or we could use a type assertion
// console.log((x.contents as string).toLowerCase());

// type Point = { x: number; y: number };
// type P = keyof Point;

// interface Backpack<T> {
//   add:(obj:T)=>void,
//   get:()=>T
// }

// declare const backpack:Backpack<string>;
// const object = backpack.get()
// backpack.add('23')

// interface Point {
//   x: number;
//   y: number;
// }

// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`);
// }
// // ---cut---
// class VirtualPoint {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const newVPoint = new VirtualPoint(13, 56);
// console.log(newVPoint);

// logPoint(newVPoint); // logs "13, 56"

// type FString = string & { __compileTimeOnly: any };
// let a:ReadonlyArray<string> = ['2','3','4']

//   interface IPerson {
//   age: number;
//   name: string;
// }

// interface IPeoPle extends IPerson {
//   sex: string;
// }

// let p:IPeoPle = {
//   age: 12,
//   name: "alice",
//   sex: "male",
// }

// class User implements IPerson {
//   age: number;
//   name: string;
//   fn?:()=>void
//   constructor(age: number, name: string) {
//     this.age = age
//     this.name = name
//     this.fn = () => {
//       console.log('hello')
//     }
//   }
// }
// interface IRoles extends User{
//   roles: string[]
// }
// const i:IRoles = {
//   age: 22,
//   name: "alice",
//   roles: ['admin']
// }

// declare function getInput(): string;
// declare function sanitize(str: string): string;
// // ---cut---
// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }

// // Create a sanitized input
// let userInput = sanitizeInput(getInput());

// // Can still be re-assigned with a string though
// userInput = "new input";

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// declare function getSmallPet(): Fish | Bird;
// // ---cut---
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// type Fish = { swim: () => void; name: string };
// type Bird = { fly: () => void; name: string };
// declare function getSmallPet(): Fish | Bird;
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }
// // function getSmallPet(): Fish | Bird {
// //   return { swim: () => {}, name: "sharkey" };
// // }
// // ---cut---
// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// console.log(zoo);

// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });

// prettier-ignore
// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//   return arr.map(func);
// }

// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// console.log(parsed);

// @errors: 2532 18048
// declare function myForEach(
//   arr: any[],
//   callback: (arg: any, index?: number) => void
// ): void;
// // ---cut---
// myForEach([1, 2, 3], (a, i) => {
//   console.log(i!.toFixed());
// });

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3, );

// interface User {
//   id: number;
//   isAdmin: boolean;
// }
// declare const getDB: () => DB;
// // ---cut---
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }

// const db = getDB();
// const admins = db.filterUsers(() => true);

// const args = [8, 5] as const;
// const angle = Math.atan2(...args);

// @errors: 2345 2739
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName:string]:any
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return {
//     color: config.color || "red",
//     area: config.width ? config.width * config.width : 20,
//   };
// }

// let mySquare = createSquare({ color: "red", width: 100 });
// let mySquare1 = createSquare({ opacity: "red", width: 100 } as SquareConfig );

// let squareOptions = { colour: "red" } as SquareConfig;
// let mySquare2 = createSquare(squareOptions);

// @errors: 2345
// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }
// // ---cut---
// function draw(circle: Colorful & Circle) {
//   console.log(`Color was ${circle.color}`);
//   console.log(`Radius was ${circle.radius}`);
// }

// // okay
// draw({ color: "blue", radius: 42 });

// function identity<T>(arg: T): T {
//   return arg;
// }
// identity("hello");

// let myIdentity: { <Type>(arg: Type): Type } = identity;
// let myIdentity1: <Type>(arg: Type)=>Type = identity;
// myIdentity(42)

// type Point = { x: number; y: number };
// type P = keyof Point;

// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish;

// function f() {
//   return { x: 10, y: 3 };
// }
// type P = ReturnType<typeof f>;
// let p:P = {
//   x: 10,
//   y: 3
// }

// Removes 'readonly' attributes from a type's properties
// type CreateMutable<Type> = {
//   -readonly [Property in keyof Type]: Type[Property];
// };

// type LockedAccount = {
//   readonly id: string;
//   readonly name: string;
// };

// type UnlockedAccount = CreateMutable<LockedAccount>;
// let UnlockedAccount1: UnlockedAccount = {
//   id: "123",
//   name: "alice",
// }

// Removes 'optional' attributes from a type's properties
// type Concrete<Type> = {
//   [Property in keyof Type]+?: Type[Property];
// };

// type MaybeUser = {
//   id: string;
//   name?: string;
//   age?: number;
// };

// type User = Concrete<MaybeUser>;

// let user: User = {
//   id: "123",
//   name: "alice",
//   age: 12,
// }

// type Getters<Type> = {
//     [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// };

// interface Person {
//     name: string;
//     age: number;
//     location: string;
// }

// type LazyPerson = Getters<Person>;
// const lazyPerson: LazyPerson = {
//    getName: () => "alice",
//    getAge: () => 12,
//    getLocation: () => "china",
// }

// type Greeting = "Hello, world"
// type ShoutyGreeting = Uppercase<Greeting>
// //   ^?

// type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
// type MainID = ASCIICacheKey<"my_app">
// let MainID1: MainID = "ID-MY_APP"

// type A = Awaited<Promise<unknown>>;

//   type B = Awaited<Promise<Promise<number>>>;

//   type C = Awaited<boolean | Promise<number>>;

// partial
// interface Todo {
//   title: string;
//   description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };

// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });

//omit

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };

// todo;
// // ^?

// type TodoInfo = Omit<Todo, "completed" | "createdAt">;

// const todoInfo: TodoInfo = {
//   title: "Pick up kids",
//   description: "Kindergarten closes at 5pm",
// };

// todoInfo;

// exclude
// type T0 = Exclude<"a" | "b" | "c", "a">;
// //    ^?
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// //    ^?
// type T2 = Exclude<string | number | (() => void), Function>;
// //    ^?

// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };

// type T3 = Exclude<Shape, { kind: "circle" }>
// //    ^?

// interface SearchFunction {
//   (query: string): string[];
// }

// let mySearch: SearchFunction = function(query: string): string[] {
//   return [query];
// }
// console.log(mySearch("hello"));

// interface Shape {
//   color: string;
// }

// interface PenStroke {
//   penWidth:number;
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }

// let square:Square = {
//   color: "blue",
//   sideLength: 10,
//   penWidth: 5
// }
// function myAdd<T>(a: T, b: T): T {
//   return a + b;
// }

// interface Card {
//     suit: string;
//     card: number;
// }

// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }

// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return ()=> {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// @errors: 2345
// type NetworkLoadingState = { state: "loading" };
// type NetworkFailedState = { state: "failed"; code: number };
// type NetworkSuccessState = { state: "success" };
// type NetworkFromCachedState = { state: "from_cache" };

// type NetworkState =
//   | NetworkLoadingState
//   | NetworkFailedState
//   | NetworkSuccessState
//   | NetworkFromCachedState;
// // ---cut---
// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }

// function logger(s: NetworkState): string {
//   switch (s.state) {
//     case "loading":
//       return "loading request";
//     case "failed":
//       return `failed with code ${s.code}`;
//     case "success":
//       return "got response";
//     case "from_cache":
//       return "from cache";
//     default:
//       return assertNever(s);
//   }
// }

// function loggingIdentity<T>(arg:T[]): T[] {
//   // if(typeof arg === "string"){
//     console.log(arg.length);  // Error: T doesn't have .length
//   // }
//   return arg;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: { <T>(arg: T): T} = identity;

// interface GenericIdentityFn<T> {
//   <T>(arg: T): T
// }

// function identityFn<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<boolean> = identityFn

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

// loggingIdentity()

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };
// console.log(getProperty(x, 'a'));

// function create<T>(c:{ new(): T}): T {
//   return new c();
// }
// interface Person {
//   name: string;
//   age: number;
// }

// class BeeKeeper {
//     hasMask: boolean;
//     constructor() {
//         this.hasMask = true;
//     }
// }

// class ZooKeeper {
//     nametag: string;
//     constructor() {
//         this.nametag = "default";
//     }
// }

// class Animal {
//     numLegs: number;
//     constructor() {
//         this.numLegs = 4;
//     }
// }

// class Bee extends Animal {
//     keeper: BeeKeeper;
//     constructor() {
//         super();
//         this.keeper = new BeeKeeper();
//     }
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
//     constructor() {
//         super();
//         this.keeper = new ZooKeeper();
//     }
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!

// interface Article {
//     title: string;
//     content: string;
//     tags: string;
//     author: string;
//     date:Date;
//     readCounte: number;
// }

// type ArticlePreview = Pick<Article, "title" | "content">
// // 泛型工具函数可选属性
// type Optional<T,K extends keyof T> = Omit<T,K> & Partial<Pick<T,K>>

// type CreateArticleOptions = Optional<Article, "author" | "date" | "readCounte">

// function createArticle(options:CreateArticleOptions){}

// interface ComplexObject{
//   mandatory: string;
//   optional?: string;
//   optional1?:boolean
// }
// // 泛型工具函数获取可选的字段
// type GetOptional<T> = {
//   [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
// }

// type Optionals  = GetOptional<ComplexObject>
// let keys:GetOptional<ComplexObject>

type Watcher<T> = {
  on<K extends string & keyof T >(eventName: `${K}Changed`, callback: (oldValue: T[K], newValue: T[K ]) => void): void;
}

declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  name: "张三",
  age: 12,
  gender: "male",
  address: {}
});

personWatcher.on("ageChanged", (oldValue, newValue) => {
  console.log(oldValue, newValue);
});
</script>

<style scoped></style>
