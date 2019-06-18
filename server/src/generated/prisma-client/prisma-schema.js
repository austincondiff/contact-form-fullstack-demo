module.exports = {
        typeDefs: /* GraphQL */ `type AggregateContactEntry {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ContactEntry {
  id: ID!
  name: String!
  phone: String!
  email: String!
  message: String!
}

type ContactEntryConnection {
  pageInfo: PageInfo!
  edges: [ContactEntryEdge]!
  aggregate: AggregateContactEntry!
}

input ContactEntryCreateInput {
  name: String!
  phone: String!
  email: String!
  message: String!
}

type ContactEntryEdge {
  node: ContactEntry!
  cursor: String!
}

enum ContactEntryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  message_ASC
  message_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContactEntryPreviousValues {
  id: ID!
  name: String!
  phone: String!
  email: String!
  message: String!
}

type ContactEntrySubscriptionPayload {
  mutation: MutationType!
  node: ContactEntry
  updatedFields: [String!]
  previousValues: ContactEntryPreviousValues
}

input ContactEntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactEntryWhereInput
  AND: [ContactEntrySubscriptionWhereInput!]
  OR: [ContactEntrySubscriptionWhereInput!]
  NOT: [ContactEntrySubscriptionWhereInput!]
}

input ContactEntryUpdateInput {
  name: String
  phone: String
  email: String
  message: String
}

input ContactEntryUpdateManyMutationInput {
  name: String
  phone: String
  email: String
  message: String
}

input ContactEntryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  AND: [ContactEntryWhereInput!]
  OR: [ContactEntryWhereInput!]
  NOT: [ContactEntryWhereInput!]
}

input ContactEntryWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createContactEntry(data: ContactEntryCreateInput!): ContactEntry!
  updateContactEntry(data: ContactEntryUpdateInput!, where: ContactEntryWhereUniqueInput!): ContactEntry
  updateManyContactEntries(data: ContactEntryUpdateManyMutationInput!, where: ContactEntryWhereInput): BatchPayload!
  upsertContactEntry(where: ContactEntryWhereUniqueInput!, create: ContactEntryCreateInput!, update: ContactEntryUpdateInput!): ContactEntry!
  deleteContactEntry(where: ContactEntryWhereUniqueInput!): ContactEntry
  deleteManyContactEntries(where: ContactEntryWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  contactEntry(where: ContactEntryWhereUniqueInput!): ContactEntry
  contactEntries(where: ContactEntryWhereInput, orderBy: ContactEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactEntry]!
  contactEntriesConnection(where: ContactEntryWhereInput, orderBy: ContactEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactEntryConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  node(id: ID!): Node
}

type Subscription {
  contactEntry(where: ContactEntrySubscriptionWhereInput): ContactEntrySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
}
`
      }
    