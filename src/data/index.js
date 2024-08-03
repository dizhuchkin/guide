export const typescriptData = [
	{
		key: "1",
		label: "Простые типы",
		href: "https://race-timo.gitbook.io/typescript",
		code: `/*
    Укажи значения, чтобы не было ошибок компиляции
*/
const a1: number = 10; // a1 должен быть числом
const a2: boolean = true; // a2 должен быть логическим значением
const a3: string = "lalaka"; // a3 должен быть строкой
const a4: number[] = [10]; // a4 должен быть массивом чисел
const a5: Array<string> = ["lalaka"]; // a5 должен быть массивом строк
const a6: [string] = ["lalaka"]; // a6 должен быть кортежем из одной строки
const a7: [boolean, number] = [true, 10]; // a7 должен быть кортежем из логического значения и числа
const a8: [number[], Array<string>] = [[10], ["lalaka"]]; // a8 должен быть кортежем из массива чисел и массива строк
const a10: [number, [number], [[number], [[number]]]] = [10, [10], [[10], [[10]]]]; // a10 должен быть кортежем с указанной структурой

/*
    Укажи типы, чтобы не было ошибок компиляции
*/
const b1: number = 70; // b1 должен быть числом
const b2: boolean = false; // b2 должен быть логическим значением
const b3: string = "lalaka"; // b3 должен быть строкой
const b4: boolean[] = [true, false]; // b4 должен быть массивом логических значений
const b6: [number, string] = [10, "10"]; // b6 должен быть кортежем из числа и строки
const b7: boolean[] = [...[true]]; // b7 должен быть массивом логических значений, используя spread оператор
const b8: [[number[]], [string[]]] = [[[...[10]]], [[...["10"]]]]; // b8 должен быть вложенным кортежем массивов чисел и строк

const check: boolean = b4[3]; // это вызовет ошибку, так как b4 имеет только два элемента

/*
    Обявите переменные, чтобы не было ошибок компиляции
    в этом блоке и блоке с проверками
*/
const c1 = 10; // c1 должен быть числом
const c2 = "lalaka"; // c2 должен быть строкой
const c3: [boolean, number] = [true, 10]; // c3 должен быть кортежем из логического значения и числа
const c4: string[] = ["malaka"]; // c4 должен быть массивом строк
/* Блок проверок */
const check_1: number = c1 + 5; // проверка: c1 плюс 5 должно быть числом
const check_2 = c2.substr(0); // проверка: вызов метода substr для строки c2
const check_3: boolean = c3[0]; // проверка: первый элемент c3 должен быть логическим значением
const check_4 = c3[1] + 5; // проверка: второй элемент c3 плюс 5 должно быть числом
const check_5 = c4.push("lalaka"); // проверка: метод push для массива строк c4, возвращает число

/*
    Задай типизацию и значения для a, b, c и d, так, чтобы
    не было ошибок компиляции.
*/

const a = 10; // a должен быть числом
const b: string = "qwe"; // b должен быть строкой
const c: [null, [string, boolean]] = [null, ["", false]]; // c должен быть кортежем с null и вложенным кортежем из строки и логического значения
const d: [number] = [10]; // d должен быть кортежем из одного числа

const q1 = a; // q1 присваивается значение a
const q2 = d[0]; // q2 присваивается первый элемент d
const q3 = q2 + q1 + d.length; // q3 присваивается сумма q2, q1 и длины d
const q4 = b.length + b[2].length; // q4 присваивается сумма длины строки b и длины символа в b по индексу 2
const q5 = b === c[1][0]; // q5 присваивается результат сравнения строки b и первого элемента вложенного кортежа c
const q6 = c[1][0] === c[1][0][0]; // q6 присваивается результат сравнения первого элемента вложенного кортежа c с первым символом этой строки
const q7 = q6 === q5 === c[1][1]; // q7 присваивается результат сравнения q6 и q5 и второго элемента вложенного кортежа c
const q8: null = c[0]; // q8 присваивается первый элемент c, который равен null`,
	},
	{
		key: "2",
		label: "Типы, как множества. Объединение, пересечения, литералы",
		href: "https://race-timo.gitbook.io/typescript/types-as-sets",
		code: `/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/*
    Укажи максимально строгие типы для a1, a2, a3, чтобы не было ошибок компиляции.
*/
let a1: 1 | 2; // a1 может быть либо 1, либо 2
a1 = 1; // допустимое значение
a1 = 2; // допустимое значение

let a2: number; // a2 может быть любым числом
a2 = 1; // допустимое значение
a2 = 2; // допустимое значение
a2 = 1 + 2; // допустимое значение

let a3: string | true; // a3 может быть либо строкой, либо true
a3 = "lal" + "a" + "ka"; // допустимое значение (строка)
a3 = true; // допустимое значение (логическое true)

/*
    Укажи максимально строгие типы для b1, b2, b3, чтобы не было ошибок компиляции.
*/
let b1: [number, 15 | 10]; // b1 должен быть кортежем, где второй элемент может быть либо 15, либо 10
b1 = [10, 15]; // допустимое значение
b1 = [15 + 7, 10]; // допустимое значение
// @ts-expect-error
b1[1] = 16; // ошибка, так как 16 не является допустимым значением для второго элемента

let b2: [string, [boolean, boolean]]; // b2 должен быть кортежем, содержащим строку и кортеж из двух логических значений
b2[0] = "lalaka"; // допустимое значение для первого элемента
b2[0] = b2[0] + b2[0]; // допустимое значение (конкатенация строки)
const check_b2_1: boolean[] = b2[1]; // тип значения внутри вложенного кортежа
// @ts-expect-error
b2[1][2]; // ошибка, так как индекс 2 выходит за пределы допустимого диапазона вложенного кортежа

let b3: Array<["number", 10] | ["boolean", true]>; // b3 должен быть массивом кортежей, где первый элемент может быть либо "number", либо "boolean", а второй - либо 10, либо true
const check_b3_1 = b3.length; // длина массива
const check_b3_2: string = b3[600][0]; // первый элемент одного из кортежей в массиве
const check_b3_3: number | boolean = b3[15][1]; // второй элемент одного из кортежей в массиве
b3.push(["number", 10]); // допустимый элемент
b3.push(["boolean", true]); // допустимый элемент
// @ts-expect-error
b3.push(["number", false]); // ошибка, так как false не является допустимым значением для второго элемента кортежа
// @ts-expect-error
b3.push(["boolean", 16]); // ошибка, так как 16 не является допустимым значением для второго элемента кортежа

/*
    Укажи максимально строгие типы для переменных d1 - d10, чтобы не было ошибок компиляции
*/
const c1 = 60, c2 = "lalaka", c3 = false; // константы c1, c2 и c3

const d1: 60 = c1; // d1 должен быть числом 60
const d2: number = c1 + c1; // d2 должен быть числом
const d3: string = c1 + c2; // d3 должен быть строкой, представляющей результат конкатенации числа и строки
const d4: boolean = c1 === 60; // d4 должен быть логическим значением, представляющим результат сравнения
const d5: [60, 60] = [c1, c1]; // d5 должен быть кортежем из двух чисел 60
const d6: string[] = [...c2]; // d6 должен быть массивом символов строки c2
const d7: number[] = [...[c1, c1]]; // d7 должен быть массивом чисел 60
const d8: Array<string | number> = [...[c1, c2]]; // d8 должен быть массивом, содержащим числа и строки
const d9: Array<number | string[]> = [...[c1, [...c2]]]; // d9 должен быть массивом, содержащим числа и массивы строк
const d10: Array<string | boolean | number> = [...d6, c2, ...[c3, c1]]; // d10 должен быть массивом, содержащим строки, логические значения и числа

/*
    Укажи любой тип для переменной e, чтобы болк ниже компилировался
*/
let e: any; // e может быть любого типа

const e1 = e; // e1 присваивается значение e
e.push("lalaka"); // допустимое действие для any типа
const e2: boolean = e[2]; // e2 присваивается значение элемента e по индексу 2, как логическое значение
const e3: [10, 15] = e; // e3 присваивается значение e, как кортеж [10, 15]
const e4: [string] = e; // e4 присваивается значение e, как кортеж из строки
const e5: Array<[string | 10]> = [...e[50]]; // e5 присваивается значение, как массив кортежей, содержащих либо строки, либо число 10`,
	},
	{
		key: "3",
		label: "Объекты",
		href: "https://race-timo.gitbook.io/typescript/objects",
		code: `/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/*
    Укажите значения, чтобы не было ошибок компиляции
*/
const a1: {} = {}; // Объект без свойств
const a2: { f1: number } = {f1: 1}; // Объект с обязательным числовым свойством f1
const a3: { f1: 10, f2: true | string } = {f1: 10, f2: true}; // Объект с f1 равным 10 и f2 типа true или string
const a4: { f1: number } | { f1: string } = {f1: 1}; // Объект с f1 типа number или string
const a5: { f1?: number, f2?: number } = {}; // Объект с необязательными свойствами f1 и f2 типа number

/*
    Укажите типы, чтобы не было ошибок компиляции
*/
let b1: {f: number | string} = { f: 15 + 15 }; // Объект с f типа number или string
b1 = { f: "lalaka" + "malaka" }; // f типа string

let b2: {f1?: [10], f2: {f3: string}} = { f2: { f3: "lalaka" } }; // Объект с необязательным f1 типа [10] и обязательным f2 с f3 типа string
b2 = { f1: [10], f2: { f3: "malaka" } }; // Правильное присвоение объекта

let b3: {f1: boolean } = { f1: true }; // Объект с f1 типа boolean
b3 = { f1: false }; // Правильное присвоение объекта
// @ts-expect-error
b3.f1 = true; // Ошибка: переопределение свойства внутри объекта не разрешено

let b4: {a: boolean, b: boolean, c?: boolean, q?: boolean, [index:string]: boolean} = { a: true, b: false }; // Объект с обязательными свойствами a и b типа boolean и необязательными c и q
b4["c"] = false; // Добавление свойства c
b4["q"] = false; // Добавление свойства q
b4["a" + "b"] = true; // Добавление свойства с динамическим именем ab

/*
    Укажите типы для CA, CB, CC, CD, чтобы не было ошибок компиляции
*/
type CA = string; // Тип CA - строка
type CB = boolean | number; // Тип CB - логическое значение или число
type CC = {f1: number | CB}; // Тип CC - объект с f1 типа number или CB
type CD = any[]; // Тип CD - массив любого типа

const c1: CA = "lalaka"; // Присвоение строки типу CA
const c2: CA = c1 + c1; // Конкатенация строк
const c3: CB = 10; // Присвоение числа типу CB
const c4: CB = false; // Присвоение логического значения типу CB
const c5: CC = { f1: 16 }; // Объект с f1 типа number
const c6: CC = { f1: c3 }; // Объект с f1 типа CB (number)
const c7: CD = []; // Пустой массив типа CD
c7.push({ a: "lalaka" }); // Добавление объекта в массив
c7.push({ ["a" + "b"]: "malaka" }); // Добавление объекта с динамическим свойством в массив

/*
    Используя переменную d, оператор взятия типа по ключам, typeof, keyof и
    type alias-ы DA - DF укажите типы для DA - DF, чтобы не было ошибок компиляции.
*/
const d = {
    f1: 60,
    f2: "lalaka",
    f3: {
        f4: false
    },
}

type DA = typeof d; // Тип DA - тип объекта d
type DB = number; // Тип DB - число
type DC = string | number; // Тип DC - строка или число
type DD = boolean; // Тип DD - логическое значение
type DE = keyof DA; // Тип DE - ключи объекта d
type DF = keyof DA["f3"]; // Тип DF - ключи вложенного объекта f3

const d1: DA = d; // Присвоение объекта d типу DA
const d2: DB = 150; // Присвоение числа типу DB
let d3: DC = "malaka"; // Присвоение строки типу DC
d3 = 300; // Присвоение числа типу DC
const d4: DD = true; // Присвоение логического значения типу DD
const d5_1: "f1" | "f2" | "f3" = "f1"; // Строгие литеральные типы для DE
const d5: DE = d5_1; // Присвоение ключа объекта типу DE
const d6_1: "f1" | "f2" | "f3" | "f4" = "f4"; // Строгие литеральные типы для DF
const d6: DF = d6_1; // Присвоение ключа вложенного объекта типу DF

/*
    Используя типы EA - ED и операторы & и |, укажите типы для e1 - e4,
    чтобы не было ошибок компиляции
*/
type EA = { a: number }
type EB = { b: string }
type EC = { c?: boolean }
type ED = { a: [number] }

const e1: EA & EB = {a: 10, b: "lalaka"}; // Объединение типов EA и EB
const e2: EA & EB & EC = {a: 15, b: "malaka", c: false}; // Объединение типов EA, EB и EC
const e3: EC = {}; // Объект типа EC
let e4: EA | ED = {a: 600}; // Объединение типов EA и ED (возможен один из двух типов)
e4 = {a: [15]}; // Присвоение объекта типа ED`,
	},
	{
		key: "4",
		label: "Функции",
		href: "https://race-timo.gitbook.io/typescript/functions",
		code: `/*
    Укажи сигнатуры функций a1-a5, чтобы не было ошибок компиляции
*/
function a1(a: number) { } // a1 принимает число
function a2(a: number | string, b: boolean) { } // a2 принимает число или строку и логическое значение
function a3(a?: { f1?: string }) { } // a3 принимает необязательный объект с необязательным свойством f1 типа string
function a4() { return 10; } // a4 возвращает число
function a5(...rest: string[]) { return rest[0]; } // a5 принимает любое количество строковых аргументов и возвращает первый из них

a1(10); // вызов a1 с числом
a1(5 + 2); // вызов a1 с результатом выражения, дающим число
a2(10, true); // вызов a2 с числом и логическим значением
a2("lalaka", false); // вызов a2 со строкой и логическим значением
a3(); // вызов a3 без аргументов
a3({}); // вызов a3 с пустым объектом
a3({ f1: "malaka" }); // вызов a3 с объектом, содержащим строковое свойство f1
const _a4: number = a4(); // вызов a4, результат присваивается переменной типа number
const _a5: string = a5(...["lalaka", "malaka"]); // вызов a5 с массивом строк, развернутым в аргументы, результат присваивается переменной типа string

/*
    Опиши типы BA, BB и BC, чтобы не было ошибок компиляции
*/
type BA = (a: number) => string; // BA - функция, принимающая число и возвращающая строку
type BB = (a?: [number]) => [number]; // BB - функция, принимающая необязательный кортеж из числа и возвращающая кортеж из числа
type BC = (...rest: number[]) => number; // BC - функция, принимающая любое количество числовых аргументов и возвращающая число

const b1: BA = () => "lalaka"; // b1 соответствует типу BA
const b2: BA = a => "lalaka" + a; // b2 соответствует типу BA
b1(10); // вызов b1 с числом
b2(15); // вызов b2 с числом

const b3: BB = () => [15]; // b3 соответствует типу BB
const b4: BB = a => a; // b4 соответствует типу BB
b3([100]); // вызов b3 с кортежем из числа
b4(); // вызов b4 без аргументов

const b5: BC = () => 10; // b5 соответствует типу BC
const b6: BC = a => a; // b6 соответствует типу BC
const b7: BC = (a, b) => a + b; // b7 соответствует типу BC
const b8: BC = (a, b, c) => a + b + c; // b8 соответствует типу BC
b5(60, 70, 100, 15, 222, 334); // вызов b5 с числовыми аргументами

/*
    Укажи строгие перегрузки функции c, чтобы не было ошибок компиляции 
    и функцию c нельзя было вызвать с какими угодно параметрами
*/
function c(): number;
function c(a: number): [number];
function c(a: "string", b: string): string;
function c(a: "number", b: number): number;
function c(a: string, b: boolean): boolean;
function c(...rest: any[]): any {
    // Реализация функции c не предоставлена, но с перегрузками компилятор знает, какие параметры допустимы
}

const c1: number = c(); // вызов c без аргументов, возвращает число
const c2: [number] = c(10); // вызов c с числом, возвращает кортеж с числом
const c3: string = c("string", "lalaka"); // вызов c со строкой "string" и строковым аргументом, возвращает строку
const c4: number = c("number", 10); // вызов c со строкой "number" и числовым аргументом, возвращает число
const c5: boolean = c("boolean", false); // вызов c с строкой "boolean" и логическим значением, возвращает логическое значение
// @ts-expect-error
const c6: boolean = c("any" + "string", true); // ошибка, так как "anystring" не соответствует ни одной из перегрузок

/*
    Опиши callable-интерфейсы DA-DD, чтобы при использовании переменных d1-d4
    не было ошибок компиляции
*/
interface DA {
    (a: number): void; // DA - функция, принимающая число и не возвращающая значения
}

interface DB {
    (a: number): void; // DB - перегрузка, принимающая число и не возвращающая значения
    (a: string): number; // DB - перегрузка, принимающая строку и возвращающая число
}

interface DC {
    (...rest: boolean[]): boolean; // DC - функция, принимающая любое количество логических значений и возвращающая логическое значение
}

interface DD {
    length: number; // DD - свойство length типа number
    position: [number, string]; // DD - свойство position типа кортежа [number, string]
    (a: 0): string; // DD - перегрузка, принимающая 0 и возвращающая строку
    (a: 1): number; // DD - перегрузка, принимающая 1 и возвращающая число
    (a: number): boolean; // DD - перегрузка, принимающая число и возвращающая логическое значение
}

const d1: DA = null; // d1 соответствует интерфейсу DA
const d2: DB = null; // d2 соответствует интерфейсу DB
const d3: DC = null; // d3 соответствует интерфейсу DC
const d4: DD = null; // d4 соответствует интерфейсу DD

d1(5 + 5); // вызов d1 с числом
d2(6 + 6); // вызов d2 с числом
const _d2: number = d2("7" + "7"); // вызов d2 со строкой, результат присваивается переменной типа number
const _d3: boolean = d3(true, false, true, false, true, true, true, true, false); // вызов d3 с логическими значениями, результат присваивается переменной типа boolean
const l: number = d4.length; // обращение к свойству length
const [x, y] = d4.position; // обращение к свойству position
const d4_1: string = d4(0); // вызов d4 с 0, результат присваивается переменной типа string
const d4_2: number = d4(1); // вызов d4 с 1, результат присваивается переменной типа number
const d4_3: boolean = d4(100 + 500); // вызов d4 с числом, результат присваивается переменной типа boolean`,
	},
	{
		key: "5",
		label: "Generics",
		href: "https://race-timo.gitbook.io/typescript/generics",
		code: `/*
    Использя generic-параметры, типизируйте функцию zip,
    чтобы не было ошибок компиляции. Возможно, потребуется
    дописать типы в теле функции
*/
function zip<T1, T2>(first: T1[], second: T2[]): Array<[T1, T2]> {
  // Определяем минимальную длину из двух массивов
  const minLength = Math.min(first.length, second.length);
  // Инициализируем результат как массив кортежей [T1, T2]
  const result: Array<[T1, T2]> = [];
  // Проходимся по элементам до минимальной длины и создаем кортежи
  for (let i = 0; i < minLength; i++) {
    result.push([first[i], second[i]])
  }
  // Возвращаем массив кортежей
  return result;
}

const q1: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]); // Ожидаемый результат: [[1, "1"], [2, "2"], [3, "3"]]
const q2: Array<[boolean, boolean]> = zip([true], [false, false]); // Ожидаемый результат: [[true, false]]
console.log(q1, q2); // Выводим результаты на консоль

/*
    Использя generic-параметры, типизируйте функцию groupBy,
    чтобы не было ошибок компиляции. Возможно, потребуется
    дописать типы в теле функции
*/
type Selector<T, R> = (item: T, index: number) => R; // Определяем тип для селектора, который принимает элемент и индекс, возвращает значение типа R

function groupBy<T, TKey, TValue>(source: T[], keySelector: Selector<T, TKey>, valueSelector: Selector<T, TValue>): Map<TKey, TValue[]> {
  // Инициализируем результат как Map<TKey, TValue[]>
  const result = new Map<TKey, TValue[]>();
  // Проходимся по каждому элементу массива source
  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    // Определяем ключ и значение для текущего элемента
    const key = keySelector(item, i);
    const value = valueSelector(item, i);
    // Если ключ еще не существует в Map, создаем для него пустой массив
    if (!result.has(key)) {
      result.set(key, []);
    }
    // Добавляем значение в массив по соответствующему ключу
    result.get(key)!.push(value);
  }

  // Возвращаем результат
  return result;
}

const q3: Map<number, number[]> = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1); 
// Ожидаемый результат: Map { 1 => [2, 4], 0 => [3, 5] }
const q4: Map<boolean, {x: string, i: number}[]> = groupBy(
  ["aaa", "bbb", "cc", "q", "lalaka"], 
  (_, i) => i % 2 === 0, 
  (x, i) => ({i, x})
);
// Ожидаемый результат: Map { true => [{i: 0, x: "aaa"}, {i: 2, x: "cc"}, {i: 4, x: "lalaka"}], false => [{i: 1, x: "bbb"}, {i: 3, x: "q"}] }
console.log(q3, q4); // Выводим результаты на консоль`,
	},
	{
		key: "6",
		label: "Классы",
		href: "https://race-timo.gitbook.io/typescript/classes",
		code: `/*
    Абстрактный класс Base представляет базовый функционал, который должны наследовать все дочерние классы.
    Он требует от дочерних классов реализацию метода calc.
*/
abstract class Base {
    constructor(public x: number, protected y: string) {}

    // Абстрактный метод, который должны реализовать дочерние классы
    abstract calc(y: number): number;
}

/* Код без ошибок */
class A extends Base {
    constructor(x: number) {
        // Передаем x и фиксированное значение "A" в конструктор базового класса
        super(x, "A");
    }

    // Реализуем метод calc, складывающий x и y
    public calc(y: number): number {
        return this.x + y;
    }
}

class B extends Base {
    constructor(y: string) {
        // Передаем фиксированное значение 10 и y в конструктор базового класса
        super(10, y);
    }

    // Реализуем метод calc, складывающий число, полученное из y, и y
    public calc(y: number): number {
        return parseInt(this.y) + y;
    }
}

// Создаем массив объектов типа Base и вызываем метод calc для каждого элемента
const calculators: Base[] = [new A(10), new B("10")];
const sum = calculators.map(x => x.calc(x.x)).reduce((a, c) => a + c);
console.log(sum); // Ожидаемый результат: 40
/* --- */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* Код с ошибками */
// @ts-expect-error
calculators[0].y; // Доступ к защищенному свойству y извне класса не разрешен
// @ts-expect-error
new Base(10, "10"); // Нельзя создать экземпляр абстрактного класса
/* --- */

/*
    Создаем класс X1 и тип XType.
    Класс X1 реализует два интерфейса: A1 и B1.
*/
class X1 implements A1, B1 {
    constructor(public x: number) {}

    // Реализуем метод print из интерфейса B1
    print(y: string) {
        console.log(y, this.x);
    }
}

// Определяем тип XType как конструктор, возвращающий объекты, реализующие оба интерфейса A1 и B1
type XType = { new(x: number): A1 & B1 };

interface A1 {
    x: number;
}

interface B1 {
    print: (y: string) => void;
}

// Функция create создает новый объект типа XType и возвращает его
function create(x: number, type: XType): A1 & B1 {
    return new type(x);
}

// Создаем объект X1 и вызываем метод print
create(15, X1).print("20"); // Ожидаемый результат: "20 15"
/* --- */

class Other {
    constructor(public x: number, public y: number) {}
}

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* Код с ошибками */
// @ts-expect-error
create(15, Other); // Класс Other не реализует интерфейсы A1 и B1
/* --- */`,
	},
	{
		key: "7",
		label: "Конструкции языка",
		href: "https://race-timo.gitbook.io/typescript/other-features",
		code: `/*
    Интерфейсы A, B и C определяют разные формы объектов, которые могут быть переданы в функцию q.
    Интерфейсы содержат различные методы для обработки чисел.
*/

interface A {
    foo: (a: number) => number;
}

interface B {
    foo: (a: number, b: number) => number;
    other: () => number;
}

interface C {
    bar: (a: number) => number;
}

/*
    Функция q принимает объект типа A, B или C.
    Использует type guard-ы для определения типа объекта и вызывает соответствующий метод.
*/
function q(a: A | B | C): number {
    if ("foo" in a && "other" in a) {
        return a.foo(10, a.other());
    }
    if ("foo" in a) {
        return a.foo(10);
    }
    return a.bar(10);
}

/* Проверка */
const q1 = q({ foo: (a: number) => a });
const q2 = q({ foo: (a, b) => a + b, other: () => 15 });
const q3 = q({ bar: a => a + 10 })

console.log('"${"q1"}" is equals to 10. "${"q2"}" is equals to 25. "${"q3"}" is equals to 20');

/*
    Комментарии к проверке:
    - Первый вызов q с объектом, реализующим интерфейс A.
    - Второй вызов q с объектом, реализующим интерфейс B.
    - Третий вызов q с объектом, реализующим интерфейс C.
*/

/*
    Интерфейсы SumFunc, EqualsFunc и ReverceFunc описывают различные типы функций.
    - SumFunc: функция, принимающая два числа и возвращающая их сумму.
    - EqualsFunc: функция, принимающая два числа и возвращающая boolean, указывающий на равенство чисел.
    - ReverceFunc: функция, принимающая одно число и возвращающая его отрицательное значение.
*/

interface SumFunc {
    type: "sum";
    func: (a: number, b: number) => number;
}

interface EqualsFunc {
    type: "equals";
    func: (a: number, b: number) => boolean;
}

interface ReverceFunc {
    type: "reverce";
    func: (a: number) => number;
}

type Funcs = SumFunc | EqualsFunc | ReverceFunc;

/*
    Функция foo принимает два числа и объект типа Funcs, затем выполняет соответствующую функцию в зависимости от значения поля type.
*/
function foo(a: number, b: number, funcs: Funcs) {
    switch (funcs.type) {
        case "sum":
            console.log("sum", funcs.func(a, b));
            break;
        case "equals":
            console.log("equals", funcs.func(a, b));
            break;
        case "reverce":
            console.log("reverce", funcs.func(a));
            break;
    }
}

/* Проверка */
foo(10, 15, { type: "sum", func: (a, b) => a + b }); // "sum, 25"
foo(30, 30, { type: "equals", func: (a, b) => a === b }); // "equals, true"
foo(10, 100, { type: "reverce", func: a => -a }); // "reverce, -10"

/*
    Комментарии к проверке:
    - Первый вызов foo с объектом типа SumFunc.
    - Второй вызов foo с объектом типа EqualsFunc.
    - Третий вызов foo с объектом типа ReverceFunc.
*/`,
	},
	{
		key: "8",
		label: "Калькулятор",
		href: "https://race-timo.gitbook.io/typescript/practics",
		code: `/*
    Интерфейсы и типы определены для различных команд калькулятора, каждая из которых выполняет определенные действия.
    Мы типизируем интерфейс Calculator, чтобы вызовы calculator соответствовали определенным параметрам и функциям.
*/

// Определяем типы для различных команд калькулятора.
type SumAction = (a: number, b: number) => number;
type LengthAction = (a: string) => number;
type ZeroAction = (a: string | number) => boolean;
type LogAction = (b: number) => (a: number) => number;

// Определяем интерфейс Calculator с перегрузками для различных команд.
interface Calculator {
    (command: "sum"): SumAction;
    (command: "length"): LengthAction;
    (command: "zero"): ZeroAction;
    (command: "log"): LogAction;
}

/* Этот код трогать не нужно */
// Реализуем калькулятор, который возвращает соответствующую функцию в зависимости от переданной команды.
const calculator: Calculator = (command: string): any => {
    switch (command) {
        case "sum":
            return (a: any, b: any) => a + b;
        case "length":
            return (a: any) => a.length;
        case "zero":
            return (a: any) => typeof a === "string" ? a.length !== 0 : a !== 0;
        case "log":
            return (b: any) => (a: any) => Math.log(a) / Math.log(b)
    }
}
/* --- */

/* Без ошибок */
// Проверяем вызовы калькулятора с правильными параметрами.
calculator("sum")(10, 15); // Возвращает 25
calculator("length")("qweqweq"); // Возвращает длину строки
calculator("zero")(10); // Проверяет, не равен ли ноль
calculator("zero")("qweqwe"); // Проверяет, не пустая ли строка
const ln = calculator("log")(Math.E); // Возвращает функцию для логарифма по основанию e
ln(15); // Возвращает логарифм от 15 по основанию e
calculator("log")(2)(256); // Возвращает логарифм 256 по основанию 2
/* Без ошибок */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* С ошибками */
// @ts-expect-error
calculator("lalaka")("malaka"); // Ошибка: недопустимая команда "lalaka"

// @ts-expect-error
calculator("sum")(true); // Ошибка: аргументы должны быть числами
// @ts-expect-error
calculator("sum")(10); // Ошибка: недостаточно аргументов
// @ts-expect-error
calculator("sum")("1"); // Ошибка: аргументы должны быть числами

// @ts-expect-error
calculator("length")(10); // Ошибка: аргумент должен быть строкой
// @ts-expect-error
calculator("length")(true); // Ошибка: аргумент должен быть строкой
// @ts-expect-error
calculator("length")("a", "b"); // Ошибка: слишком много аргументов

// @ts-expect-error
calculator("zero")(10, 10); // Ошибка: слишком много аргументов
// @ts-expect-error
calculator("zero")(10, "10"); // Ошибка: слишком много аргументов
// @ts-expect-error
calculator("zero")("10", 10); // Ошибка: слишком много аргументов
// @ts-expect-error
calculator("zero")(true); // Ошибка: аргумент должен быть строкой или числом
// @ts-expect-error
calculator("zero")({}); // Ошибка: аргумент должен быть строкой или числом
// @ts-expect-error
calculator("zero")([]); // Ошибка: аргумент должен быть строкой или числом

// @ts-expect-error
calculator("log")("e"); // Ошибка: аргумент должен быть числом
// @ts-expect-error
calculator("log")("10"); // Ошибка: аргумент должен быть числом
// @ts-expect-error
calculator("log")(true); // Ошибка: аргумент должен быть числом
// @ts-expect-error
calculator("log")(10)("100"); // Ошибка: аргумент внутренней функции должен быть числом
// @ts-expect-error
calculator("log")(10)(true); // Ошибка: аргумент внутренней функции должен быть числом
// @ts-expect-error
calculator("log")(2, 1024); // Ошибка: слишком много аргументов
/* --- */

/*
    Комментарии к проверке:
    - "sum" принимает два числа и возвращает их сумму.
    - "length" принимает строку и возвращает ее длину.
    - "zero" принимает строку или число и проверяет, не равен ли ноль или не пустая ли строка.
    - "log" принимает число и возвращает функцию, которая принимает другое число и возвращает логарифм.
*/`,
	},
	{
		key: "9",
		label: "Student | Teacher | Director",
		href: "https://race-timo.gitbook.io/typescript/practics",
		code: `/*
    Даны несколько заготовленных type alias. При помощи них "собран" тип Student.
    Соберите типы Teacher и Director из имеющихся типов. Для проверки используйте
    переменные в самом низу. Можно определять новые типы.
    
    Teacher имеет идентификатор, имя, уровень скила и словарь из его курсов.
    В словаре курсов Teacher-а по ключу id курса лежит объект с идентификатором курса,
    названием и ролью учителя.

    Director имеет идентификатор, имя, словарь студентов и словарь учителей. Словарь
    студентов по id студента содержит объект с идентификатором и именем студента.
    Словарь учителей по id учителя содержит объект с идентификатором, именем, уровнем
    и оценкой учителя
*/

type User = {
    id: string; // Идентификатор пользователя
    name: string; // Имя пользователя
}

type Course = {
    id: number; // Идентификатор курса
    title: string; // Название курса
}

type WithRate = {
    rate: 1 | 2 | 3 | 4 | 5; // Оценка курса или учителя
}

type WithStudentRole = {
    role: "student"; // Роль пользователя: студент
}

type WithTeacherRole = {
    role: "teacher"; // Роль пользователя: учитель
}

type WithLevel = {
    level: "junior" | "middle" | "senior"; // Уровень учителя или студента
}

/* --- */

// Определяем тип StudentCourse как объединение свойств Course, WithStudentRole, WithRate и WithLevel.
type StudentCourse = Course & WithStudentRole & WithRate & WithLevel

// Определяем тип Student, который включает свойства User и словарь курсов.
type Student = User & { courses: { [id: number]: StudentCourse } }

// Определяем тип Teacher, который включает свойства User, WithLevel и словарь курсов.
type Teacher = User & WithLevel & { courses: { [id: number]: Course & WithTeacherRole } }

// Определяем словарь студентов, где ключ - идентификатор студента, значение - объект User.
type StudentDict = { [id: string]: User };

// Определяем словарь учителей, где ключ - идентификатор учителя, значение - объект User с уровнем и оценкой.
type TeacherDict = { [id: string]: User & WithLevel & WithRate }

// Определяем тип Director, который включает свойства User и словари студентов и учителей.
type Director = User & { students: StudentDict } & { teachers: TeacherDict }

/*--  Проверка  --*/

// Создаем объект s1, который соответствует типу Student.
const s1: Student = {
    id: "s1",
    name: "s1",
    courses: {
        [1]: {
            id: 1,
            title: "First",
            rate: 5,
            role: "student",
            level: "middle"
        }
    },
}

// Создаем объект t1, который соответствует типу Teacher.
const t1: Teacher = {
    id: "t1",
    name: "t1",
    level: "junior",
    courses: {
        [5]: {
            id: 5,
            title: "Fifth",
            role: "teacher" // Роль учителя
        },
        [1]: {
            ...s1.courses[1], // Курс студента с измененной ролью на "teacher"
            role: "teacher"
        }
    }
}

// Создаем объект d1, который соответствует типу Director.
const d1: Director = {
    id: "d1",
    name: "d1",
    students: {
        ["s1"]: s1, // Студент s1
        ["s2"]: {
            id: "s2",
            name: "s2" // Другой студент
        }
    },
    teachers: {
        ["t1"]: {
            ...t1,
            rate: 3, // Оценка учителя t1
        },
        ["t2"]: {
            id: "t2",
            name: "t2",
            level: "senior",
            rate: 5 // Оценка учителя t2
        }
    }
}
`,
	},
	{
		key: "10",
		label: "Библиотека на JS",
		href: "https://race-timo.gitbook.io/typescript/dts",
		code: `class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(x * x + y * y);
        this.angle = Math.atan2(y, x);
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    sub(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
    negate() {
        return new Vector(-this.x, -this.y);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
}

Vector.zero = new Vector(0, 0);
Vector.up = new Vector(0, 1);
Vector.down = new Vector(0, -1);
Vector.left = new Vector(-1, 0);
Vector.right = new Vector(1, 0);

Vector.equals = function (a, b) {
    return a.x === b.x && a.y === b.y;
}

Vector.isVector = function (obj) {
    return obj instanceof Vector;
}

function createVector(...args) {
    if (args.length === 2) {
        return new Vector(args[0], args[1]);
    }
    if (Array.isArray(args[0])) {
        return new Vector(args[0][0], args[0][1]);
    }
    return new Vector(args[0].x, args[0].y);
}
`,
	},
	{
		key: "11",
		label: "Файл декларации .d.ts",
		href: "https://race-timo.gitbook.io/typescript/dts",
		code: `declare class Vector {
    static readonly zero: Vector;
    static readonly up: Vector;
    static readonly down: Vector;
    static readonly left: Vector;
    static readonly right: Vector;

    static equals(a: Vector, b: Vector): boolean;
    static isVector(a: any): a is Vector;

    readonly x: number;
    readonly y: number;
    readonly length: number;
    readonly angle: number;

    constructor(x: number, y: number);

    add(vector: Vector): Vector;
    sub(vector: Vector): Vector;
    negate(): Vector;
    dot(vector: Vector): number;
}

declare function createVector(x: number, y: number): Vector;
declare function createVector(obj: {x: number;y: number;}): Vector;
declare function createVector(tuple: [number, number]): Vector;
`,
	},
];

export const customHooksData = [
	{
		key: "1",
		label: "react-swipeable",
		description: [
			{
				type: "text",
				text: "react-swipeable — это хук обработчика событий React Swipe. В некоторых случаях react-swipeable необходим для создания React-приложений, ориентированных в первую очередь на мобильные устройства. Предположим, что вы разрабатываете онлайн-магазин и хотите включить “нативное” мобильное поведение в веб-приложение. Мобильные пользователи взаимодействуют с приложениями совсем иначе, чем веб-пользователи. В телефонах предусмотрены сенсорные жесты, свайпы, увеличение и уменьшение масштаба и т.д. Почему бы не включить все эти функции в мобильное веб-приложение?",
			},
			{
				type: "code",
				text: `const handlers = useSwipeable({
  onSwiped: (eventData) => console.log("User Swiped", eventData),
  ...config,
});

return <div {...handlers}> swipe here </div>;`,
			},
			{
				type: "text",
				text: "Вот все пропсы, к которым вы можете получить доступ при обработке событий:",
			},
			{
				type: "code",
				text: `{
  onSwiped,       // После любого свайпа(SwipeEventData) => void
  onSwipedLeft,   // После свайпа ВЛЕВО (SwipeEventData) => void
  onSwipedRight,  // После свайпа ВПРАВО(SwipeEventData) => void
  onSwipedUp,     // После свайпа ВВЕРХ   (SwipeEventData) => void
  onSwipedDown,   // После свайпа ВНИЗ (SwipeEventData) => void
  onSwipeStart,   // Начало свайпа (SwipeEventData) => void *see details*
  onSwiping,      // Во время свайпа  (SwipeEventData) => void
  onTap,          // После касания     ({ event }) => void

// Передача обратных вызовов, событие предоставлено: ({ event }) => void
  onTouchStartOrOnMouseDown, // Вызывается для 'touchstart' и 'mousedown'
  onTouchEndOrOnMouseUp,     // Вызывается для 'touchend' и 'mouseup'
}`,
			},
			{
				type: "text",
				text: "Информацию об интеграции и использовании можно найти на странице react-swipeable на сайте NPM.",
			},
		],
	},
	{
		key: "2",
		label: "use-resize-observer",
		description: [
			{
				type: "text",
				text: "use-resize-observer — это React-хук, который позволяет измерять ширину и высоту элемента. Этот хук невероятно удобен при работе с обрезкой, редактированием, обработкой изображений и т.д.",
			},
			{
				type: "code",
				text: `import React from "react";
import ReactDOM from "react-dom";
import useResizeObserver from "use-resize-observer";
import "./styles.css";

const App = () => {
const { ref, width, height } = useResizeObserver<HTMLDivElement>();
return (
<div>
<div className="instructions">Try resizing this div!</div>
<div ref={ref} className="box">
{width}x{height}
</div>
</div>
)};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);`,
			},
		],
	},
	{
		key: "3",
		label: "formik",
		description: [
			{
				type: "text",
				text: "Formik берет на себя повторяющуюся и утомительную часть работы с формами. Он отслеживает значения, ошибки, посещенные поля, оркестрирует валидацию и обрабатывает отправку — все, с чем вам больше не придется иметь дело. Тратьте меньше времени на подключение обработчиков состояния и изменений. Допустим, вам нужно добавить форму регистрации в рассылку новостей для блога. Для начала в форме будет только одно поле с именем email. С Formik для этого требуется лишь несколько строк кода.",
			},
			{
				type: "code",
				text: `import React from 'react';
import { useFormik } from 'formik';
const SignupForm = () => {
   // Передача хуку useFormik() начальных значений формы и функции submit, которая будет
   //  вызвана после отправки формы 
   const formik = useFormik({
     initialValues: {
       email: '',
},
onSubmit: values => {
     alert(JSON.stringify(values, null, 2));
    },
});
return (
<form onSubmit={formik.handleSubmit}>
<label htmlFor="email">Email Address</label>
<input
       id="email"
       name="email"
       type="email"
       onChange={formik.handleChange}
       value={formik.values.email} 
     />
    <button type="submit">Submit</button>
    </form>
);
};`,
			},
		],
	},
	{
		key: "4",
		label: "use-debounce",
		description: [
			{
				type: "text",
				text: "Дебаунсинг (debouncing) в JavaScript — это шаблон, используемый для повышения производительности браузера. На веб-странице может быть некоторая функциональность, требующая трудоемких вычислений. Например, загрузка изображений, несколько вызовов API и т.д. Если такие методы будут вызываться слишком часто, это сильно повлияет на производительность браузера. Дебаунсинг — это практика программирования, которая гарантирует, что трудоемкие задачи не будут вызываться так часто.",
			},
			{
				type: "code",
				text: `import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
export default function Input() {
  const [text, setText] = useState('Hello');
  const [value] = useDebounce(text, 1000);
  return (
    <div>
      <input
        defaultValue={'Hello'}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
}`,
			},
		],
	},
	{
		key: "5",
		label: "use-isomorphic-layout-effect",
		description: [
			{
				type: "text",
				text: "Вот что говорится в документации React о useLayoutEffect: СИГНАТУРА USELAYOUTEFFECT ИДЕНТИЧНА СИГНАТУРЕ USEEFFECT, НО ПЕРВЫЙ ХУК СРАБАТЫВАЕТ СИНХРОННО ПОСЛЕ ВСЕХ ИЗМЕНЕНИЙ DOM. Другими словами, вы можете использовать useLayoutEffect только для браузера. Это проблема, если вы рендерите код React на стороне сервера. Например, при использовании NextJS вы получите следующее сообщение об ошибке: ПРЕДУПРЕЖДЕНИЕ: USELAYOUTEFFECT НЕ ДЕЙСТВУЕТ НА СЕРВЕРЕ, ПОТОМУ ЧТО ЕГО ЭФФЕКТ НЕ МОЖЕТ БЫТЬ ЗАКОДИРОВАН В ФОРМАТ ВЫВОДА РЕНДЕРЕРА СЕРВЕРА. Чтобы избежать этого сообщения об ошибке, используйте useLayoutEffect только в компонентах, рендеринг которых осуществляется исключительно на стороне клиента. Устранить проблему поможет useIsomorphicLayoutEffect, который переключается между useEffect и useLayoutEffect в зависимости от среды выполнения.",
			},
			{
				type: "code",
				text: `+ import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

- import { useLayoutEffect } from 'react';

const YourComponent = () => {

+  useIsomorphicLayoutEffect(() => {
   // ваша реализация
}, []);

-  useLayoutEffect(() => {
    // your implementation
  }, []);

};`,
			},
		],
	},
	{
		key: "6",
		label: "react-hotkeys-hook",
		description: [
			{
				type: "text",
				text: "react-hotkeys-hook предназначен для использования горячих клавиш в компонентах. Хук позволяет прослушивать горячие клавиши декларативным образом и выполнять функцию обратного вызова, как только пользователь нажмет на заданную горячую клавишу.",
			},
			{
				type: "code",
				text: `import { useHotkeys } from 'react-hotkeys-hook';

function ExampleComponent() {
  useHotkeys('a', () => alert('Key a was pressed'))

return (
    <span>Press the a key to see it work.</span>
  )`,
			},
			{
				type: "text",
				text: "react-hotkeys-hookтакже прослушивает нажатия комбинаций клавиш, которые позволяют пользователю выполнить обратный вызов. Представим, что в нашем приложении есть горячие клавиши для обеспечения функциональности. Например, для создания тикета в Jira нужно нажать shift+c.",
			},
			{
				type: "code",
				text: `import { useHotkeys } from 'react-hotkeys-hook';
function CreateIssue() {
const [showIssueCreatorModal, setShowIssueCreatorModal] = useState(false)
useHotkeys('shift+c', () => setShowIssueCreatorModal(true))
return (
    <>
      {showIssueCreatorModal && <div>MODAL CONTENT</div>}
      {!showIssueCreatorModal && <div>issue list</div>}
    </>
  )
}`,
			},
		],
	},
	{
		key: "7",
		label: "@use-gesture/reac",
		description: [
			{
				type: "text",
				text: "@use-gesture — это библиотека, позволяющая привязывать многофункциональные события, связанные с кликами мышью и касаниями, к любому компоненту и представлению. Настроить жесты с помощью имеющихся пропсов очень просто. В некоторых приложениях жесты требуются по умолчанию и являются ожидаемыми. Например, жесты — обязательное условие для создания приложения по типу Канбан-доски.",
			},
			{
				type: "code",
				text: `import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
function Example() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
// Установка хука для перетаскивания и определение перемещения компонента на основе данных жеста.
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 })
  })
// Привязка к компоненту 
  return <animated.div {...bind()} style={{ x, y, touchAction: 'none' }} />
}`,
			},
		],
	},
	{
		key: "8",
		label: "react-script-hook",
		description: [
			{
				type: "text",
				text: "react-script-hook — это хук для динамической загрузки внешнего скрипта и определения момента его загрузки. Отлично подходит при работе со сторонними API, такими как Stripe, Twilio и т.д. Допустим, мы используем API Stripe для приема платежей и не хотим нарушать работу приложения, позволив пользователям взаимодействовать с платежами, когда API еще не полностью загружен. Этот хук решает вышеупомянутую проблему.",
			},
			{
				type: "code",
				text: `import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import useScript from 'react-script-hook';
import MyCheckout from './my-checkout';
function App() {
    const [loading, error] = useScript({ src: 'https://js.stripe.com/v3/' });
if (loading) return <h3>Loading Stripe API...</h3>;
    if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;
return (
        <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
            <MyCheckout />
        </StripeProvider>
    );
}
export default App;`,
			},
			{
				type: "text",
				text: "Хук автоматически обрабатывает случаи, когда скрипт уже был загружен (или начал загружаться) из другого экземпляра хука. Можно смело добавлять одинаковые хуки useScript в несколько компонентов, зависящих от одного и того же внешнего скрипта, и они будут блокировать загрузку только одной копии.",
			},
		],
	},
	{
		key: "9",
		label: "react-scroll-parallax",
		description: [
			{
				type: "text",
				text: "react-scroll-parallax — это хук, который позволяет легко создавать эффекты параллакс-скроллинга для баннеров, изображений и любых других элементов DOM. Параллакс-скроллинг предлагает идеальные условия для увлекательной и интерактивной передачи историй. Когда элемент прокручивается за пределы области просмотра, применяется эффект CSS translate, основанный на положении исходного элемента относительно области просмотра.",
			},
			{
				type: "code",
				text: `import { useParallax } from 'react-scroll-parallax';

function Component() {
  const parallax = useParallax({
    speed: -10,
  });
  return <div ref={parallax.ref} />;
}`,
			},
		],
	},
	{
		key: "10",
		label: "react-storage-hooks",
		description: [
			{
				type: "text",
				text: "Хуки react-storage-hooks используются для синхронизации состояния приложения с localStorage и sessionStorage. Хуки useStorageState и useStorageReducer, включенные в эту библиотеку, работают аналогично useState и seReducer. Однако есть несколько отличий. Здесь дано более подробное описание.",
			},
			{
				type: "code",
				text: `import React from 'react';
import { useStorageState } from 'react-storage-hooks';
function StateCounter() {
  const [count, setCount, writeError] = useStorageState(
    localStorage,
    'state-counter',
    0
  );
return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {writeError && (
        <pre>Cannot write to localStorage: {writeError.message}</pre>
      )}
    </>
  );
}`,
			},
		],
	},
	{
		key: "11",
		label: "@chakra-ui/color-mode",
		description: [
			{
				type: "text",
				text: "@chakra-ui/color-mode — это компонент и хук React, который обеспечивает поддержку светлого и темного режимов с помощью localStorage и matchMedia. Этот хук упрощает пользователям выбор между темной и светлой темой.",
			},
			{
				type: "code",
				text: `import * as React from "react"
import { ColorModeProvider } from "@chakra-ui/color-mode"
import theme from "./theme"

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  )
}`,
			},
			{
				type: "text",
				text: "Затем используйте хук useColorMode в приложении.",
			},
			{
				type: "code",
				text: `function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  )
}`,
			},
		],
	},
	{
		key: "12",
		label: "useIdle",
		description: [
			{
				type: "text",
				text: "С помощью useIdle можно отслеживать, находится ли пользователь на странице в режиме ожидания. Можете передать два параметра: ms – время ожидания и initialState, который позволяет пользователю изначально установить режим ожидания в мобильное веб-приложение? ",
			},
			{
				type: "code",
				text: `import {useIdle} from 'react-use';
const Demo = () => {
  const isIdle = useIdle(3e3);
return (
    <div>
      <div>User is idle: {isIdle ? 'Yes' : 'Nope'}</div>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "13",
		label: "useInterval",
		description: [
			{
				type: "text",
				text: "Этот хук можно использовать для функций с интервалами, которые автоматически размонтируют компонент clearInterval. Он также позволяет приостановить интервал, установив задержку равной нулю.",
			},
			{
				type: "code",
				text: `import * as React from 'react';
import {useInterval} from 'react-use';
const Demo = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);
useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );
return (
    <div>
      <div>
        delay: <input value={delay} onChange={event => setDelay(Number(event.target.value))} />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={toggleIsRunning}>{isRunning ? 'stop' : 'start'}</button>
      </div>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "14",
		label: "useScroll",
		description: [
			{
				type: "text",
				text: "Используется для прослушивания события прокрутки элемента и перерисовки при прокрутке. Не требует ручного добавления слушателей событий JavaScript.",
			},
			{
				type: "code",
				text: `import {useScroll} from 'react-use';
const Demo = () => {
  const scrollRef = React.useRef(null);
  const {x, y} = useScroll(scrollRef);
return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "15",
		label: "useToggle",
		description: [
			{
				type: "text",
				text: "С помощью useToggle можно переключаться между двумя состояниями: TRUE и FALSE. Такой подход уменьшает «ручную» логику.",
			},
			{
				type: "code",
				text: `import {useToggle} from 'react-use';
const Demo = () => {
  const [on, toggle] = useToggle(true);
return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "16",
		label: "useTitle",
		description: [
			{
				type: "text",
				text: "Хук используется для установки заголовка страницы.",
			},
			{
				type: "code",
				text: `import {useTitle} from 'react-use';const Demo = () => {  useTitle('Hello world!');return null;};`,
			},
		],
	},
	{
		key: "17",
		label: "usePrevious",
		description: [
			{
				type: "text",
				text: "Чтобы получить предыдущее состояние, можно юзать этот хук. Возможно вам даже не потребуется писать кастомную логику и что-то допиливать.",
			},
			{
				type: "code",
				text: `import {usePrevious} from 'react-use';
const Demo = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);
return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};`,
			},
		],
	},
	{
		key: "18",
		label: "useSetState",
		description: [
			{
				type: "text",
				text: "Этот крючок используется для объединения объектов в их текущем состоянии, аналогично this.setState в компоненте класса. Если вы используете несколько состояний, их можно привести к одному с помощью useSetState.",
			},
			{
				type: "code",
				text: `import {useSetState} from 'react-use';
const Demo = () => {
  const [state, setState] = useSetState({});
return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({hello: 'world'})}>hello</button>
      <button onClick={() => setState({foo: 'bar'})}>foo</button>
      <button 
        onClick={() => {
          setState((prevState) => ({
            count: (prevState.count || 0) + 1,
          }))
        }}
      >
        count
      </button>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "19",
		label: "useCookie",
		description: [
			{
				type: "text",
				text: "Хук используется для возврата текущего значения cookie, обратного вызова обновления и удаления cookie.",
			},
			{
				type: "code",
				text: `import { useCookie } from "react-use";
const Demo = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);
useEffect(() => {
    deleteCookie();
  }, []);
const updateCookieHandler = () => {
    updateCookie(Литерал'my-awesome-cookie-${1}Литерал');
    setCounter(c => c + 1);
  };
return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "20",
		label: "usePermission",
		description: [
			{
				type: "text",
				text: "usePermission следует применять для получения permission-статуса API браузера. Передайте имя API, чтобы получить статус.",
			},
			{
				type: "code",
				text: `import {usePermission} from 'react-use';
const Demo = () => {
  const state = usePermission({ name: 'microphone' });
return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};`,
			},
		],
	},
	{
		key: "21",
		label: "useDebounce",
		description: [
			{
				type: "text",
				text: "Хук используется для задержки события до завершения времени ожидания. В приведенном ниже коде заданное состояние выполняется после завершения времени ожидания:",
			},
			{
				type: "code",
				text: `const Demo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');
const [, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );
return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <button onClick={cancel}>Cancel debounce</button>
      </div>
    </div>
  );
};`,
			},
		],
	},
	{
		key: "22",
		label: "useGeolocation",
		description: [
			{
				type: "text",
				text: "Этот хук выгодно применять для получения геолокации пользователя. useGeolocation возвращает широту, долготу, высоту и другую полезную информацию.",
			},
			{
				type: "code",
				text: `import {useGeolocation} from 'react-use';
const Demo = () => {
  const state = useGeolocation();
return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};`,
			},
		],
	},
	{
		key: "23",
		label: "useNetworkState",
		description: [
			{
				type: "text",
				text: "Приведенный ниже код используется для получения сетевого статуса браузера. useNetworkState можно применять для показа пользователю состояния подключения.",
			},
			{
				type: "code",
				text: `import {useNetworkState} from 'react-use';
const Demo = () => {
  const state = useNetworkState();
return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};`,
			},
		],
	},
	{
		key: "24",
		label: "useCopyToClipboard",
		description: [
			{
				type: "text",
				text: "Хотите скопировать текст в буфер обмена? useCopyToClipboard – именно то, что вам необходимо.",
			},
			{
				type: "code",
				text: `const Demo = () => {
  const [text, setText] = React.useState('');
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="button" onClick={() => copyToClipboard(text)}>copy text</button>
      {state.error
        ? <p>Unable to copy value: {state.error.message}</p>
        : state.value && <p>Copied {state.value}</p>}
    </div>
  )
}`,
			},
		],
	},
	{
		key: "25",
		label: "useFavicon",
		description: [
			{
				type: "text",
				text: "Крючок useFavicon используется для установки иконки на странице.",
			},
			{
				type: "code",
				text: `import {useFavicon} from 'react-use';
                    const Demo = () => {
                      useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico');
                    return null;
                    };`,
			},
		],
	},
	{
		key: "26",
		label: "seGeolocation",
		description: [
			{
				type: "text",
				text: "Применяйте useError для контроля и отправки ошибок.",
			},
			{
				type: "code",
				text: `import { useError } from 'react-use';
const Demo = () => {
  const dispatchError = useError();
const clickHandler = () => {
    dispatchError(new Error('Some error!'));
  };
return <button onClick={clickHandler}>Click me to throw</button>;
};
// In parent app
const App = () => (
  <ErrorBoundary>
    <Demo />
  </ErrorBoundary>
);`,
			},
		],
	},
];

export const practicesData = [
	{
		key: "1",
		label: "1. Используйте JSX-сокращения",
		description: {
			text: "Использовать логические значения никогда не было так просто. Допустим, вам нужно управлять видимостью компонента Navbar – с помощью пропса showTitle:",
			bad: `<Navbar showTitle={true} />`,
			good: `<Navbar showTitle />`,
		},
	},
	{
		key: "2",
		label: "2. Используйте тернарные операторы",
		description: {
			text: "Отличный способ для выбора между двумя компонентами по некоторому условию – например, в зависимости от роли активного пользователя.",
			bad: `const { role } = user;\nif (role === ADMIN) {\n  <AdminUser />;\n} else {\n  <NormalUser />;\n}`,
			good: `const { role1 } = user;\nreturn role1 === ADMIN ? <AdminUser /> : <NormalUser />;`,
		},
	},
	{
		key: "3",
		label: "3. Используйте преимущества объектных литералов",
		description: {
			text: "Объектные литералы могут помочь сделать наш код более читабельным. Допустим, вы хотите отобразить три типа пользователей в зависимости от их ролей. Вы не можете использовать тернарный оператор, так как количество опций превышает два.",
			bad: `const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}`,
			good: `const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;`,
		},
	},
	{
		key: "4",
		label: "4. Используйте фрагменты",
		description: {
			text: "Всегда используйте Fragment вместо лишней обертки div. Это сохраняет код чистым, а также полезно для производительности, поскольку в виртуальной модели DOM создается на один узел меньше.",
			bad: `return (
  <div>
     <Component1 />
     <Component2 />
     <Component3 />
  </div>  
)`,
			good: `return (
  <>
     <Component1 />
     <Component2 />
     <Component3 />
  </>  
)`,
		},
	},
	{
		key: "5",
		label: "5. Не определяйте функцию внутри рендеринга",
		description: {
			text: "Не определяйте функцию внутри функции рендеринга. Постарайтесь свести логику рендеринга к абсолютному минимуму.",
			bad: `return (
    <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>    // здесь определена функция
      This is a bad example 
    </button>  
)`,
			good: `const submitData = () => dispatch(ACTION_TO_SEND_DATA)

return (
  <button onClick={submitData}>  
    This is a good example 
  </button>  
)`,
		},
	},
	{
		key: "6",
		label: "6. Используйте React memo",
		description: {
			text: "React.PureComponent и Memo могут значительно повысить производительность вашего приложения. Они помогают нам избежать ненужного рендеринга. Хотя дочерний компонент должен отображаться только один раз, так как значение count не имеет ничего общего с ChildComponent. Но он отображается рендерится каждый раз, когда вы нажимаете на кнопку. Теперь, независимо от того, сколько раз вы нажмете на кнопку, она будет отображаться только тогда, когда это необходимо.",
			bad: `import React, { useState } from "react";

export const TestMemo = () => {
  const [userName, setUserName] = useState("faisal");
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  );
};

const ChildrenComponent =({ userName }) => {
  console.log("rendered", userName);
  return <div> {userName} </div>;
};`,
			good: `import React, {useState} from "react";

const ChildrenComponent = React.memo(({userName}) => {
    console.log('rendered')
    return <div> {userName}</div>
})`,
		},
	},
	{
		key: "7",
		label: "7. Поместите CSS в JavaScript",
		description: {
			text: "Избегайте сырого JavaScript при написании приложений React, потому что организовать CSS намного сложнее, чем организовать JS.",
			bad: `// CSS FILE

.body {
  height: 10px;
}

//JSX

return <div className='body'>

</div>`,
			good: `const bodyStyle = {
  height: "10px"
}

return <div style={bodyStyle}>

</div>`,
		},
	},
	{
		key: "8",
		label: "8. Используйте деструктурирование объектов",
		description: {
			text: "Используйте деструктурирование объектов в своих интересах. Допустим, вам нужно показать данные пользователя.",
			bad: `return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>  
)`,
			good: `const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>  
)`,
		},
	},
	{
		key: "9",
		label: "9. Строковые пропсы можно передавать без фигурных скобок",
		description: {
			text: "При передаче строковых пропсов дочернему компоненту.",
			bad: `return(
  <Navbar title={"My Special App"} />
)`,
			good: `return(
  <Navbar title="My Special App" />  
)`,
		},
	},
	{
		key: "10",
		label: "10. Удалить JS-код из JSX",
		description: {
			text: "Вынесите JS-код из JSX, если это не служит какой-либо цели рендеринга или функциональности пользовательского интерфейса.",
			bad: `return (
  <ul>
    {posts.map((post) => (
      <li onClick={event => {
        console.log(event.target, 'clicked!'); // <- плохо
        }} key={post.id}>{post.title}
      </li>
    ))}
  </ul>
);`,
			good: `const onClickHandler = (event) => {
   console.log(event.target, 'clicked!'); 
}

return (
  <ul>
    {posts.map((post) => (
      <li onClick={onClickHandler} key={post.id}>{post.title}</li>
    ))}
  </ul>
);`,
		},
	},
	{
		key: "11",
		label: "11. Используйте шаблонные литералы",
		description: {
			text: "Используйте шаблонные литералы для создания длинных строк. Избегайте использования конкатенации строк. Это будет выглядеть красиво и чисто.",
			bad: `const userDetails = user.name + ""s profession is" + user.proffession

return (
  <div> {userDetails} </div>  
)`,
			good: `const userDetails = '${"user.name"}'s profession is ${"user.proffession"}'

return (
  <div> {userDetails} </div>  
)`,
		},
	},
	{
		key: "12",
		label: "12. Порядок импортов",
		description: {
			text: "Всегда старайтесь импортировать сущности в определенном порядке. Это улучшает читаемость кода. Эмпирическое правило состоит в том, чтобы сохранить порядок импорта следующим образом: 1. Встроенные зависимости 2. Внешние зависимости 3. Внутренние зависимости",
			bad: `import React from 'react';
import ErrorImg from '../../assets/images/error.png';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';`,
			good: `import React from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';`,
		},
	},
	{
		key: "13",
		label: "13. Используйте неявный возврат",
		description: {
			taxt: "Используйте функцию JavaScript с неявным возвратом результата при написании красивого кода. Допустим, ваша функция выполняет простое вычисление и возвращает результат.",
			bad: `const add = (a, b) => {
  return a + b;
}`,
			good: `const add = (a, b) => a + b;`,
		},
	},
	{
		key: "14",
		label: "14. Именование компонентов",
		description: {
			text: "Всегда используйте PascalCase для компонентов и camelCase для экземпляров.",
			bad: `import reservationCard from './ReservationCard';

const ReservationItem = <ReservationCard />;`,
			good: `import ReservationCard from './ReservationCard';

const reservationItem = <ReservationCard />;`,
		},
	},
	{
		key: "15",
		label: "15. Кавычки",
		description: {
			text: "Используйте двойные кавычки для атрибутов JSX и одинарные кавычки для всех остальных JS.",
			bad: `<Foo bar='bar' />

<Foo style={{ left: "20px" }} />`,
			good: `<Foo bar="bar" />

<Foo style={{ left: '20px' }} />`,
		},
	},
	{
		key: "16",
		label: "16. Именование пропсов",
		description: {
			text: "Всегда используйте camelCase для имен объектов или PascalCase, если значение объекта является компонентом React.",
			bad: `<Component
  UserName="hello"
  phone_number={12345678}
/>`,
			good: `<MyComponent
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>`,
		},
	},
	{
		key: "17",
		label: "17. JSX в круглых скобках",
		description: {
			text: "Если компонент занимает более одной строки, всегда заключайте его в круглые скобки.",
			bad: `return <MyComponent variant="long">
           <MyChild />
         </MyComponent>;`,
			good: `return (
    <MyComponent variant="long">
      <MyChild />
    </MyComponent>
);`,
		},
	},
	{
		key: "18",
		label: "18. Самозакрывающиеся теги",
		description: {
			text: "Если компонент не имеет дочерних элементов, используйте самозакрывающиеся теги. Это улучшает читаемость.",
			bad: `<SomeComponent variant="stuff"></SomeComponent>`,
			good: `<SomeComponent variant="stuff" />`,
		},
	},
	{
		key: "19",
		label: "19. Нижнее подчеркивание в названии метода",
		description: {
			text: "Не используйте символы подчеркивания ни в одном внутреннем методе React.",
			bad: `const _onClickHandler = () => {
  // код
}`,
			good: `const onClickHandler = () => {
  // код
}`,
		},
	},
	{
		key: "20",
		label: "20. Проп alt",
		description: {
			text: "Всегда включайте проп alt в теги {`<img >`}. И не используйте picture или image в проп alt, потому что программы чтения с экрана уже объявляют элементы img изображениями.",
			bad: `<img src="hello.jpg" />

<img src="hello.jpg" alt="Picture of me rowing a boat" />`,
			good: `<img src="hello.jpg" alt="Me waving hello" />`,
		},
	},
];

export const librariesData = [
	{
		key: "1",
		label: "Material UI",
		description:
			"Material UI - это библиотека компонентов react с открытым исходным кодом, разработанная компанией MUI и реализующая Material Design от Google. Она включает в себя предварительно собранную коллекцию готовых компонентов, готовых к использованию в рабочей среде.",
		href: [
			{
				name: "Сайт",
				link: "https://mui.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/mui/material-ui",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@mui/material",
			},
		],
	},
	{
		key: "2",
		label: "Chakra UI",
		description:
			"Это еще одна быстрорастущая, популярная и доступная библиотека пользовательского интерфейса React. Chakra UI - это простая модульная библиотека, которая предоставляет вам строительные блоки для создания ваших приложений React.",
		href: [
			{
				name: "Сайт",
				link: "https://v2.chakra-ui.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/chakra-ui/chakra-ui",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@chakra-ui/react",
			},
		],
	},
	{
		key: "3",
		label: "Ant Design",
		description:
			"Ant Design - это хорошо документированная библиотека пользовательского интерфейса React с высококачественными компонентами React. Это популярная библиотека React и одна из наиболее часто используемых библиотек, получившая более 87 тысяч звезд на GitHub и более 1 миллиона еженедельных загрузок на NPM. А дизайн - отличный выбор, если вы хотите создавать продукты корпоративного уровня.",
		href: [
			{
				name: "Сайт",
				link: "https://ant.design/",
			},
			{
				name: "GitHub",
				link: "https://github.com/ant-design/ant-design",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/antd",
			},
		],
	},
	{
		key: "4",
		label: "React BootStrap",
		description:
			"React BootStrap также является одной из самых популярных библиотек пользовательского интерфейса React. Созданная поверх популярного фреймворка Bootstrap, эта библиотека объединяет компоненты Bootstrap с React, поскольку она призвана заменить Bootstrap JavaScript. У React BootStrap более 22 тысяч звезд на GitHub и более 2 миллионов еженедельных загрузок на NPM",
		href: [
			{
				name: "Сайт",
				link: "https://react-bootstrap.netlify.app/",
			},
			{
				name: "GitHub",
				link: "https://github.com/react-bootstrap/react-bootstrap",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/react-bootstrap",
			},
		],
	},
	{
		key: "5",
		label: "PrimeReact",
		description:
			"Prime React - это богатый набор компонентов пользовательского интерфейса с открытым исходным кодом для React, разработанный для экосистемы Priming. Это независимая от дизайна библиотека пользовательского интерфейса React с более чем 96 тысячами еженедельных загрузок и 4,6 тысячами звезд GitHub. Это одна из моих любимых библиотек из-за списка функций, которыми она обладает и которые предлагаются 'из коробки'. Вы можете многое сделать с помощью библиотеки Prime React без установки дополнительных пакетов.",
		href: [
			{
				name: "Сайт",
				link: "https://primereact.org/",
			},
			{
				name: "GitHub",
				link: "https://github.com/primefaces/primereact",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/primereact",
			},
		],
	},
	{
		key: "6",
		label: "Next UI",
		description:
			"Next UI - это полнофункциональная библиотека пользовательского интерфейса React с отличной производительностью, идеально подходящая для ваших веб-приложений. Независимо от того, являетесь ли вы новичком или опытным разработчиком, вы можете легко создать свое приложение с помощью библиотеки. Next UI также основан на Tailwind Variants и написан на TypeScript. У него более 16 тысяч звезд на GitHub и более 44 тысяч еженедельных загрузок на NPM.",
		href: [
			{
				name: "Сайт",
				link: "https://nextui.org/",
			},
			{
				name: "GitHub",
				link: "https://github.com/nextui-org/nextui",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@nextui-org/react",
			},
		],
	},
	{
		key: "7",
		label: "Semantic UI React",
		description:
			"Semantic UI - это популярный фреймворк пользовательского интерфейса React, известный своим понятным и понятным для пользователя HTML. Semantic UI React - это официальная интеграция Semantic UI с React и содержит более 100 компонентов, которые вы можете легко использовать при создании своего приложения. У него более 13 тысяч звезд на GitHub и более 260 тысяч еженедельных загрузок на NPM",
		href: [
			{
				name: "Сайт",
				link: "https://react.semantic-ui.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/Semantic-Org/Semantic-UI-React",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/semantic-ui-react",
			},
		],
	},
	{
		key: "8",
		label: "Grommet",
		description:
			"Grommet - это адаптивная библиотека, ориентированная на масштабируемость и доступный дизайн. Это универсальная библиотека пользовательского интерфейса React для создания доступных через Интернет и адаптивных приложений. Grommet известна своим вниманием к удобству использования, тематизации и обширным интуитивно понятным компонентам. Это частично система проектирования и частично фреймворк. У нее более 8 тысяч звезд на GitHub и более 24 тысяч еженедельных загрузок на NPM",
		href: [
			{
				name: "Сайт",
				link: "https://v2.grommet.io/",
			},
			{
				name: "GitHub",
				link: "https://github.com/grommet/grommet",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/grommet",
			},
		],
	},
	{
		key: "9",
		label: "Onsen UI",
		description:
			"Onsen UI - это библиотека пользовательского интерфейса React с открытым исходным кодом, которая также ориентирована на мобильные устройства. Она отлично подходит для создания гибридных и мобильных веб-приложений. У них также есть поддержка material design для IOS и Android. Onsen UI имеет собственный внешний вид, поскольку его компоненты специально разработаны для мобильных приложений. У него более 8 тысяч звезд на GitHub и более 24 тысяч еженедельных загрузок",
		href: [
			{
				name: "Сайт",
				link: "https://onsen.io/v2/guide/react/",
			},
			{
				name: "GitHub",
				link: "https://github.com/OnsenUI/OnsenUI",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/onsenui",
			},
		],
	},
	{
		key: "10",
		label: "Tailwind UI",
		description:
			"Tailwind UI - это официальная библиотека пользовательского интерфейса от создателей Tailwind CSS. Она предоставляет готовые, настраиваемые и готовые к работе компоненты пользовательского интерфейса для Tailwind CSS. Tailwind UI имеет более 9 тысяч звезд на GitHub и является платной библиотекой с ежемесячными и ежегодными тарифами.",
		href: [
			{
				name: "Сайт",
				link: "https://tailwindui.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/tailwindui",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@tailwindui/react",
			},
		],
	},
	{
		key: "11",
		label: "Core UI",
		description:
			"Core UI - это настраиваемая библиотека для создания адаптивных веб-приложений. Core UI - это корпоративная библиотека пользовательского интерфейса, которая содержит шаблоны панели администратора с открытым исходным кодом. В ней есть десятки шаблонов администратора, которые вы можете купить и загрузить для использования. Core UI также обеспечивает кроссбраузерную совместимость. У него около 618 звезд на GitHub и более 47 тысяч еженедельных загрузок",
		href: [
			{
				name: "Сайт",
				link: "https://coreui.io/react/",
			},
			{
				name: "GitHub",
				link: "https://github.com/coreui/coreui-react/",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@coreui/react",
			},
		],
	},
	{
		key: "12",
		label: "Blueprint UI",
		description:
			"Blueprint UI - это проект Palantir Technologies с открытым исходным кодом, который предлагает набор высококачественных компонентов пользовательского интерфейса. Blueprint UI - это инструментарий пользовательского интерфейса на основе React, который лучше всего использовать для создания сложных интерфейсов для настольных приложений. Следовательно, если вы хотите создавать настольные приложения, эта библиотека идеально подойдет. Благодаря более чем 20 тысячам звездочек GitHub и более чем 193 тысячам еженедельных загрузок на NPM, Blueprint UI пользуется большой популярностью.",
		href: [
			{
				name: "Сайт",
				link: "https://blueprintjs.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/palantir/blueprint",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@blueprintjs/core",
			},
		],
	},
	{
		key: "13",
		label: "React Suite",
		description:
			"React Suite - это набор высококачественных компонентов React, которые обеспечивают отличные возможности для разработчиков. Это настраиваемая библиотека пользовательского интерфейса React, которая предлагает богатые и расширяемые компоненты пользовательского интерфейса. У нее более 7 тысяч звезд на GitHub и более 59 тысяч еженедельных загрузок на NPM",
		href: [
			{
				name: "Сайт",
				link: "https://rsuitejs.com/",
			},
			{
				name: "GitHub",
				link: "https://github.com/rsuite/rsuite",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/rsuite",
			},
		],
	},
	{
		key: "14",
		label: "Mantine",
		description:
			"Mantine - это полнофункциональная библиотека пользовательского интерфейса React, которая содержит более 100 настраиваемых компонентов и 50 перехватчиков, которые вы можете использовать для создания своих веб-приложений React. Она также имеет открытый исходный код и поддерживается TypeScript. У него более 21 тысячи звезд на GitHub и более 250 тысяч еженедельных загрузок.",
		href: [
			{
				name: "Сайт",
				link: "https://mantine.dev/",
			},
			{
				name: "GitHub",
				link: "https://github.com/mantinedev/mantine",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/@mantine/core",
			},
		],
	},
	{
		key: "15",
		label: "React-Admin",
		description:
			"React-Admin - это библиотека пользовательского интерфейса React, которая идеально подходит для B2B-приложений. Созданная на основе API-интерфейсов REST и GraphQL, React-Admin - это библиотека с открытым исходным кодом, которая призвана обеспечить наилучший опыт для разработчиков, которые хотят создавать панели администрирования. В настоящее время им пользуются более 10 тысяч компаний по всему миру. У него есть как бесплатные версии, так и версии корпоративного уровня. У него более 23 тысяч звезд на GitHub и 56 тысяч еженедельных загрузок. Я настоятельно рекомендую эту библиотеку, если вы хотите создать любую панель управления, поскольку она предлагает практически все, что вам нужно для создания высокочувствительного и доступного через Интернет приложения для администрирования.",
		href: [
			{
				name: "Сайт",
				link: "https://marmelab.com/react-admin/",
			},
			{
				name: "GitHub",
				link: "https://github.com/marmelab/react-admin",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/react-admin",
			},
		],
	},
	{
		key: "16",
		label: "React Router",
		description:
			"React Router — популярная компактная библиотека для React. Это позволяет разработчикам создавать одностраничные приложения с динамической маршрутизацией на стороне клиента. React Router предназначен для бесперебойной работы с React и позволяет разработчикам декларативно определять маршруты своих приложений с помощью JSX. Это упрощает создание сложных и иерархических навигационных структур в одностраничном приложении. Одним из ключевых преимуществ использования React Router является его способность выполнять разделение кода , что позволяет разработчикам загружать только необходимые компоненты для заданного маршрута, сокращая начальное время загрузки приложения и повышая производительность. Еще одним преимуществом React Router является поддержка управления историей браузера, что позволяет пользователям перемещаться по приложению с помощью кнопок браузера «назад» и «вперед».",
		href: [
			{
				name: "Сайт",
				link: "https://reactrouter.com/en/main",
			},
			{
				name: "GitHub",
				link: "https://github.com/remix-run/react-router",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/react-router-dom",
			},
		],
	},
	{
		key: "17",
		label: "React Redux",
		description:
			"React Redux — это предсказуемая библиотека компонентов с простым интерфейсом и надежными возможностями тестирования кода. Когда разработчики вводят значения для компонентов, интерфейс автоматически извлекает, обновляет и уведомляет значения. В Redux есть несколько DevTools для отслеживания изменений состояния приложения, ведения журналов, а также отправки отчетов об ошибках. Redux — одна из самых популярных библиотек React, набравшая более 21 000 звезд на GitHub. Redux отлично работает с Angular, React и многими другими фреймворками JavaScript. Разработчики могут подключать код React к нескольким компонентам, писать согласованный код и редактировать его, пока приложение работает с Redux.",
		href: [
			{
				name: "Сайт",
				link: "https://react-redux.js.org/",
			},
			{
				name: "GitHub",
				link: "https://github.com/reduxjs/react-redux",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/react-redux",
			},
		],
	},
	{
		key: "18",
		label: "React Native",
		description:
			"React Native - это React.js фреймворк Facebook, используемый для создания собственных мобильных приложений как для Android, так и для iOS с использованием общего языка Javascript. Это требует предварительных знаний HTML, CSS, JS и Node.js поскольку для создания кода Javascript используется Node as. React Native состоит из собственных компонентов из-за быстрого выполнения приложения. В нем используется JSX.",
		href: [
			{
				name: "Сайт",
				link: "https://reactnative.dev/",
			},
			{
				name: "GitHub",
				link: "https://github.com/facebook/react-native",
			},
			{
				name: "NPM",
				link: "https://www.npmjs.com/package/react-native",
			},
		],
	},
];

export const hrefData = new Map([
	[
		"practices",
		"https://it-dev-journal.ru/articles/20-sovetov-dlya-uluchsheniya-kachestva-koda-v-react-proekte",
	],
	["libraries", "https://prismic.io/blog/react-component-libraries"],
	[
		"hooks",
		"https://proglib.io/p/15-kastomnyh-hukov-dlya-oblegcheniya-komponentov-react-2021-08-11",
	],
	["typescript", "https://scriptdev.ru/"],
	["html", "https://altyncev.ru/blog/2017-11-16-csslover-job-interview/"],
	[
		"css",
		"https://career.guru99.com/ru/top-50-csscascading-style-sheet-interview-questions/",
	],
	[
		"js",
		"https://proglib.io/p/voprosy-dlya-podgotovki-k-sobesedovaniyu-po-javascript-chast-1-2023-12-18",
	],
	[
		"react",
		"https://proglib.io/p/45-voprosov-dlya-podgotovki-k-sobesedovaniyu-po-react-2023-11-27",
	],
	["web", ""],
]);

export const questionData = new Map([
	[
		"html",
		[
			{
				id: 1,
				text: "Какой тег используется для создания ссылки?",
				answer: "<a>",
			},
			{
				id: 2,
				text: "Какой тег используется для вставки изображения?",
				answer: "<img>",
			},
			{
				id: 3,
				text: "Какой тег находится в <html> определяет заголовок документа?",
				answer: "<head>",
			},
			{
				id: 4,
				text: "Какой атрибут используется для определения альтернативного текста изображения?",
				answer: "alt",
			},
			{
				id: 5,
				text: "Какой атрибут позволяет открыть ссылку в новой вкладке?",
				answer: "target=_blank",
			},
			{
				id: 6,
				text: "Для чего используется атрибут 'placeholder'?",
				answer: "Атрибут 'placeholder' используется для отображения текстовой подсказки или примера ввода в поле формы до того, как пользователь начнет вводить свои данные.",
			},
			{
				id: 7,
				text: "Как создать непронумерованный список в HTML?",
				answer: "Для создания такого списка в HTML используется тег <code>ul</code>, а для определения каждого пункта списка - тег <code>li</code>.",
			},
			{
				id: 8,
				text: "Что такое HTML?",
				answer: "HTML (HyperText Markup Language) - это стандартизированный язык разметки, который используется для создания и разработки веб-страниц. Это система для разметки отдельных частей веб-страницы с использованием тегов, заключенных в угловые скобки.",
			},
			{
				id: 9,
				text: "Что делает тег <!DOCTYPE>?",
				answer: "`Это декларация, которая информирует веб-браузер о версии языка разметки, использованной при создании веб-страницы. Это помогает браузеру корректно отобразить страницу.",
			},
			{
				id: 10,
				text: "Какой тег используется для создания таблицы?",
				answer: "<table>",
			},
			{
				id: 11,
				text: "Какой тег используется для создания заголовка таблицы?",
				answer: "<thead>",
			},
			{
				id: 12,
				text: "Какой тег используется для создания строки таблицы?",
				answer: "<tr>",
			},
			{
				id: 13,
				text: "Какой тег используется для создания ячейки таблицы?",
				answer: "<td>",
			},
			{
				id: 14,
				text: "Что такое семантические теги в HTML?",
				answer: "Семантические теги в HTML - это теги, которые передают информацию о смысле или назначении содержимого, а не только о его внешнем виде. Примеры семантических тегов: header, footer, article, section, nav и др. Они помогают создавать более структурированные и доступные веб-страницы.",
			},
			{
				id: 15,
				text: "Какой атрибут используется для установки фонового изображения?",
				answer: "background-image",
			},
			{
				id: 16,
				text: "Какой тег используется для создания выпадающего списка?",
				answer: "<select>",
			},
			{
				id: 17,
				text: "Какой тег используется для вставки JavaScript кода в HTML документ?",
				answer: "<script>",
			},
			{
				id: 18,
				text: "Какой атрибут используется для указания пути к изображению?",
				answer: "src",
			},
			{
				id: 19,
				text: "Что делает атрибут 'readonly' в элементе формы?",
				answer: "Атрибут 'readonly' делает элемент формы только для чтения, что значит, что пользователь не может изменять значение элемента, но может просматривать его. Это может быть полезно, если вы хотите отобразить информацию, которая не должна быть изменена.",
			},
			{
				id: 20,
				text: "Что такое веб-стандарты и зачем они нужны?",
				answer: "Веб-стандарты - это рекомендации, разработанные группами стандартов, такими как W3C или WHATWG, для обеспечения совместимости и устойчивости веб-технологий. Они включают рекомендации по HTML, CSS, JavaScript и другим веб-технологиям. Соблюдение веб-стандартов помогает обеспечить корректную работу веб-страниц в различных браузерах и устройствах, а также облегчить обслуживание и расширение веб-сайтов в будущем.",
			},
			{
				id: 21,
				text: "Что такое отзывчивый (responsive) веб-дизайн?",
				answer: "Это подход к веб-дизайну, который позволяет веб-страницам корректно отображаться и функционировать на различных устройствах, включая мобильные телефоны, планшеты и настольные компьютеры, путем использования гибких макетов, гибких изображений и CSS медиазапросов для адаптации дизайна к различным размерам экрана и характеристикам устройств.",
			},
			{
				id: 22,
				text: "Какой тег HTML используется для вставки видео?",
				answer: "<video>",
			},
			{
				id: 23,
				text: "Какой тег используется для создания главного заголовка на веб-странице?",
				answer: "<h1>",
			},
			{
				id: 24,
				text: "Что делает тег <br>?",
				answer: "Он спользуется для переноса строки, что позволяет создать новую строку в том месте, где он размещен. Это удобный способ управления расположением текста на веб-странице без использования дополнительных стилей или элементов.",
			},
			{
				id: 25,
				text: "Какой тег используется для создания упорядоченного списка?",
				answer: "<ol>",
			},
			{
				id: 26,
				text: "Что такое DOM в контексте веб-разработки?",
				answer: "DOM (Document Object Model) - это программный интерфейс для веб-документов. Это представление структурированного документа в виде объектной модели, которое позволяет программам и скриптам взаимодействовать с содержимым, структурой и стилями веб-страницы. DOM представляет документ как дерево объектов, каждый из которых соответствует части страницы.",
			},
			{
				id: 27,
				text: "Какой атрибут используется для определения стилей элемента на странице?",
				answer: "style",
			},
			{
				id: 28,
				text: "Что такое атрибут 'alt' в теге <img>?",
				answer: "Он используется для предоставления альтернативного текста, который будет отображаться в случае, если изображение не может быть загружено. Это также может быть полезно для обеспечения доступности, поскольку скрин-ридеры могут использовать этот текст для описания изображения пользователям с ограниченными возможностями.",
			},
			{
				id: 29,
				text: "Блочные и строчные элементы",
				answer: "Блочные элементы запрограммированы таким образом, что занимают настолько много места, насколько они могут. В противоположность этому, строчные элементы занимают минимально возможное место.",
			},
			{
				id: 30,
				text: "<script defer>",
				answer: "скрипт будет получен параллельно с отрисовкой HTML, его выполнение  произойдет после того, как вся страница будет загружена.",
			},
			{
				id: 31,
				text: "<marquee>",
				answer: "HTML-элемент <marquee> используется для создания на странице прокручивающегося текста (бегущей строки). Принимает много параметров и обработчиков событий. Имеет хорошую поддержку среди браузеров.",
			},
			{
				id: 32,
				text: "Как сделать так, чтобы все гиперссылки сайта автоматически открывались в новом окне?",
				answer: "Нужно в области head прописать тег base с атрибутом target='_blank'",
			},
			{
				id: 33,
				text: "Из чего стоит компонент HTML?",
				answer: "HTML состоит из двух компонентов: первый - это контент, а второй - тег. Вместе они помогают отображать страницы с необходимой информацией.",
			},
			{
				id: 34,
				text: "Все ли теги являются парными?",
				answer: "Нет, не все. Существуют одиночные теги, например, <img> — для изображений. В этом случае контент вместе с другими служебными словами (например, для <img> это может быть src=”url изображения”) размещается между скобками, но после слова img.",
			},
			{
				id: 35,
				text: "Какие основные виды списков применяют при создании веб-страницы?",
				answer: "При создании веб-страницы можно использовать: \nMenu list (список меню — <menu>).\nDirectory list (список директорий — <dir>).\nOrdered list (нумерованный список — <ol>).\nUnordered list (маркированный список — <ul>).\nDefinition list (список определений — <dl>).",
			},
			{
				id: 36,
				text: "Зачем использовать списки в HTML?",
				answer: "Списки делают информацию более наглядной и удобной для восприятия. Более того, внутри списков (точнее, для произвольного отображения элементов списка) тоже можно использовать различные теги.",
			},
			{
				id: 37,
				text: "Можем ли мы писать комментарии в HTML-коде? Как?",
				answer: "Да, можем. Для этого текст комментария нужно поместить внутри <!-- и -->.",
			},
			{
				id: 38,
				text: "Почему некоторые символы на веб-странице иногда отображаются некорректно?",
				answer: "Чаще всего символы отображаются некорректно из-за проблем с кодировкой. То есть причина — в настройках браузера или веб-сервера.",
			},
			{
				id: 39,
				text: "Что такое Image Map?",
				answer: "В HTML Image Map — это технология, которая позволяет привязывать ссылки к фрагментам изображения. Щелкая мышью на отдельных частях изображения, пользователь может переходить по той или иной ссылке на разные веб-страницы.",
			},
			{
				id: 40,
				text: "Что такое white-space?",
				answer: "White-space — это свойство, позволяющее менять количество пробелов между словами при отображении веб-страницы. По умолчанию любое количество пробелов в HTML-коде браузер интерпретирует как один пробел.",
			},
			{
				id: 41,
				text: "В чём главное преимущество white-space?",
				answer: "При написании HTML-кода разработчику не нужно беспокоиться о лишних пробелах, которые он мог ввести: браузер при отображении веб-страницы уберёт все лишние пробелы. Разработчик может добавлять в код пробелы не только случайно, но и специально: чтобы код стал более читабельным.",
			},
			{
				id: 42,
				text: "Можно ли присваивать значения не всем атрибутам тега?",
				answer: "Да, в этом случае браузер будет использовать значения по умолчанию. Если вас не устраивает то, как он отобразил веб-страницу, то, возможно, следует явно указать значения некоторых атрибутов.",
			},
			{
				id: 43,
				text: "Как разместить знак copyright на веб-странице, ведь его нет на клавиатуре?",
				answer: "Знак copyright относится к спецсимволам. Чтобы разместить его на веб-странице, нужно в соответствующем фрагменте HTML-кода набрать на клавиатуре последовательность &copy или &#169.",
			},
			{
				id: 44,
				text: "Как создать ссылки на разные фрагменты (разделы) одной и той же веб-страницы?",
				answer: "Для этого нужно найти в HTML-коде начало нужного нам фрагмента. В этом месте создать так называемый «якорь» при помощи атрибута name тега <a> и дать имя ссылке на фрагмент, используя атрибут href и знак #:href='#имя_ссылки_на_фрагмент'",
			},
			{
				id: 45,
				text: "Могут ли файлы HTML хорошо работать в каком-нибудь редком или ультрасовременном браузере?",
				answer: "Конечно, файлы HTML могут и должны хорошо работать в любом браузере, потому что браузер должен соответствовать стандартам HTML. Если разработчики решили не поддерживать некоторые функции стандарта, это остаётся на их совести.",
			},
			{
				id: 46,
				text: "Как вы думаете гиперссылка может быть только текстовой?",
				answer: "Да, гиперссылка может быть не только текстовой, но и, например, графической. Это означает, что мы можем преобразовать изображение в ссылку, которая направит пользователя на другую страницу. Гиперссылка вообще не зависит от типа контента, который лежит «под ней».",
			},
			{
				id: 47,
				text: "Что из себя представляют атрибуты тега <li> — элемента списка?",
				answer: "type устанавливает вид маркера нумерованного или маркированного списка; value — число, с которого будет начинаться нумерованный список.",
			},
			{
				id: 48,
				text: "Как задать разные цвета для фрагментов текста веб-страницы?",
				answer: "Чтобы задать разные цвета для фрагментов текста, нужно поместить каждый из фрагментов внутрь парного тега font: <font color=“color”>какой-то текстовый фрагмент цвета “color”</font>",
			},
			{
				id: 49,
				text: "Где хранятся числовые коды символов в HTML?",
				answer: "В таблице ASCII. При отображении веб-страницы браузер берет числовые коды символов из HTML-документа и заменяет их на соответствующий символ из таблицы.",
			},
			{
				id: 50,
				text: "Как изменить цвет маркера?",
				answer: "Цвет маркера обычно соответствует цвету первого символа в списке. Если вы измените цвет первого символа с помощью тега <font>, то цвет маркера также изменится. Если мы хотим задать цвет маркера в списке не изменяя цвет текста, то внутрь <li> нужно вложить тег <span>, а уже внутрь него поместить текст. И тогда цвет маркера будет определяться стилевым свойством color селектора LI, а цвет текста — свойством color селектора SPAN.",
			},
			{
				id: 51,
				text: "Есть ли другой способ разделить текст без использования <br>?",
				answer: "Да, существуют другие способы разделения текста. Можно использовать тег <p> или тег <blockquote>.",
			},
			{
				id: 52,
				text: "Есть у таблиц стилей какая-либо иерархия правил?",
				answer: "Да, существует иерархия, которая включает в себя четыре уровня (от самого приоритетного к наименее приоритетному):\nВстроенный стиль: прикрепляется непосредственно к элементу, для которого создается стиль. \nИдентификатор — это уникальный идентификатор элементов страницы, таких как, #navbar.\nКлассы, атрибуты и псевдо-классы: эти категории включают.класс [атрибут] и псевдо-классы как например :hover, :focus и т.д.\nЭлементы и псевдо-элементы: эта категория включает элементы и псевдо-элементы, как например h1, div, :before и :after .",
			},
		],
	],
	[
		"css",
		[
			{
				id: 1,
				text: "В чем разница между «сбросом» и «нормализацией» CSS? Что бы вы выбрали и почему?",
				answer: "Сброс (reset) сбрасывает все встроенные в браузер стили элементов. Normalize приводит стили к единому виду во всех браузерах. Лучше использовать Normalize из-за кроссбраузерности.",
			},
			{
				id: 2,
				text: "Что такое специфичность селекторов CSS и как она работает?",
				answer: "Специфичность селектора (еще называют весом) это свойство определяющее приоритет стилевого правила, то есть то, какой стиль будет применен к HTML элементу в итоге. Например, используя какую-нибудь UI библиотеку, элементам этой библиотеки будут применены правила заданные авторами по умолчанию. При необходимости можно поменять стили на свои, «перебив» дефолтные более специфичным селектором.\n\nПодробнее тут: <a href='https://developer.mozilla.org/ru/docs/Web/CSS/Specificity' target='_blank'>Специфичность (MDN)</a>",
			},
			{
				id: 3,
				text: "Что такое CSS?",
				answer: "CSS (Cascading Style Sheets) - это язык стилей, используемый для описания внешнего вида и форматирования документа, написанного на языке разметки, таком как HTML. CSS позволяет разработчикам управлять макетом, шрифтами, цветами и другими стилистическими аспектами веб-страницы.",
			},
			{
				id: 4,
				text: "Почему, как правило, лучше разместить подключение CSS в <head>, а <script> перед тэгом </body>? Знаете ли вы какие-либо исключения, приведите примеры?",
				answer: "Стили рекомендуется подключать в head для того, чтобы страница как можно быстрее приняла свой внешний вид. Скрипты подключенные в head могут затормозить этот процесс, в связи с этим их рекомендуется подключать перед закрывающим тегом body. Исключением являются скрипты аналитики, для определения количества посетителей, которые не дождались загрузки страницы. В этом случае скрипт должен быть подключен в head.",
			},
			{
				id: 5,
				text: "Что делает свойство 'z-index' в CSS?",
				answer: "Свойство 'z-index' в CSS контролирует стековый порядок элементов по оси Z. Элемент с большим значением 'z-index' будет отображаться поверх элемента с меньшим значением 'z-index'.",
			},
			{
				id: 6,
				text: "Какие есть способы отцентровать div?",
				answer: "Существует несколько способов отцентровать div в CSS, вот некоторые из них: \n1. Использование свойств margin и auto: `margin: 0 auto;`.\n2. Использование Flexbox: `display: flex; justify-content: center; align-items: center;`.\n3. Использование Grid Layout: `display: grid; place-items: center;`.\n4. Использование свойств text-align и inline-block: `text-align: center;` на родительском элементе и `display: inline-block;` на самом div.`.",
			},
			{
				id: 7,
				text: "Какое свойство используется для установки цвета фона?",
				answer: "background-color",
			},
			{
				id: 8,
				text: "Какое свойство позволяет установить внешние отступы элемента?",
				answer: "margin",
			},
			{
				id: 9,
				text: "Какое свойство используется для установки шрифта?",
				answer: "font-family",
			},
			{
				id: 10,
				text: "Какое свойство CSS позволяет контролировать видимость элемента в DOM, но при этом сохраняет его место?",
				answer: "visibility: hidden",
			},
			{
				id: 11,
				text: "Какое свойство CSS используется для установки теней элементов?",
				answer: "box-shadow",
			},
			{
				id: 12,
				text: "Какой селектор выбирает все элементы .child, которые являются непосредственными дочерними элементами .parent?",
				answer: ".parent > .child",
			},
			{
				id: 13,
				text: "Какой селектор CSS выбирает все элементы, которые имеют указанный атрибут, начинающийся с определенной строки?",
				answer: "[attr^=value]",
			},
			{
				id: 14,
				text: "Какой селектор CSS выбирает все элементы, которые имеют указанный атрибут, заканчивающийся определенной строкой?",
				answer: "[attr$=value]",
			},
			{
				id: 15,
				text: "Какой селектор CSS выбирает все элементы, которые имеют указанный атрибут, состоящих из слов, разделённых пробелом, и среди этих слов есть определённое слово",
				answer: "[attr~=value]",
			},
			{
				id: 16,
				text: "Какой селектор CSS выбирает все элементы, которые имеют указанный атрибут, содержащий в себе определённую строку",
				answer: "[attr*=value]",
			},
			{
				id: 17,
				text: "justify-content: space-between",
				answer: "Равномерно распределяет все элементы по ширине flex-блока - первый элемент вначале, последний в конце",
			},
			{
				id: 18,
				text: "flex-shrink",
				answer: "Свойство CSS, которое определяет фактор сжатия flex-элемента. Flex-элементы будут заполнять контейнер в зависимости от значения flex-shrink, когда стандартная ширина flex-элементов шире, чем flex-контейнер.",
			},
			{
				id: 19,
				text: "Position",
				answer: "Свойство position позволяет сдвигать элемент со своего обычного места и изменять его положение в потоке.\n1. position: static - это значение любого элемента по умолчанию. При нём элемент находится в потоке, раздвигая элементы вокруг себя.\n2. position: relative - это значение позволяет элементу позиционироваться относительно его обычного положения с помощью свойств top, right, bottom, left.\n3. position: absolute - это значение позволяет элементу позиционироваться по координатам внутри его ближайшего родителя, имеющего position, отличный от static (или относительно всего документа). Абсолютно позиционированный элемент считается блочным и выносится из потока. Ширина элемента устанавливается по содержимому.\n4. position: fixed - это подвид абсолютного позиционирования. Работает аналогично position: absolute с тем отличием, что позиционирование происходит всегда относительно window, а не от какого-либо родительского элемента.",
			},
			{
				id: 20,
				text: "Padding",
				answer: "Свойство padding устанавливает внутренние отступы/поля со всех сторон элемента. Область отступов - это пространство между содержимым элемента и его границей. Отрицательные значения не допускаются.",
			},
			{
				id: 21,
				text: "Схлопывание",
				answer: "Вертикальные отступы схлопываются друг с другом, горизонтальные – нет. То есть, если два <div> расположить в колонку (один под другим) и задать каждому margin: 20px 0, то расстояние между ними будет равняться 20px, а не 40px. При этом, если бы у верхнего элемента был задан отступ в 40px, а у нижнего - в 30px, то автоматически выбрался бы больший из них - 40px. Горизонтальные отступы при этом не схлопываются, а суммируются.",
			},
			{
				id: 22,
				text: " box-sizing",
				answer: "CSS свойство box-sizing определяет формулу вычисления общей ширины и высоты элемента. box-sizing: content-box (значение по умолчанию) считает шириной и высотой элемента только ширину и высоту его контента. box-sizing: border-box считает шириной и высотой элемента ширину и высоту его контента, его внутренних отступов (padding) и суммарную ширину и высоту границ (border).",
			},
			{
				id: 23,
				text: "em и rem",
				answer: "em - это единица измерения в CSS, базирующаяся на размере шрифта текущего контекста. То-есть, если для <h1> задан font-size: 40px, то можно задать для него margin: 1em и это будет равняться margin: 40px. em 'смотрит' на размер шрифта (свой или унаследованный) элемента, по отношению к которому применяется.\nrem - это единица измерения в CSS, которая базируется на размере шрифта элемента <html>",
			},
			{
				id: 24,
				text: "Пиксели",
				answer: "Физические пиксели — привычные нам пиксели: самые маленькие элементы любого дисплея, каждый из которых имеет свой цвет и яркость. Плотность экрана (Screen density) — это количество физических пикселей дисплея. Обычно измеряется в пикселях-на-дюйм (PPI: pixels per inch). Apple, разработав Retina-экраны с двойной плотностью пикселей, утверждает, что человеческий глаз не способен различить бо′льшую плотность. CSS-пиксели — абстрактная величина, используемая браузерами для точного отображения контента на страницах вне зависимости от экрана.",
			},
			{
				id: 25,
				text: "inline, block, inline-block",
				answer: "display: block позволяет сделать элемент блочным.\ndisplay: inline позволяет сделать элемент строчным.\ndisplay: inline-block позволяет оставить элемент строчным, но позволить css-свойствам (width, height, margin) влиять на него, как на блочный.",
			},
			{
				id: 26,
				text: "Селектор",
				answer: "Селектор - это часть CSS-стиля, идентифицирующая HTML-элемент или группу HTML-элементов, по отношению к которым будет применён этот стиль.",
			},
			{
				id: 27,
				text: "Селекторы атрибутов",
				answer: "Селекторы атрибутов - это механизм, позволяющий применять стили по отношению к элементам, имеющим определенные HTML-атрибуты. ",
			},
			{
				id: 28,
				text: "Блочные и строчные элементы",
				answer: "В CSS существует два различных типа элементов: блочные и строчные.\nВ блочных элементах создается разрыв строки перед элементом и после него. Примеры блочных элементов: <div>, <h1>, <main>.\nСтрочные элементы не создают разрывов строк ни до, ни после себя. Они отображаются на одной строке с содержимым рядом стоящих элементов. Примеры строчных элементов: <em>, <span>, <b>",
			},
		],
	],
	[
		"js",
		[
			{
				id: 1,
				text: "Что такое чистая функция?",
				answer: "Это функция, которая возвращает одинаковый результат, когда вызывается с одним и тем же набором аргументов, а также не имеет побочных эффектов (side effects)",
			},
			{
				id: 2,
				text: "Что такое замыкание?",
				answer: "Замыкания – это способность функции запоминать лексическое окружение, в котором она была создана, то есть хранить в себе ссылку на это окружение и обращаться к нему.\n\n<a href='https://youtu.be/mI6Jcfsgma4?si=46DV3mXPF6mDTTPs' target='_blank'>Подробнейшее видео про замыкание</a>",
			},
			{
				id: 3,
				text: "let VS const: почему лучше использовать const, когда это возможно?",
				answer: "Использование const дает два преимущества:\n1) Безопасность: объявление переменных через const защищает от неожиданного изменения значения переменной в коде, что может часто приводит к ошибкам и неожиданному поведению программы.\n2) Читаемость: использование const позволяет читателю кода понимать, что значение переменной не будет изменяться в течение выполнения программы. Это делает код более понятным и уменьшает возможность ошибок.\n\nПодробнее: <a href='https://youtu.be/07FllcTRj84?si=q7v60ZvHYBoRSSen' target='_blank'>Видео про VAR/LET/CONST</a>",
			},
			{
				id: 4,
				text: "Что такое промисы (Promises) в JavaScript?",
				answer: "Промисы – это объекты, которые представляют результат асинхронной операции. Они могут находиться в одном из трех состояний: ожидание (pending), выполнено (fulfilled) или отклонено (rejected).",
			},
			{
				id: 5,
				text: "Что такое деструктуризация в JavaScript?",
				hasOptions: false,
				answer: "Деструктуризация позволяет извлекать отдельные свойства из объектов или элементы из массивов и присваивать их переменным в более удобной форме. Например, вот так мы можем одной строкой извлечь имя и адрес пользователя из объекта user:\n<code>const {name, address} = user;</code>",
			},
			{
				id: 6,
				text: "Что такое стрелочные функции в JavaScript?",
				answer: "Стрелочные функции — это синтаксически компактный способ записи функций в JavaScript, который не имеет своего собственного 'this'. Они часто используются для создания анонимных функций.\n\n<a href='https://youtu.be/nGVYdna4kq4?si=1k0J9F-MYxWCaq6M' target='_blank'>Подробное видео про функции в JS</a>",
			},
			{
				id: 7,
				text: "Что такое hoisting в JavaScript?",
				answer: "Hoisting — это механизм в JavaScript, при котором переменные и объявления функций перемещаются на верх своей области видимости перед выполнением кода.",
			},
			{
				id: 8,
				text: "Какой метод используется для добавления элемента в массив?",
				answer: "push()",
			},
			{
				id: 9,
				text: "Какой объект представляет текущее окно браузера?",
				answer: "window",
			},
			{
				id: 10,
				text: "Какой оператор используется для сравнения на строгое равенство?",
				answer: "===",
			},
			{
				id: 11,
				text: "Какой метод используется для удаления последнего элемента из массива?",
				answer: "pop()",
			},
			{
				id: 12,
				text: "Какой метод в JavaScript используется для преобразования объекта в строку JSON?",
				answer: "JSON.stringify()",
			},
			{
				id: 13,
				text: "Какой объект в JavaScript используется для работы с датой и временем?",
				answer: "Date",
			},
			{
				id: 14,
				text: "Какой метод массива в JavaScript используется для фильтрации элементов по определенному критерию?",
				answer: "filter()",
			},
			{
				id: 15,
				text: "ECMAScript",
				answer: "ECMAScript — это спецификация, стандарт скриптовых языков программирования, он является основой JS, поэтому любые изменения ECMAScript отражаются на JS.",
			},
			{
				id: 16,
				text: "Типы данных",
				answer: "- undefined,- null,- boolean,- number,- string,- bigint,- object,- symbol (ES6)",
			},
			{
				id: 17,
				text: "Цикл событий",
				answer: "Цикл событий - это механизм, на каждом тике выполняющий функции из стека вызовов и, если он оказывается пустым, перемещающий задачи из очереди задач в стек вызовов для выполнения.\nСтек вызовов - это структура данных (первым вошел, последним вышел), используемая для отслеживания порядка выполнения функций в текущем контексте (области видимости).\nОчередь задач - это структура данных (первым вошел, первым вышел), используемая для отслеживания выполнения асинхронных функций, готовых оказаться в стеке вызовов.",
			},
			{
				id: 18,
				text: "Область видимости",
				answer: "Область видимости — это место, где мы имеем доступ к переменным и функциям, находящимся в ней. JS имеем три типа областей видимости: глобальная, функциональная и блочная (ES6).\nГлобальная — переменные и функции, объявленные в глобальном пространстве имен, имеют глобальную область видимости и доступны из любого места в коде.\nФункциональная — переменные, функции и параметры, объявленные внутри функции, доступны только внутри этой функции.\nБлочная — переменные, объявленные с помощью ключевых слов let и const, доступны только внутри блока {}, в котором были объявлены.",
			},
			{
				id: 19,
				text: "this",
				answer: "Обычно this ссылается на значение объекта, который в данный момент выполняет функцию. «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения, от того места, где мы используем this.\ncall и apply принимают в качестве первого аргумента объект, который будет являться значением this внутри функции.\nСтрелочные функции не имеют собственного значения this. Они копируют значение this из внешнего лексического окружения.",
			},
			{
				id: 20,
				text: "Event Propagation",
				answer: "Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие «распространяется» от объекта window до вызвавшего его элемента (event.target). При этом событие последовательно пронизывает всех предков целевого элемента.\nРаспространение события имеет три стадии:\n1. Фаза погружения — событие возникает в объекте window и опускается до цели события через всех ее предков.\n2. Целевая фаза — это когда событие достигает целевого элемента.\n3. Фаза всплытия — событие поднимается от event.target, последовательно проходит через всех его предков и достигает объекта window.",
			},
			{
				id: 21,
				text: "use strict",
				answer: "«use strict» — это директива ES5, которая заставляет весь наш код или код отдельной функции выполняться в строгом режиме. Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах.\nВот какие ограничения накладывает строгий режим:\n1. Нельзя присваивать значения или обращаться к необъявленным переменным\n2. Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи\n3. Нельзя удалить «неудаляемое» свойство объекта\n4. Запрещено дублирование параметров функции\n5. Нельзя создавать функции с помощью функции eval\n6. Значением «this» по умолчанию является undefined",
			},
			{
				id: 22,
				text: "null и undefined",
				answer: "undefined представляет собой значение по умолчанию: \n- переменной, которой не было присвоено значение;\n- функции, которая ничего не возвращает явно, например, console.log(1);\n- несуществующего свойства объекта.\nnull — это значение, которое присваивается переменной явно.\nПри сравнении null и undefined мы получаем true, когда используем оператор '==', и false при использовании оператора '==='.",
			},
			{
				id: 23,
				text: "Прототип",
				answer: "Прототип - это независимый объект, хранящий свойства и методы, доступные всем объектам, чей __proto__ ссылается на него (на этот прототип). На этом принципе строится прототипное наследование в JS.\nconst o = {}\nconsole.log(o.toString()) // [object Object]\nНесмотря на то, что объект о не имеет свойства toString, обращение к этому свойству не вызывает ошибки. Если определенного свойства нет в объекте, его поиск осуществляется сначала в прототипе объекта, затем в прототипе прототипа объекта и так до тех пор, пока свойство не будет найдено. Это называется цепочкой прототипов. На вершине цепочки прототипов находится объект, доступный по обращению Object.prototype.\nconsole.log(o.toString === Object.prototype.toString) // true",
			},
			{
				id: 24,
				text: "Методы Promise",
				answer: "Promise.all() - возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое из переданных промисов.\nPromise.allSettled() - возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.\nPromise.any() - принимает итерируемый объект содержащий объекты промисов. Как только один из промисов выполнится успешно, метод возвратит единственный объект Promise со значением выполненного промиса. Если ни один из промисов не завершится успешно, тогда возвращённый объект будет отклонён.\nPromise.race() - возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.\nPromise.reject(reason) - возвращает объект Promise, который был отклонён по указанной причине.\nPromise.resolve(value) - возвращает Promise выполненный с переданным значением.",
			},
			{
				id: 25,
				text: "Async/await",
				answer: "async/await — относительно новый способ написания асинхронного (неблокирующего) кода в JS. Он делает код более читаемым и чистым, чем промисы и функции обратного вызова. Использование ключевого слова «async» перед функцией заставляет ее возвращать промис. Ключевое слово «await» можно использовать только внутри асинхронной функции. await ожидает завершения выражения справа, чтобы вернуть его значение перед выполнением следующей строчки кода.",
			},
		],
	],
	[
		"react",
		[
			{
				id: 1,
				text: "Что такое React JS?",
				answer: "React JS, или просто React, это открытая библиотека JavaScript для создания пользовательских интерфейсов, особенно для одностраничных приложений (SPA). Ключевые особенности React:\n1) Компонентный подход: React строится на концепции компонентов, что позволяет разработчикам создавать легко переиспользуемые куски кода;\n2) Виртуальный DOM: React использует виртуальный DOM для отслеживания изменений. Это абстракция реального DOM, что позволяет библиотеке обновлять только те части интерфейса, которые действительно изменились, вместо полного перерендеринга страницы. Это делает React относительно быстрым;\n3) Хуки: Введение хуков позволило использовать состояния и другие возможности классовых компонентов в функциональных компонентах, что сделало код более кратким и чистым;\n4) Сообщество и экосистема: React имеет большое и активное сообщество разработчиков, а также много библиотек и инструментов, созданных сообществом, что облегчает разработку сложных приложений.\n\nПодробнее: <a href='https://youtu.be/R_39q-vdOaE?si=mEKDaYDjEdnojG-N' target='_blank'>Введение в React (видео)</a>",
			},
			{
				id: 2,
				text: "Для чего нужен атрибут key при рендере списков?",
				answer: "Ключи (keys) помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени. Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Лучше всего вы будете использовать ID из ваших данных как ключи. Индексы массива тоже можно использовать для этого, но только если элементы массива не добавляются в начало, не переставляются и не удаляются.",
			},
			{
				id: 3,
				text: "Как работает проп children?",
				answer: "Некоторые компоненты не знают своих потомков заранее. Это особенно характерно для таких компонентов, как Sidebar или Dialog, которые представляют из себя как бы «коробку», в которую можно что-то положить. Для таких компонентов можно использовать специальный проп children, который передаст дочерние элементы сразу на вывод.\n\nПодробнее: <a href='https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children' target='_blank'>Документация React (eng)</a>",
			},
			{
				id: 4,
				text: "Что такое порталы в React?",
				answer: "Порталы позволяют рендерить дочерние элементы в DOM-узел, который находится вне DOM-иерархии родительского компонента. Типовой случай применения порталов — когда в родительском компоненте заданы стили overflow: hidden или z-index, но вам нужно, чтобы дочерний элемент визуально выходил за рамки своего контейнера. Чаще всего, это диалоговые окна, всплывающие карточки и всплывающие подсказки.",
			},
			{
				id: 5,
				text: "Что такое Reconciliation (Cверка)?",
				answer: "Это процесс, посредством которого React обновляет DOM. Когда состояние компонента изменяется, React должен рассчитать необходимость обновления DOM. Это делается путем создания виртуального DOM и сравнения его с текущим DOM. В этом контексте виртуальный DOM будет содержать новое состояние компонента.",
			},
			{
				id: 6,
				text: "Для чего используется хук useEffect в React?",
				answer: "Выполнения побочных эффектов",
			},
			{
				id: 7,
				text: "Что будет, если вторым аргументом в useEffect передать пустой массив []?",
				answer: "useEffect будет запущен 1 раз",
			},
			{
				id: 8,
				text: "Какой хук используется для создания состояния в компоненте?",
				answer: "useState",
			},
			{
				id: 9,
				text: "Какой элемент используется для группировки элементов без добавления дополнительных узлов в DOM?",
				answer: "<Fragment> (<>)",
			},
			{
				id: 10,
				text: "У нас есть массив со строками (arr), каждую из которых мы хотим отразить на странице. Какой метод массива нужно применить в return компонента?",
				answer: "{arr.map(...)}",
			},
			{
				id: 11,
				text: "Какой элемент используется для обработки ошибок в дереве компонентов?",
				answer: "ErrorBoundary",
			},
			{
				id: 12,
				text: "Какой (какие) аргумент(ы) принимает хук useMemo?",
				answer: "Функцию и массив зависимостей",
			},
			{
				id: 13,
				text: "Для чего используется хук useCallback в React?",
				answer: "Мемоизации функций",
			},
			{
				id: 14,
				text: " Что такое виртуальный DOM?",
				answer: "Виртуальный DOM (VDOM) - это копия Document Object Model, которую в своем ядре выстраивает фреймворк (в данном случае React). Вместо того, чтобы при каждом изменении данных заставлять браузер переформировывать DOM, внутри фреймворка происходит перерасчёт Virtual DOM. Дальше по результатам сравнения построенного Virtual DOM и DOM фреймворк вносит точечные изменения в реальный DOM.",
			},
			{
				id: 15,
				text: "Что такое JSX?",
				answer: "JSX - это дополнение к синтаксису JS, которое позволяет писать HTML в React компонентах. JSX - синтаксический сахар для функции React.createElement(component, props, ...children). За правильный парсинг и дальнейшую обработку отвечает babel",
			},
			{
				id: 16,
				text: "Что такое батчинг ререндеров?",
				answer: "Батчингом в React называют процесс группировки нескольких вызовов обновления состояния в один этап ререндера. Это положительно сказывается на производительности.",
			},
			{
				id: 17,
				text: "Что такое React.Suspense?",
				answer: "Suspense предназначен для отображения запасного интерфейса (спиннера) во время ожидания дочерних компонентов. Дочерние компоненты в это время могут выполнять асинхронные вызовы API, либо загружаться через lazy load. ",
			},
			{
				id: 18,
				text: "Что такое React.StrictMode?",
				answer: "StrictMode — инструмент для обнаружения потенциальных проблем в приложении. Так же как и Fragment, StrictMode не рендерит видимого UI. Строгий режим активирует дополнительные проверки и предупреждения для своих потомков.Примечание: Проверки строгого режима работают только в режиме разработки; они не оказывают никакого эффекта в продакшен-сборке. Строгий режим может быть включён для любой части приложения.\nНа данный момент StrictMode помогает в:\n- обнаружении небезопасных методов жизненного цикла\n- предупреждении об использовании устаревшего API строковых реф\n- предупреждении об использовании устаревшего метода findDOMNode\n- обнаружении неожиданных побочных эффектов\n- обнаружении устаревшего API контекста\n- обеспечение переиспользуемости состояния",
			},
			{
				id: 19,
				text: "Что такое React.Fragment?",
				answer: "React.Fragment - это специальный элемент в React, позволяющий возвращать группу элементов без дополнительного родительского DOM элемента",
			},
			{
				id: 20,
				text: "setState синхронный или асинхронный?",
				answer: "setState - асинхронный, благодаря чему React может оптимизировать процесс изменения состояния и объединить несколько вызовов setState в один, чтобы отразить все изменения в одной перерисовке вместо нескольких.",
			},
			{
				id: 21,
				text: "В чем разница memo и useMemo?",
				answer: "memo — это компонент высшего порядка, предоставляемый React.\nОн нужен для повышения производительности и подходит для случаев, когда компонент рендерит одинаковый результат при одних и тех же значениях пропсов. В этом случае результат будет мемоизирован. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.\nПри использовании memo пропсы по умолчанию сравниваются поверхностно. Можно передать свою функцию сравнения в качестве второго аргумента (если нужно контролировать сравнение).\nuseMemo - это хук, который возвращает мемоизированное значение функции, делающей вычисления. Эта оптимизация помогает избежать дорогостоящих вычислений при каждом рендере. useMemo будет повторно вычислять мемоизированное значение только тогда, когда значение какой-либо из зависимостей изменится.",
			},
			{
				id: 22,
				text: " Что такое reducer?",
				answer: "reducer - это функция-преобразователь, принимающая на вход текущее состояние и идентификатор действия, которое необходимо совершить над этим состоянием.\nИными словами, reducer возвращает модифицированную требуемым образом версию переданного ему состояния.\nПараметром, идентифицирующим действие, обычно выступает объект с полями type (название команды для изменения состояния) и payload (полезная нагрузка - данные, необходимые для модификации).\nЭта простая концепция лежит в основе большой части программных решений в рамках React.js для управления состоянием. Она может быть реализована как с использованием хука useReducer, экспортируемого из React, так и в рамках, к примеру, Redux, где она является более развитой.",
			},
			{
				id: 23,
				text: "Как тестировать React-приложение?",
				answer: "- Использовать фреймворк для тестирования, такой как Jest, для запуска и организации тестов.\n- Использовать библиотеку для моков, такую как Sinon.js, для мокирования зависимостей в тестах.\n- Написать модульные тесты для отдельных компонентов, чтобы убедиться, что они работают правильно изолированно.\n- Написать интеграционные тесты, чтобы проверить взаимодействие между компонентами.\n- Использовать snapshot-тестирование, чтобы гарантировать результат отрисовки компонента.\n- Использовать разработку через тестирование (TDD) для написания тестов перед реализацией функций.\n- Написать e2e тесты для тестирования приложения в целом, имитируя взаимодействие пользователя в реальном браузере.",
			},
			{
				id: 24,
				text: "Как оптимизировать React-приложение?",
				answer: "- избавиться от причин лишних ререндеров\n- вынести тяжелые вычисления в отдельный поток (Web Workers)\n- использовать useMemo, useCallback, React.memo для мемоизации вычислений\n- избавиться от утечек памяти\n- использовать атрибут key в списках\n- кэшировать негорячие вычисления\n- кэшировать ответы запросов сервера на N минут/секунд (применимо не всегда)",
			},
			{
				id: 25,
				text: "Что такое refs в React?",
				answer: "Рефы дают возможность получить доступ к DOM-узлам, к которым они привязаны. Ситуации, в которых использование рефов является оправданным:\n- Управление фокусом\n- Выделение текста\n- Вызов scrollTo\n- Вызов анимаций\n- Интеграция со сторонними DOM-библиотеками\n- Другие случаи\nВ рефах можно хранить любое значение, а не обязательно ссылку на элемент. Изменение поля ref.current не приводит к реренденру компонента.",
			},
		],
	],
	[
		"web",
		[
			{
				id: 1,
				text: "TCP и UDP",
				answer: "TCP – транспортный протокол передачи данных в сетях TCP/IP, предварительно устанавливающий соединение с сетью.\nUDP – транспортный протокол, передающий сообщения-датаграммы без необходимости установки соединения в IP-сети.\nРазница между протоколами TCP и UDP – в так называемой 'гарантии доставки'. TCP требует отклика от клиента, которому доставлен пакет данных, подтверждения доставки, и для этого ему необходимо установленное заранее соединение. Также протокол TCP считается надежным, тогда как UDP получил даже именование “протокол ненадежных датаграмм. TCP исключает потери данных, дублирование и перемешивание пакетов, задержки. UDP все это допускает, и соединение для работы ему не требуется. Процессы, которым данные передаются по UDP, должны обходиться полученным, даже и с потерями. TCP контролирует загруженность соединения, UDP не контролирует ничего, кроме целостности полученных датаграмм.",
			},
			{
				id: 2,
				text: "HTTP и HTTPS",
				answer: "HTTP (от англ. HyperText Transfer Protocol — протокол передачи гипертекста) — это прикладной протокол передачи данных в сети. На текущий момент используется для получения информации с веб-сайтов. Протокол HTTP основан на использовании технологии «клиент-сервер»: клиент, отправляющий запрос, является инициатором соединения; сервер, получающий запрос, выполняет его и отправляет клиенту результат.\nHTTPS (от англ. HyperText Transfer Protocol Secure — безопасный протокол передачи гипертекста) — это расширение протокола HTTP, поддерживающее шифрование посредством криптографических протоколов SSL и TLS.\nЧем отличаются HTTP и HTTPS:\n- HTTPS не является отдельным протоколом передачи данных, а представляет собой расширение протокола HTTP с надстройкой шифрования;\n- передаваемые по протоколу HTTP данные не защищены, HTTPS обеспечивает конфиденциальность информации путем ее шифрования;\n- HTTP использует порт 80, HTTPS — порт 443.",
			},
			{
				id: 3,
				text: "HTTP-запросы",
				answer: "HTTP определяет множество методов запроса, которые указывают, какое желаемое действие выполнится для данного ресурса. Несмотря на то, что их названия могут быть существительными, эти методы запроса иногда называются HTTP глаголами. Каждый реализует свою семантику, но каждая группа команд разделяет общие свойства: так, методы могут быть безопасными, идемпотентными или кешируемыми.\nGET запрашивает представление ресурса. Запросы с использованием этого метода могут только получать данные.\nHEAD запрашивает ресурс так же, как и метод GET, но без тела ответа.\nPOST используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то сайд-эффекты на сервере.\nPUT заменяет все текущие представления ресурса данными запроса.\nDELETE удаляет указанный ресурс.\nCONNECT устанавливает 'туннель' к серверу, определённому по ресурсу.\nOPTIONS используется для описания параметров соединения с ресурсом.\nTRACE выполняет вызов возвращаемого тестового сообщения с ресурса.\nPATCH используется для частичного изменения ресурса",
			},
			{
				id: 4,
				text: "HTTP/1.1 и HTTP/2",
				answer: "В отличие от HTTP/1.1, в котором все запросы и ответы хранятся в простом текстовом формате, HTTP/2 использует двоичный уровень кадрирования для инкапсуляции всех сообщений в двоичном формате, при этом сохраняя семантику HTTP (методы, заголовки). \nAPI прикладного уровня по-прежнему создает сообщения в обычных форматах HTTP, но нижележащий уровень преобразовывает эти сообщения в двоичные. Благодаря этому веб-приложения, созданные до HTTP/2, могут продолжать работать как обычно при взаимодействии с новым протоколом.\nПреобразование сообщений в двоичные позволяет HTTP/2 применять новые подходы к доставке данных, недоступные в HTTP/1.1.",
			},
			{
				id: 5,
				text: "SSL и TLS",
				answer: "SSL (secure sockets layer — уровень защищённых cокетов) представляет собой криптографический протокол для безопасной связи. С версии 3.0 SSL заменили на TLS (transport layer security — безопасность транспортного уровня), но название предыдущей версии прижилось, поэтому сегодня под SSL чаще всего подразумевают TLS.\nЦель протокола — обеспечить защищенную передачу данных. При этом для аутентификации используются асимметричные алгоритмы шифрования (пара открытый — закрытый ключ), а для сохранения конфиденциальности — симметричные (секретный ключ). Первый тип шифрования более ресурсоемкий, поэтому его комбинация с симметричным алгоритмом помогает сохранить высокую скорость обработки данных.",
			},
			{
				id: 6,
				text: "Трёхстороннее рукопожатие",
				answer: "Трехстороннее рукопожатие (Triple Handshake) — это проблема безопасности в компьютерных сетях, которая возникает при использовании SSL/TLS-соединений.\nВ процессе установки безопасного соединения SSL/TLS между клиентом и сервером происходит обмен сообщениями, который состоит из трех шагов (трехстороннее рукопожатие):\nКлиент отправляет серверу сообщение SYN с произвольным начальным номером (seq).\nСервер отправляет клиенту сообщение SYN-ACK, подтверждающее получение сообщения SYN и содержащее свой собственный произвольный начальный номер (seq) и номер последовательности подтверждения (ack), который равен начальному номеру клиента +1.\nКлиент отправляет серверу сообщение ACK с номером подтверждения, который равен начальному номеру сервера +1.\nПроблема Triple Handshake возникает, когда злоумышленник нарушает правильный порядок шагов рукопожатия, вставляя свой сервер между клиентом и настоящим сервером. В этом случае злоумышленник может получить доступ к конфиденциальной информации, передаваемой между клиентом и сервером.\nЧтобы избежать проблемы Triple Handshake, необходимо использовать проверенные и безопасные протоколы SSL/TLS и устанавливать соединение только с доверенными серверами.",
			},
			{
				id: 7,
				text: "Cookie",
				answer: "Cookie — это небольшие служебные файлы, которые хранятся на компьютере пользователя.\nОни содержат данные, относящиеся к пользователю, его предпочтениям и действиям наконкретном сайте: данные для авторизации (логин и пароль), индивидуальные настройки, посещенные страницы, совершенные действия, товары в корзине, дата и время посещения и т.д. \nКогда пользователь повторно заходит на сайт, браузер отправляет cookie на сервер, чтобы рассказать сайту о предыдущих активностях пользователя. Cookie обладают определенным сроком жизни, по истечении которого они удаляются.",
			},
			{
				id: 8,
				text: "CORS",
				answer: "Cross-Origin Resource Sharing (CORS) — это контролируемый и применяемый в принудительном порядке клиентом (браузером) механизм обеспечения безопасности на основе HTTP. Он позволяет службе (API) указывать любой источник (origin) помимо себя, с которого клиент может запрашивать ресурсы.\nЕсли говорить проще, включение CORS на бэкенде позволит выполнять к нему HTTP-запросы не только с того же домена, к которому он привязан, но и с других. Каких именно - зависит от конкретной конфигурации, которую определяет сам разработчик.",
			},
			{
				id: 9,
				text: "WebSocket",
				answer: "Спецификация WebSocket определяет API для установки соединения между веб-браузером и сервером, основанного на «сокете». Проще говоря, это — постоянное соединение между клиентом и сервером, пользуясь которыми клиент и сервер могут отправлять данные друг другу в любое время.\nКлиент устанавливает соединение, выполняя процесс так называемого рукопожатия. Этот процесс начинается с того, что клиент отправляет серверу обычный HTTP-запрос. В этот запрос включается заголовок Upgrade, который сообщает серверу о том, что клиент желает установить WebSocket-соединение.",
			},
			{
				id: 10,
				text: "WebRTC",
				answer: "WebRTC (Web Real Time Communications) — это стандарт, который описывает передачу потоковых аудиоданных, видеоданных и контента между браузерами (без установки плагинов или иных расширений) или другими поддерживающими его приложениями в режиме реального времени. Сервер при этом не нужен.",
			},
			{
				id: 11,
				text: "NAT",
				answer: "NAT - механизм преобразования сетевых адресов.\nСети обычно проектируются с использованием частных IP адресов. Это адреса 10.0.0.0/8, 172.16.0.0/12 и 192.168.0.0/16. Эти частные адреса используются внутри организации или площадки, чтобы позволить устройствам общаться локально, и они не маршрутизируются в интернете. Чтобы позволить устройству с приватным IPv4-адресом обращаться к устройствам и ресурсам за пределами локальной сети, приватный адрес сначала должен быть переведен на общедоступный публичный адрес.\nИ вот как раз NAT переводит приватные адреса, в общедоступные. Это позволяет устройству с частным адресом IPv4 обращаться к ресурсам за пределами его частной сети. NAT в сочетании с частными адресами IPv4 оказался полезным методом сохранения общедоступных IPv4-адресов. Один общедоступный IPv4-адрес может быть использован сотнями, даже тысячами устройств, каждый из которых имеет частный IPv4-адрес. NAT имеет дополнительное преимущество, заключающееся в добавлении степени конфиденциальности и безопасности в сеть, поскольку он скрывает внутренние IPv4-адреса из внешних сетей",
			},
		],
	],
]);
