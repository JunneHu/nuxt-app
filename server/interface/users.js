import Router from 'koa-router';

let router = new Router({prefix: '/users'})

router.get('/getUser', async (ctx) => {
    ctx.body = '成功'  
})
export default router
