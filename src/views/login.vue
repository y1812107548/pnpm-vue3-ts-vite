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
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      // 'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
getUsersOnlineMessage(222);

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

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

type Point = { x: number; y: number };
type P = keyof Point;
</script>

<style scoped></style>
