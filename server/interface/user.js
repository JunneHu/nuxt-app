import Router from 'koa-router';

let router = new Router({ prefix: '/user' })

router.get('/getUserInfo', async (ctx) => {
    ctx.body = {
        data:{
            userName:'Junney'
        },
        code: '0',
        message:'成功'
    }
})

export default router