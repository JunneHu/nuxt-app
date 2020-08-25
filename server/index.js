import Koa from 'koa'
const { Nuxt, Builder } = require('nuxt')
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import dbConfig from './dbs'
import mongoose from 'mongoose'
import users from './interface/users'
import banner from './interface/banner'

const app = new Koa()

app.use(bodyParser({
    extendTypes: ['json', 'form', 'text']
}))

app.use(json())

mongoose.connect(dbConfig.dbUrl, {
    useNewUrlParser: true
})

let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.options.server
    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }
    app.use(users.routes()).use(users.allowedMethods())
    app.use(banner.routes()).use(banner.allowedMethods())

    app.use(ctx => {
        ctx.status = 200 // koa defaults to 404 when it sees that status is unset

        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve)
            ctx.res.on('finish', resolve)
            nuxt.render(ctx.req, ctx.res, promise => {
                // nuxt.render passes a rejected promise into callback on error.
                promise.then(resolve).catch(reject)
            })
        })
    })

    app.listen(port, host)
    consola.ready({ message: `Server listening on http://${host}:${port}`, badge: true })
}

start()