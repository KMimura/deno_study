import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const app = new Application();
const router = new Router();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

router.get('/ping', (ctx: RouterContext) => {
  ctx.response.body = "pong\n";
})

router.get('/random_num', (ctx: RouterContext) => {
  console.log(ctx)
  const rand = Math.random()
  ctx.response.body = rand
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
