import Router from 'koa-router'
import Banner from '../dbs/models/banner'
import axios from './utils/axios'

let router = new Router({ prefix: '/banner' })

router.post('/add', async (ctx) => {
    const { img,
        name,
        page,
        position,
        linkType,
        linkUrl,
        productId,
        sort,
        status } = ctx.request.body;
    if (img) {
        let list = await Banner.findOne({ name })
        if (list) {
            return ctx.body = {
                code: -1,
                msg: '名称不能重复'
            }
        }
        try {
            var banner = new Banner({
                img,
                name,
                page,
                position,
                linkType,
                linkUrl,
                productId,
                sort,
                status
            })
            banner.save()
            return ctx.body = {
                code: 0,
                msg: '新增成功'
            }
        } catch (err) {
            return ctx.body = {
                code: -1,
                msg: '新增失败'
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

router.get('/getList', async (ctx) => {
    const { pageIndex, pageSize } = ctx.request.query;
    const list = await Banner.find({
        limit: parseInt(pageSize),
        skip: parseInt(pageIndex - 1) * parseInt(pageSize),
    }).sort({ sort: -1 });
    let total = 0
    Banner.count(function (err, res) {
        total = res;
    })
    return ctx.body = {
        data: {
            list,
            pageIndex: parseInt(pageIndex),
            pageSize: 10,
            total,
            totalPage: total ? Math.ceil(total / pageSize) : 0,
        },
        code: 0,
        msg: '成功'
    }
})
export default router
