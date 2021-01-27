const DOGS = require("./dogs.json");
const USERS = require("./users.json");

const Koa = require("koa");

const app = new Koa();

const cors = require("@koa/cors");
app.use(
  cors({
    origin: "*",
    allowHeaders: "X-Requested-With, Content-Type, Origin",
    credentials: true,
  })
); //разрешаем любому фронтенду достучаться до бэка

const logger = require("koa-logger");
app.use(logger());

const bodyparser = require("koa-bodyparser");
app.use(bodyparser());

const Router = require("koa-router");
const router = new Router();

router.get("/Pets", async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = DOGS;
  } catch (err) {}
});

router.post("/add-to-favourites", async (ctx) => {
  const { dogId, userId } = ctx.request.body;
  PEOPLE;
});

router.post("/sign-in", async (ctx) => {
  const { typedPhone } = ctx.request.body;
  console.log(typedPhone);

  const user = USERS.find((item) => item.phone === typedPhone);
  ctx.body = user;
});

// router.post("/login", (ctx) => {
//   try {
//     //1) Получить имейл и пароль из запроса
//     const { email, password } = ctx.request.body;
//     console.log(email, password);
//     //2) По имейлоу найти человека в бд
//     const user = PEOPLE.find((item) => {
//       return item.email === email;
//     });

//     if (!user) {
//       throw new Error("Такого пользователя не существует");
//     }
//     //3) Сравнить пароли
//     if (user.password !== password) {
//       throw new Error("Пароль неверный");
//     }

//     ctx.body = user;
//   } catch (err) {
//     ctx.status = 400;
//     ctx.body = err.message;
//   }
// });

app.use(router.routes()); //применяет роуты к серверу, сервер вилит  и вызывает ф-ции. app.use добавляет обработчик ко вход запросу

// app.use((ctx) => {
//   console.log("Hello");
//   ctx.body = DOGS;
// });

app.listen(3001, () => {
  console.log("server started on port 3001");
});
