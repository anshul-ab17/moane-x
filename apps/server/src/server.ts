import Fastify from "fastify"
import {v1Routes} from "./routes/v1/index.js"

export async function buildServer() {
  const app = Fastify({
    logger: true
  })

  app.get("/health", async () => ({
    status: "ok",
    uptime: process.uptime()
  }))

  // v1 
  await app.register(v1Routes, { prefix: "/api/v1" })

  return app
}
