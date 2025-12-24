 import type { FastifyInstance } from "fastify" 

export async function authRoutes(app: FastifyInstance) {
   app.get("/auth", async () => {
    return { pong: true }
  })
}
