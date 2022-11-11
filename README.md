# Basket

<p align="center">
    <img width="230" src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/bbd3a271eaabccd429c696bd937c4a52b8b5136b/assets/Basket/3D/basket_3d.png" alt="basket emoji">
</p>

A [fly](https://fly.io/) apps powered database as a service. It currently supports over 4 databases - redis, mongo, mysql and postgres.

## Adding a new database

- Add database type in `backend/prisma/schema.prisma`

```js
enum StoreType {
    REDIS
}
```

- Add database configs in `backend/src/provider.ts`

```json
[
  "REDIS",
  {
    "image": "registry.wyzl.io/basket/redis:7",
    "password_var": "REDIS_PASSWORD",
    "port": 6379,
    "data": "/data",
    "protocol": "redis",
    "username": "default",
    "dbName": ""
  }
]
```
