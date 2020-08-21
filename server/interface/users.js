import Router from 'koa-router';

let router = new Router({prefix: '/users'})

router.post('/signup', async (ctx) => {
    ctx.body = '成功'  
})
export default router
