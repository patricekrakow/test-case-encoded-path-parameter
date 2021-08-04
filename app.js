const express = require('express')

const hostname = '0.0.0.0'
const port = 3000

const app = express()

app.get('/thingies/:thingyId', (req, res) => {
  /*
  I cannot really explain why parentheses MUST be prefixed by TWO backslashes,
  while simple quotes MUST be prefixed by ONE backslash :-|
  */
  const thingyId = req.params.thingyId
  console.log(`thingyId = ${thingyId}`)
  res.status(200).json({
    thingyId: thingyId
  })
})

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`)
})

/*
$ curl localhost:3000/thingies
404
$ curl localhost:3000/thingies/
404
$ curl localhost:3000/thingies/a
{"thingyId":"a"}
$ curl localhost:3000/thingies/a/b
404
$ curl localhost:3000/thingies/a%2Fb
{"thingyId":"a/b"}
$ curl localhost:3000/thingies/a%2fb
{"thingyId":"a/b"}
*/