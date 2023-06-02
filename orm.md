# Prisma vs Drizzle

> Tested with Neon (Postgres)

# Setup

> See [package.json](./nx/package.json) for scripts. The commands below use all defaults and won't work in this repo.

### Prisma

1. Install the `prisma` dev dependency and the `@prisma/client` dependency
2. Define the [Prisma Schema](./nx/packages/prisma/src/schema.prisma)
3. Push changes to db with `npx prisma db push`

### Drizzle

1. Install `drizzle-orm` and `@neondatabase/serverless` dependencies and `drizzle-kit`, `postgres` and `tsx` dev dependencies. Drizzle minimizes abstractions by letting you provide a connection with native drivers. Since they support Neon we can use their driver.
2. Define the [Drizzle Schema](./nx/packages/drizzle/src/schema.ts)
3. Generate migrations based off schema `drizzle-kit generate:pg`.
4. Run [migration script](./nx/packages//drizzle/src/migrate.ts).

# Notes

### Drizzle

- 😀 Everything is in TS.
- 😀 Drizzle always only makes one query. This is important if we're using services priced on reads/writes, Prisma will make an unknown amount of queries to satisy all relations.
- 😤 No 'push' for Postgres schema. Have to use migrations. No migration command, have to write custom script.
- 😤 Can't default IDs to `UUID` or `CUID`.
- 😤 Docs are half baked. Some code snippets they have just don't work.
- 😤 Community is very small. Debugging and finding answers will be more tough.

### Prisma

- 😀 Large community support.
- 😀 More mature library.
- 😤 Custom schema file adds code generation step.
- 😤 Slow cold start times (doesn't matter if we're not on the edge).
