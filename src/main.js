 const Koa = require('Koa')

 const {APP_PORT} = require('./config/config.default')
 const app = new Koa()

 app.use((ctx, next) => {
    ctx.body = 'hello world'
 })
 app.listen(3000, ()=>{ 
    console.log(`server is running on http://localhost:${APP_PORT}`)
 }) 