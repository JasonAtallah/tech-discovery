# Prisma vs Drizzle

> Tested with PlanetScale (MySQL)

# Setup

### Prisma

The Prisma setup was relatively simple.

1. Install the `prisma` dev dependency and the `@prisma/client` dependency
2. Define the [Prisma Schema](./nx//packages/prisma/src/schema.prisma)
3. Push changes to db with `npx prisma db push`

### Drizzle
