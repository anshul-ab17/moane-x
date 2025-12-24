import type { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.get("/ping", async () => {
    return { pong: true }
  })
}
