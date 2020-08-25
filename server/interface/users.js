import Router from 'koa-router'
import User from '../dbs/models/users'
import axios from './utils/axios'
import md5 from 'crypto-js/md5'

let router = new Router({ prefix: '/users' })

router.post('/signup', async (ctx) => {
    const { username, password } = ctx.request.body;
    if (username && password) {
        ctx.response.status = 200;
        let user = await User.find({ username })
        if (user.length) {
            return ctx.body = {
                code: -1,
                msg: '已被注册'
            }
        }
        let nuser = await User.create({ username, password: md5(password).toString() })
        if (nuser) {
            let res = await axios.post('/users/signin', { username, password })
            if (res.data && res.data.code === 0) {
                return ctx.body = {
                    code: 0,
                    msg: '注册成功',
                    data: res.data.user
                }
            } else {
                return ctx.body = {
                    code: -1,
                    msg: 'error'
                }
            }
        } else {
            return ctx.body = {
                code: -1,
                msg: '注册失败'
            }
        }
    } else {
        ctx.response.status = 200;
        ctx.body = {
            code: '-2',
            message: "参数不全"
        }
    }
})

router.post('/signin', async (ctx) => {
    const { username, password } = ctx.request.body;
    let user = await User.findOne({ username })
    if (!user) {
        return ctx.body = {
            code: -1,
            msg: '用户不存在'
        }
    }
    if (username === user.username && md5(password).toString() === user.password) {
        return ctx.body = {
            code: 0,
            data: {
                username: user.username
            },
            msg: '登陆成功'
        }
    } else {
        return ctx.body = {
            code: -1,
            message: '用户名或密码错误'
        }
    }
})
export default router
