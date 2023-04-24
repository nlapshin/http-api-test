import supertest from "supertest";
import config from '../config';

// Набор тестов, использую jest + supertest, сайт try.vikunja.io. Тесты работают

// 1. Хочется вынести урлы в одно место.
// 2. Прописать функцию авторизации.

// У нас есть базовый URL, куда шлем запросы. https://try.vikunja.io
// Разные среды запуска: prod, staging, dev, qa стенды и т.д.
// Под разные среды свой базовый URL

// 1 шаг вынести в отдельную переменную
// 2 шаг вынести в конфиг.
// 3 шаг* сделать эту переменную динамической
// Есть такая штука, как переменные окружения. environment.
// Когда мы запускаем тесты или просто скрипты
// Окружение запуска тестов будет разное(prod, staging, dev, qa стенды и т.д.)
// Это окружение можно настраивать и для переменные(параметры) окружения

// process.env

// console.log(process.env); // NODE_ENV: 'test',
// console.log(process.env.BASE_URL);

const username = 'demo';
const password = 'demo';

async function login(payload) {
  const res = await supertest(config.baseURL)
        .post('/api/v1/login')
        .set('Accept', 'application/json')
        .send({})

  return res;
}

describe('user', () => {
  describe('POST /api/v1/login', () => {
    test('Метод должен существовать', async () => {
      const res = await login({})

      expect(res.status).not.toEqual(404);
    })

    test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
      const res = await login({ username, password })

      expect(res.status).toEqual(200);
      expect(typeof res.body.token).toEqual('string');
    })

    test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
      const res = await login({ username: 'demo1', password })

      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011);
    })

    test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
      const res = await login({ username, password: 'demo1' })

      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011);
    })
  })
})
