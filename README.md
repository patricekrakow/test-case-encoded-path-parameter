# Test Case with Encoded Path Parameter

## Question

Let check how `GET /thingies/a%2fb` is handled with `GET /thingies/{thingyId}` as definition

## Answer

```text
$ curl localhost:3000/thingies/a%2fb
{"thingyId":"a/b"}
```

It is properly read **and decoded** by [Express](https://expressjs.com/) ;-)