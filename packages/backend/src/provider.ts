// Add provider type in schema.prisma

export const providers = new Map([
  [
    "REDIS",
    {
      image: "ghcr.io/substore/redis:7",
      password_var: "REDIS_PASSWORD",
      port: 6379,
      data: "/data",
      protocol: "redis",
      username: "default",
      dbName: "",
    },
  ],
  [
    "POSTGRESQL",
    {
      image: "registry.wyzl.io/basket/postgres:15",
      password_var: "POSTGRES_PASSWORD",
      port: 5432,
      data: "/var/lib/postgresql/data",
      protocol: "redis",
      username: "default",
      dbName: "basket",
    },
  ],
  [
    "MYSQL",
    {
      image: "registry.wyzl.io/basket/mysql:8",
      password_var: "MYSQL_ROOT_PASSWORD",
      port: 3306,
      data: "/var/lib/mysql",
      protocol: "mysql",
      username: "root",
      dbName: "basket",
    },
  ],
  [
    "MONGO",
    {
      image: "registry.wyzl.io/basket/mongo:4.4",
      password_var: "MONGO_INITDB_ROOT_PASSWORD",
      port: 27017,
      data: "/data/db",
      protocol: "mongo",
      username: "mongodb",
      dbName: "",
    },
  ],
]);
