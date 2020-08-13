

import mongoose from 'mongoose'
import dbConfig from './config'

mongoose.set('useCreateIndex', true);
mongoose.connect(dbConfig.dbs, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));