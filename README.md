# eshow

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


后台管理
登录：login (默认账号administrator 123456)
退出 exit
设置：
    基础信息设置：settingInfo
    新增子账号：register
    修改密码：updatePwd
会员管理:
    用户管理：增/删/改/查 add/delete/edit/getList
        昵称 username
        手机号 mobile
        密码 password
        上次登录时间 lastLoginTime
商城管理：
    我的商城：增/删/改/查 add/delete/edit/getList
        站点类型  siteType(1 移动端 2 pc端 3 支付宝小程序 4 微信小程序 5 qq 小程序 6 360小程序)
        页面标题 title
        关键字  keywords
        售后   mobile
广告管理：增/删/改/查 add/delete/edit/getList
    名称 title
    站点  site （选择我的商城创建的站点）
    位置  page(页面)  position（位置）
    图片  img
    跳转类型 linkType  // 0 不跳转 1、商品 2、链接
    跳转地址 linkUrl
    内部商品 productId
    排序 sort
    状态 status
商品管理：
    商品列表：增/删/改/查 add/delete/edit/getList
        主标题  mainTitle
        副标题 subTitle
        图片 img
        面值 faceValue
        售价 price
        描述 desc
        角标 tips
        状态 status
        排序  sort
        所属分类id classId   
    分类管理：增/删/改/查 add/delete/edit/getList
        名称 name
        图片 img
        排序 sort
        状态 status
订单管理：getList
利润统计： getList

用户侧
注册
登录
退出
首页 （banner 、所有分类和商品）
商品详情
订单详情
订单列表

