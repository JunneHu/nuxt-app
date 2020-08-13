import Router from 'koa-router';
import User from '../dbs/models/users'

let router = new Router({ prefix: '/user' })

router.post('/signup', async (ctx) => {
    const { username, password } = ctx.request.body;
    let nuser = await User.create({ username, password })
    if (nuser) {
        ctx.body = {
            code: '0',
            message: '成功'
        }
    } else {
        ctx.body = {
            code: '-1',
            message: '失败'
        }
    }
})

router.get('/getUserInfo', async (ctx) => {
    const { username } = ctx.query
    let users = await User.find({ username })
    ctx.body = {
        data: {
            list: users
        },
        code: '0',
        message: '成功'
    }
})

export default router