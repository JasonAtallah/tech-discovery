# Prisma vs Drizzle

> Tested with PlanetScale (MySQL)

# Setup

### Prisma

1. Install the `prisma` dev dependency and the `@prisma/client` dependency
2. Define the [Prisma Schema](./nx//packages/prisma/src/schema.prisma)
3. Push changes to db with `npx prisma db push`

### Drizzle

1. Install `drizzle-orm` and `@planetscale/database` dependencies and `drizzle-kit` dev dependency. Drizzle minimizes abstractions by letting you provide a connection with native drivers. Since they support PlanetScale we can use their driver.
2.
