import type { FastifyInstance } from "fastify"
import { signup, signin } from "../../controllers/auth.controller.js"

export async function authRoutes(app: FastifyInstance) {
  app.post("/signup", signup)
  app.post("/login", signin)
}
