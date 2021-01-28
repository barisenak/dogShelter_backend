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
  user
    ? (ctx.body = user)
    : (ctx.body = "Номер телефона не введен или введен неверно!");
  console.log(ctx.body);
});

app.use(router.routes()); //применяет роуты к серверу, сервер вилит  и вызывает ф-ции. app.use добавляет обработчик ко вход запросу

app.listen(3001, () => {
  console.log("server started on port 3001");
});
