// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  contactEntry: (where?: ContactEntryWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  contactEntry: (where: ContactEntryWhereUniqueInput) => ContactEntryPromise;
  contactEntries: (
    args?: {
      where?: ContactEntryWhereInput;
      orderBy?: ContactEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ContactEntry>;
  contactEntriesConnection: (
    args?: {
      where?: ContactEntryWhereInput;
      orderBy?: ContactEntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ContactEntryConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostPromise;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Post>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createContactEntry: (data: ContactEntryCreateInput) => ContactEntryPromise;
  updateContactEntry: (
    args: { data: ContactEntryUpdateInput; where: ContactEntryWhereUniqueInput }
  ) => ContactEntryPromise;
  updateManyContactEntries: (
    args: {
      data: ContactEntryUpdateManyMutationInput;
      where?: ContactEntryWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertContactEntry: (
    args: {
      where: ContactEntryWhereUniqueInput;
      create: ContactEntryCreateInput;
      update: ContactEntryUpdateInput;
    }
  ) => ContactEntryPromise;
  deleteContactEntry: (
    where: ContactEntryWhereUniqueInput
  ) => ContactEntryPromise;
  deleteManyContactEntries: (
    where?: ContactEntryWhereInput
  ) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => PostPromise;
  updateManyPosts: (
    args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }
  ) => BatchPayloadPromise;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  contactEntry: (
    where?: ContactEntrySubscriptionWhereInput
  ) => ContactEntrySubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ContactEntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "email_ASC"
  | "email_DESC"
  | "message_ASC"
  | "message_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ContactEntryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ContactEntryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  message?: String;
  message_not?: String;
  message_in?: String[] | String;
  message_not_in?: String[] | String;
  message_lt?: String;
  message_lte?: String;
  message_gt?: String;
  message_gte?: String;
  message_contains?: String;
  message_not_contains?: String;
  message_starts_with?: String;
  message_not_starts_with?: String;
  message_ends_with?: String;
  message_not_ends_with?: String;
  AND?: ContactEntryWhereInput[] | ContactEntryWhereInput;
  OR?: ContactEntryWhereInput[] | ContactEntryWhereInput;
  NOT?: ContactEntryWhereInput[] | ContactEntryWhereInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  published?: Boolean;
  published_not?: Boolean;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface ContactEntryCreateInput {
  name: String;
  phone: String;
  email: String;
  message: String;
}

export interface ContactEntryUpdateInput {
  name?: String;
  phone?: String;
  email?: String;
  message?: String;
}

export interface ContactEntryUpdateManyMutationInput {
  name?: String;
  phone?: String;
  email?: String;
  message?: String;
}

export interface PostCreateInput {
  published?: Boolean;
  title: String;
  content: String;
}

export interface PostUpdateInput {
  published?: Boolean;
  title?: String;
  content?: String;
}

export interface PostUpdateManyMutationInput {
  published?: Boolean;
  title?: String;
  content?: String;
}

export interface ContactEntrySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ContactEntryWhereInput;
  AND?:
    | ContactEntrySubscriptionWhereInput[]
    | ContactEntrySubscriptionWhereInput;
  OR?:
    | ContactEntrySubscriptionWhereInput[]
    | ContactEntrySubscriptionWhereInput;
  NOT?:
    | ContactEntrySubscriptionWhereInput[]
    | ContactEntrySubscriptionWhereInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ContactEntry {
  id: ID_Output;
  name: String;
  phone: String;
  email: String;
  message: String;
}

export interface ContactEntryPromise
  extends Promise<ContactEntry>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<String>;
  email: () => Promise<String>;
  message: () => Promise<String>;
}

export interface ContactEntrySubscription
  extends Promise<AsyncIterator<ContactEntry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
}

export interface ContactEntryConnection {}

export interface ContactEntryConnectionPromise
  extends Promise<ContactEntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ContactEntryEdge>>() => T;
  aggregate: <T = AggregateContactEntryPromise>() => T;
}

export interface ContactEntryConnectionSubscription
  extends Promise<AsyncIterator<ContactEntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ContactEntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateContactEntrySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ContactEntryEdge {
  cursor: String;
}

export interface ContactEntryEdgePromise
  extends Promise<ContactEntryEdge>,
    Fragmentable {
  node: <T = ContactEntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ContactEntryEdgeSubscription
  extends Promise<AsyncIterator<ContactEntryEdge>>,
    Fragmentable {
  node: <T = ContactEntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateContactEntry {
  count: Int;
}

export interface AggregateContactEntryPromise
  extends Promise<AggregateContactEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateContactEntrySubscription
  extends Promise<AsyncIterator<AggregateContactEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Post {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface PostConnection {}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PostEdge {
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ContactEntrySubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ContactEntrySubscriptionPayloadPromise
  extends Promise<ContactEntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ContactEntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ContactEntryPreviousValuesPromise>() => T;
}

export interface ContactEntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ContactEntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ContactEntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ContactEntryPreviousValuesSubscription>() => T;
}

export interface ContactEntryPreviousValues {
  id: ID_Output;
  name: String;
  phone: String;
  email: String;
  message: String;
}

export interface ContactEntryPreviousValuesPromise
  extends Promise<ContactEntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<String>;
  email: () => Promise<String>;
  message: () => Promise<String>;
}

export interface ContactEntryPreviousValuesSubscription
  extends Promise<AsyncIterator<ContactEntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "ContactEntry",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
