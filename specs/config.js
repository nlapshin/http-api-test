// let baseUrl = process.env.BASE_URL;

// if (!baseUrl) {
//   baseUrl = 'https://try.vikunja.io'
// }

export default {
  baseURL: process.env.BASE_URL || 'https://try.vikunja.io'
}

// || - это знак логического ИЛИ
// process.env.BASE_URL || 'https://try.vikunja.io'
// Если process.env.BASE_URL существует, то он его использует
// Если не существует, то использует 'https://try.vikunja.io'

const a = false;
const b = false;

// Что будет в консоле?
console.log(a || b); // false

/*
false || false => false
true || false => true // То что справа проверять не нужно.
false || true => true
true || true => true // То что справа проверять не нужно.
*/
