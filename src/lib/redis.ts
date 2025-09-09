import { createClient } from "redis"

const client = await createClient({
    url: process.env.REDIS_URL,
}).connect()