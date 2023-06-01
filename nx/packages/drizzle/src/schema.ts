import { InferModel } from 'drizzle-orm';
import {
  mysqlTable,
  index,
  varchar,
  uniqueIndex,
  serial,
  boolean,
} from 'drizzle-orm/mysql-core';

export const user = mysqlTable(
  'User',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 191 }).notNull(),
    email: varchar('email', { length: 191 }).notNull(),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex('User_email_idx').on(table.email),
    };
  }
);

export type User = InferModel<typeof user>; // return type when queried
export type NewUser = InferModel<typeof user, 'insert'>; // insert type

export const organization = mysqlTable(
  'Organization',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 191 }).notNull(),
    ownerId: varchar('ownerId', { length: 191 }).notNull(),
  },
  (table) => {
    return {
      ownerIdIndex: index('Organization_ownerId_idx').on(table.ownerId),
    };
  }
);

export type Organization = InferModel<typeof organization>; // return type when queried
export type NewOrganization = InferModel<typeof organization, 'insert'>; // insert type

export const campaign = mysqlTable(
  'Campaign',
  {
    id: serial('id').primaryKey().notNull(),
    organizationId: varchar('organizationId', { length: 191 }).notNull(),
    name: varchar('name', { length: 191 }).notNull(),
    ownerId: varchar('ownerId', { length: 191 }).notNull(),
    active: boolean('active').notNull().default(true),
  },
  (table) => {
    return {
      organizationIdIndex: index('Campaign_organizationId_idx').on(
        table.organizationId
      ),
      ownerIdIndex: index('Campaign_ownerId_idx').on(table.ownerId),
    };
  }
);

export type Campaign = InferModel<typeof campaign>; // return type when queried
export type NewCampaign = InferModel<typeof campaign, 'insert'>; // insert type
