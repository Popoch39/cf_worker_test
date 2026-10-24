import { Hono } from 'hono'

let data = 0; 
const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.get('/increment', (c) => {

  data = data + 1
  return c.json({
    data: data
  })
})

  



export default app
