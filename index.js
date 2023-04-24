// import fetch from 'node-fetch';
// import axios from 'axios';

// HTTP Протокол.
// 1. Что такое HTTP протокол?
// Протокол для клиент-серверного взаимодействия.
// 2. Что такое клиент-сервеное взаимодействие?
// Клиент шлет запрос, сервер шлет ответ.
// 3. Опишите протокол HTTP?
// Вид запроса и вид ответа - это разные вещи.
// Запрос
// Title
// Headers
// Body

// Title: метод/путь/версия. GET /endpoint HTTP 1.1.

// 3.1. Какие есть методы HTTP запроса? POST HEAD PUT DELETE PATCH OPTIONS TRACE
// 3.2. Какие версии есть HTTP протокола? 1.1, 2.0, 3.0 

// Headers
// Мета информация

// Body
// Полезная нагрузка

// Ответ от сервера
// Title
// Headers
// Body

// Title: версия/статус.
// 4.1. Какие статусы ответа вы знаете?
// 2xx - Если всё ОК
// 3xx - Если нужна переадресация
// 4xx - Если ошибка на клиенте
// 5xx - Если ошибка на сервере.

// 200 OK
// 201 Created(для POST запроса)
// 500 Internal server error(сервер недоступен)
// 404 - ресурс не найден.

// ;(async() => {
//   const res = await fetch("https://google.com/not-found");

//   console.log(res.status); // 404 - Not Found
//   // Если пользуетесь fetch, то проверяйте статусы.

//   // const data = await res.text();

//   // console.log(data);

// })();

// ;(async() => {
//   try {
//     const res = await axios("https://google.com/not-found");
//     // Если прилетел статус неверный, то выбрасывается exception
//   } catch(error) {
//     console.log(error.message);
//     console.log('catch error');
//   }

//   // console.log(res.status); // 404 - Not Found
//   // Если пользуетесь fetch, то проверяйте статусы.

//   // const data = await res.text();

//   // console.log(data);

// })();

// const baseRequest = superagent
//   .post('/api/pet')
//   .send({ name: 'Manny', species: 'cat' })

// baseRequest // sends a JSON post body
//   .set('X-API-Key', 'foobar')
//   .set('accept', 'json')
  // .end((err, res) => {
  //   // Calling the end function will send the request
  // });

// superagent - мы собираем цепочки из данных

// supertest('https://try.vikunja.io')
//   .post('/api/v1/login')
//   .set('Accept', 'application/json')
//   .send({ username: 'demo', password: 'demo' })
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });

// const {data} = await got.post('https://httpbin.org/anything', {
// 	json: {
// 		hello: 'world'
// 	}
// }).json();

// 

// console.log('test');


// // url первый аргумент
// // следующий аргумент - это опции.
// fetch("/echo/json/", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({a: 1, b: 2})
// });

// // POST запрос JSON
// // 1. Выставить нужные headers
// // 2. Указать метод.
// // 3. Сделать JSON.strigify нужного объекта

// // По хорошему написать обертку
// myFetch.postJSON("/echo/json/", {a: 1, b: 2})


// const json = JSON.stringify({ answer: 42 });
// const res = await axios.post('https://httpbin.org/post', json, {
//   headers: {
//     // Overwrite Axios's automatically set Content-Type
//     'Content-Type': 'application/json'
//   }
// });

// Мои рекоменадции.
// 1. Для QA хорошо подходит supertest
// 2. Если нужна гибкость, то fetch
// 3. Если нужен fetch с простым интерфейсом, то got или ky
// 4. axios хорошая альтернатива
