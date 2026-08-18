import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import registry from "../src/registry";

const app = new Hono().basePath("/");

app.use("*", cors({ origin: "*" }));
app.use(prettyJSON());
app.route("/", registry);

app.get("/", (c) => c.json({ message: "DailyHot API is running on Vercel" }));

export const config = { runtime: "edge" };
export default handle(app);
