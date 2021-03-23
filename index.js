const express = require('express')
const app = express()

app.get('/', (req , res) => {
  res.send('Hey man')
})

app.listen(3000,()=> console.log("i am listening and working please wait....."))
