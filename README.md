# Basket

<p align="center">
    <img width="230" src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/bbd3a271eaabccd429c696bd937c4a52b8b5136b/assets/Basket/3D/basket_3d.png" alt="basket emoji">
</p>

Basket is a database as a service powered by [Fly](https://fly.io). It currently supports [Redis](https://redis.io), [MongoDB](https://www.mongodb.com), [MySQL](https://www.mysql.com) and [PostgreSQL](https://www.postgresql.org). It is modular and can be extended to support other databases.

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
