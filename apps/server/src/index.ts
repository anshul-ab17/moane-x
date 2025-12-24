import { buildServer } from "./server.js"

const app = await buildServer()
const PORT = Number(process.env.PORT) || 3000
app.listen({ port: PORT, host: "0.0.0.0" })
