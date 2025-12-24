import type { FastifyInstance } from "fastify";
import {appRoutes} from "./app.routes.js" 
import { userRoutes } from "./user.routes.js";
import { authRoutes } from "./auth.routes.js";


export async function v1Routes(app: FastifyInstance) {
    await app.register(appRoutes, { prefix: "/app" })
    await  app.register(userRoutes, { prefix: "/user"})
    await app.register(authRoutes, { prefix: "/auth" })
}
