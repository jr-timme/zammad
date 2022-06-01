export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** String with binary data, base64 encoded for transport (data: URL prefix is optional) */
  BinaryString: any;
  /** BigInt to identify a form. */
  FormId: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
};

/** Autogenerated return type of Add */
export type AddPayload = {
  __typename?: 'AddPayload';
  /** Errors encountered during execution of the mutation. */
  errors?: Maybe<Array<UserError>>;
  /** Information about the uploaded files. */
  uploadedFiles: Array<UploadedFile>;
};

/** Autogenerated return type of AppMaintenance */
export type AppMaintenancePayload = {
  __typename?: 'AppMaintenancePayload';
  /** Maintenance type, may trigger actions in the front end */
  type?: Maybe<AppMaintenanceType>;
};

/** Possible AppVersion messages */
export enum AppMaintenanceType {
  /** A new version of the app is available. */
  AppVersion = 'app_version',
  /** The app configuration has changed. */
  ConfigChanged = 'config_changed',
  /** App is restarting. */
  RestartAuto = 'restart_auto',
  /** App needs a restart. */
  RestartManual = 'restart_manual'
}

/** Type that represents an autocomplete entry. */
export type AutocompleteEntry = {
  __typename?: 'AutocompleteEntry';
  disabled?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  labelPlaceholder?: Maybe<Array<Scalars['String']>>;
  value: Scalars['String'];
};

/** Autogenerated return type of ConfigUpdates */
export type ConfigUpdatesPayload = {
  __typename?: 'ConfigUpdatesPayload';
  /** Updated setting */
  setting?: Maybe<KeyComplexValue>;
};

/** All available form schemas */
export enum FormSchemaId {
  FormSchemaFormMobileLogin = 'FormSchema__Form__Mobile__Login'
}

/** Groups */
export type Group = Node & {
  __typename?: 'Group';
  active: Scalars['Boolean'];
  assignmentTimeout?: Maybe<Scalars['Int']>;
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  followUpAssignment: Scalars['Boolean'];
  followUpPossible: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Key/value type with complex (JSON) values. */
export type KeyComplexValue = {
  __typename?: 'KeyComplexValue';
  key: Scalars['String'];
  value?: Maybe<Scalars['JSON']>;
};

/** Locales available in the system */
export type Locale = Node & {
  __typename?: 'Locale';
  active: Scalars['Boolean'];
  alias?: Maybe<Scalars['String']>;
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  dir: TextDirection;
  id: Scalars['ID'];
  locale: Scalars['String'];
  name: Scalars['String'];
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** The user login fields. */
export type LoginInput = {
  /** Device fingerprint - a string identifying the device used for the login */
  fingerprint: Scalars['String'];
  /** User name */
  login: Scalars['String'];
  /** Password */
  password: Scalars['String'];
  /** Remember me - Session expire date will be set to one year */
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of Login */
export type LoginPayload = {
  __typename?: 'LoginPayload';
  /** Errors encountered during execution of the mutation. */
  errors?: Maybe<Array<UserError>>;
  /** The current session */
  sessionId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of Logout */
export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  /** Errors encountered during execution of the mutation. */
  errors?: Maybe<Array<UserError>>;
  /** Was the logout successful? */
  success: Scalars['Boolean'];
};

/** All available mutations. */
export type Mutations = {
  __typename?: 'Mutations';
  /** Upload files for a form */
  formUploadCacheAdd?: Maybe<AddPayload>;
  /** Remove uploaded files for a form */
  formUploadCacheRemove?: Maybe<RemovePayload>;
  /** Performs a user login to create a session */
  login?: Maybe<LoginPayload>;
  /** End the current session */
  logout?: Maybe<LogoutPayload>;
};


/** All available mutations. */
export type MutationsFormUploadCacheAddArgs = {
  files: Array<UploadFileInput>;
  formId: Scalars['FormId'];
};


/** All available mutations. */
export type MutationsFormUploadCacheRemoveArgs = {
  fileIds: Array<Scalars['ID']>;
  formId: Scalars['FormId'];
};


/** All available mutations. */
export type MutationsLoginArgs = {
  input: LoginInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** Data of one object attribute value of another object */
export type ObjectAttributeValue = {
  __typename?: 'ObjectAttributeValue';
  /** The object attribute record */
  attribute: ObjectManagerAttribute;
  /** The value of the current object's object attribute */
  value?: Maybe<Scalars['String']>;
};

/** Custom object fields (only editable & active) */
export type ObjectAttributeValueInterface = {
  objectAttributeValues: Array<ObjectAttributeValue>;
};

/** An object manager attribute record */
export type ObjectManagerAttribute = Node & {
  __typename?: 'ObjectManagerAttribute';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  dataOption?: Maybe<Scalars['JSON']>;
  dataType: Scalars['String'];
  display: Scalars['String'];
  editable: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  screens?: Maybe<Scalars['JSON']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Option to choose SQL sorting direction */
export enum OrderDirection {
  /** Sort with ascending order */
  Ascending = 'ASCENDING',
  /** Sort with descending order */
  Descending = 'DESCENDING'
}

/** Organizations that users can belong to */
export type Organization = Node & ObjectAttributeValueInterface & {
  __typename?: 'Organization';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  domain?: Maybe<Scalars['String']>;
  domainAssignment: Scalars['Boolean'];
  id: Scalars['ID'];
  members: UserConnection;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  objectAttributeValues: Array<ObjectAttributeValue>;
  shared: Scalars['Boolean'];
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};


/** Organizations that users can belong to */
export type OrganizationMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Ticket overviews */
export type Overview = Node & {
  __typename?: 'Overview';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  id: Scalars['ID'];
  link: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['String'];
  prio: Scalars['Int'];
  /** Count of tickets the authenticated user may see in this overview */
  ticketCount: Scalars['Int'];
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
  view: Scalars['String'];
};

/** The connection type for Overview. */
export type OverviewConnection = {
  __typename?: 'OverviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OverviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Overview>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Indicates the total number of available records. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type OverviewEdge = {
  __typename?: 'OverviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Overview>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Permissions for the current user */
export type Permission = {
  __typename?: 'Permission';
  ids: Array<Scalars['Int']>;
  names: Array<Scalars['String']>;
};

/** Autogenerated return type of PushMessages */
export type PushMessagesPayload = {
  __typename?: 'PushMessagesPayload';
  /** Message text */
  text?: Maybe<Scalars['String']>;
  /** Message title */
  title?: Maybe<Scalars['String']>;
};

/** All available queries */
export type Queries = {
  __typename?: 'Queries';
  /** Checksum of the currently built front-end application. If this changes, the front-end(s) should reload. */
  applicationBuildChecksum: Scalars['String'];
  /** Configuration required for front end operation (more results returned for authenticated users) */
  applicationConfig: Array<KeyComplexValue>;
  /** Search for users */
  autocompleteSearchUser: Array<AutocompleteEntry>;
  /** Information about the authenticated user */
  currentUser: User;
  /** Return FormKit schema definition for a given form. */
  formSchema: Scalars['JSON'];
  /** Locales available in the system */
  locales: Array<Locale>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Ticket overviews available in the system */
  overviews: OverviewConnection;
  /** The sessionId of the currently authenticated user. */
  sessionId: Scalars['String'];
  /** Fetch a ticket by ID */
  ticketById: Ticket;
  /** Fetch tickets of a given ticket overview */
  ticketsByOverview: TicketConnection;
  /** Translations for a given locale */
  translations?: Maybe<TranslationsPayload>;
};


/** All available queries */
export type QueriesAutocompleteSearchUserArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


/** All available queries */
export type QueriesFormSchemaArgs = {
  formSchemaId: FormSchemaId;
};


/** All available queries */
export type QueriesNodeArgs = {
  id: Scalars['ID'];
};


/** All available queries */
export type QueriesNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** All available queries */
export type QueriesOverviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** All available queries */
export type QueriesTicketByIdArgs = {
  ticketId: Scalars['ID'];
};


/** All available queries */
export type QueriesTicketsByOverviewArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TicketOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  overviewId: Scalars['ID'];
};


/** All available queries */
export type QueriesTranslationsArgs = {
  cacheKey?: InputMaybe<Scalars['String']>;
  locale: Scalars['String'];
};

/** Autogenerated return type of Remove */
export type RemovePayload = {
  __typename?: 'RemovePayload';
  /** Errors encountered during execution of the mutation. */
  errors?: Maybe<Array<UserError>>;
  /** Was the mutation successful? */
  success: Scalars['Boolean'];
};

/** All available subscriptions */
export type Subscriptions = {
  __typename?: 'Subscriptions';
  /** Application update/change events */
  appMaintenance: AppMaintenancePayload;
  /** Updates to configuration settings */
  configUpdates: ConfigUpdatesPayload;
  /** Broadcast messages to all users */
  pushMessages: PushMessagesPayload;
};

/** Option to choose SQL sorting direction */
export enum TextDirection {
  /** Left-to-right */
  Ltr = 'ltr',
  /** Right-to-left */
  Rtl = 'rtl'
}

/** Tickets */
export type Ticket = Node & ObjectAttributeValueInterface & {
  __typename?: 'Ticket';
  articleCount?: Maybe<Scalars['Int']>;
  articles: TicketArticleConnection;
  closeAt?: Maybe<Scalars['ISO8601DateTime']>;
  closeDiffInMin?: Maybe<Scalars['Int']>;
  closeEscalationAt?: Maybe<Scalars['ISO8601DateTime']>;
  closeInMin?: Maybe<Scalars['Int']>;
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  customer: User;
  escalationAt?: Maybe<Scalars['ISO8601DateTime']>;
  firstResponseAt?: Maybe<Scalars['ISO8601DateTime']>;
  firstResponseDiffInMin?: Maybe<Scalars['Int']>;
  firstResponseEscalationAt?: Maybe<Scalars['ISO8601DateTime']>;
  firstResponseInMin?: Maybe<Scalars['Int']>;
  group: Group;
  id: Scalars['ID'];
  lastContactAgentAt?: Maybe<Scalars['ISO8601DateTime']>;
  lastContactAt?: Maybe<Scalars['ISO8601DateTime']>;
  lastContactCustomerAt?: Maybe<Scalars['ISO8601DateTime']>;
  lastOwnerUpdateAt?: Maybe<Scalars['ISO8601DateTime']>;
  note?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  objectAttributeValues: Array<ObjectAttributeValue>;
  organization?: Maybe<Organization>;
  owner: User;
  pendingTime?: Maybe<Scalars['ISO8601DateTime']>;
  preferences?: Maybe<Scalars['JSON']>;
  priority: TicketPriority;
  state: TicketState;
  timeUnit?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updateDiffInMin?: Maybe<Scalars['Int']>;
  updateEscalationAt?: Maybe<Scalars['ISO8601DateTime']>;
  updateInMin?: Maybe<Scalars['Int']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};


/** Tickets */
export type TicketArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Ticket articles */
export type TicketArticle = Node & {
  __typename?: 'TicketArticle';
  body: Scalars['String'];
  cc?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  from?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inReplyTo?: Maybe<Scalars['String']>;
  internal: Scalars['Boolean'];
  messageId?: Maybe<Scalars['String']>;
  messageIdMd5?: Maybe<Scalars['String']>;
  originBy?: Maybe<User>;
  references?: Maybe<Scalars['String']>;
  replyTo?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** The connection type for TicketArticle. */
export type TicketArticleConnection = {
  __typename?: 'TicketArticleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TicketArticleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TicketArticle>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Indicates the total number of available records. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TicketArticleEdge = {
  __typename?: 'TicketArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TicketArticle>;
};

/** The connection type for Ticket. */
export type TicketConnection = {
  __typename?: 'TicketConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TicketEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Ticket>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Indicates the total number of available records. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TicketEdge = {
  __typename?: 'TicketEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Ticket>;
};

/** Option to choose ticket field for SQL sorting */
export enum TicketOrderBy {
  /** Sort by create time */
  CreatedAt = 'CREATED_AT',
  /** Sort by ticket number */
  Number = 'NUMBER',
  /** Sort by title */
  Title = 'TITLE',
  /** Sort by update time */
  UpdatedAt = 'UPDATED_AT'
}

/** Ticket priorities */
export type TicketPriority = Node & {
  __typename?: 'TicketPriority';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  defaultCreate: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  uiColor?: Maybe<Scalars['String']>;
  uiIcon?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Ticket states */
export type TicketState = Node & {
  __typename?: 'TicketState';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  defaultCreate: Scalars['Boolean'];
  defaultFollowUp: Scalars['Boolean'];
  id: Scalars['ID'];
  ignoreEscalation: Scalars['Boolean'];
  name: Scalars['String'];
  nextStateId?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  stateType: TicketStateType;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Ticket state types */
export type TicketStateType = Node & {
  __typename?: 'TicketStateType';
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdBy: User;
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedBy: User;
};

/** Autogenerated return type of Translations */
export type TranslationsPayload = {
  __typename?: 'TranslationsPayload';
  /** Cache key that the front end should use to cache the new translation data. */
  cacheKey?: Maybe<Scalars['String']>;
  /** If this is true, then the front end's translation cache is still valid and should be used, cacheKey and translation will not be returned. */
  isCacheStillValid: Scalars['Boolean'];
  /** The actual translation data as Hash where keys are source and values target strings (excluding untranslated strings). */
  translations?: Maybe<Scalars['JSON']>;
};

/** A file to be uploaded. */
export type UploadFileInput = {
  /** File content */
  content: Scalars['BinaryString'];
  /** File name. */
  name: Scalars['String'];
  /** File's content-type. */
  type?: InputMaybe<Scalars['String']>;
};

/** An uploaded file. */
export type UploadedFile = {
  __typename?: 'UploadedFile';
  /** ID of the file's store entry. */
  id: Scalars['ID'];
  /** File name. */
  name: Scalars['String'];
  /** File's content-type. */
  type?: Maybe<Scalars['String']>;
};

/** Users (admins, agents and customers) */
export type User = Node & ObjectAttributeValueInterface & {
  __typename?: 'User';
  active: Scalars['Boolean'];
  /** Create date/time of the record */
  createdAt: Scalars['ISO8601DateTime'];
  /** User that created this record */
  createdById: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['ISO8601DateTime']>;
  lastname?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  loginFailed: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  objectAttributeValues: Array<ObjectAttributeValue>;
  organization?: Maybe<Organization>;
  outOfOffice: Scalars['Boolean'];
  outOfOfficeEndAt?: Maybe<Scalars['ISO8601Date']>;
  outOfOfficeReplacementId?: Maybe<Scalars['Int']>;
  outOfOfficeStartAt?: Maybe<Scalars['ISO8601Date']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Permission>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['JSON']>;
  source?: Maybe<Scalars['String']>;
  /** Last update date/time of the record */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Last user that updated this record */
  updatedById: Scalars['Int'];
  verified: Scalars['Boolean'];
  vip?: Maybe<Scalars['Boolean']>;
  web?: Maybe<Scalars['String']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Indicates the total number of available records. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** Represents an error in the input of a mutation. */
export type UserError = {
  __typename?: 'UserError';
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type TicketsByIdQueryVariables = Exact<{
  ticketId: Scalars['ID'];
  withArticles?: InputMaybe<Scalars['Boolean']>;
  withObjectAttributes?: InputMaybe<Scalars['Boolean']>;
}>;


export type TicketsByIdQuery = { __typename?: 'Queries', ticketById: { __typename?: 'Ticket', id: string, number: string, title: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', firstname?: string | null, lastname?: string | null }, customer: { __typename?: 'User', firstname?: string | null, lastname?: string | null }, organization?: { __typename?: 'Organization', name: string } | null, state: { __typename?: 'TicketState', name: string, stateType: { __typename?: 'TicketStateType', name: string } }, group: { __typename?: 'Group', name: string }, priority: { __typename?: 'TicketPriority', name: string }, articles?: { __typename?: 'TicketArticleConnection', edges?: Array<{ __typename?: 'TicketArticleEdge', node?: { __typename?: 'TicketArticle', subject?: string | null } | null } | null> | null }, objectAttributeValues?: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null, screens?: any | null, editable: boolean, active: boolean } }> } };

export type TicketsByOverviewQueryVariables = Exact<{
  overviewId: Scalars['ID'];
  orderBy?: InputMaybe<TicketOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  cursor?: InputMaybe<Scalars['String']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  withObjectAttributes?: InputMaybe<Scalars['Boolean']>;
}>;


export type TicketsByOverviewQuery = { __typename?: 'Queries', ticketsByOverview: { __typename?: 'TicketConnection', totalCount: number, edges?: Array<{ __typename?: 'TicketEdge', cursor: string, node?: { __typename?: 'Ticket', id: string, number: string, title: string, createdAt: any, updatedAt: any, owner: { __typename?: 'User', firstname?: string | null, lastname?: string | null }, customer: { __typename?: 'User', firstname?: string | null, lastname?: string | null }, organization?: { __typename?: 'Organization', name: string } | null, state: { __typename?: 'TicketState', name: string, stateType: { __typename?: 'TicketStateType', name: string } }, group: { __typename?: 'Group', name: string }, priority: { __typename?: 'TicketPriority', name: string }, objectAttributeValues?: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null, screens?: any | null, editable: boolean, active: boolean } }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type FormUploadCacheAddMutationVariables = Exact<{
  formId: Scalars['FormId'];
  files: Array<UploadFileInput> | UploadFileInput;
}>;


export type FormUploadCacheAddMutation = { __typename?: 'Mutations', formUploadCacheAdd?: { __typename?: 'AddPayload', uploadedFiles: Array<{ __typename?: 'UploadedFile', id: string, name: string, type?: string | null }> } | null };

export type FormUploadCacheRemoveMutationVariables = Exact<{
  formId: Scalars['FormId'];
  fileIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type FormUploadCacheRemoveMutation = { __typename?: 'Mutations', formUploadCacheRemove?: { __typename?: 'RemovePayload', success: boolean } | null };

export type FormSchemaQueryVariables = Exact<{
  formSchemaId: FormSchemaId;
}>;


export type FormSchemaQuery = { __typename?: 'Queries', formSchema: any };

export type OverviewsQueryVariables = Exact<{
  withTicketCount: Scalars['Boolean'];
}>;


export type OverviewsQuery = { __typename?: 'Queries', overviews: { __typename?: 'OverviewConnection', edges?: Array<{ __typename?: 'OverviewEdge', cursor: string, node?: { __typename?: 'Overview', id: string, name: string, link: string, prio: number, order: string, view: string, active: boolean, ticketCount?: number } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type ErrorsFragment = { __typename?: 'UserError', message: string, field?: string | null };

export type ObjectAttributeValuesFragment = { __typename?: 'ObjectAttributeValue', value?: string | null, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null, screens?: any | null, editable: boolean, active: boolean } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutations', login?: { __typename?: 'LoginPayload', sessionId?: string | null, errors?: Array<{ __typename?: 'UserError', message: string, field?: string | null }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutations', logout?: { __typename?: 'LogoutPayload', success: boolean } | null };

export type ApplicationBuildChecksumQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationBuildChecksumQuery = { __typename?: 'Queries', applicationBuildChecksum: string };

export type ApplicationConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationConfigQuery = { __typename?: 'Queries', applicationConfig: Array<{ __typename?: 'KeyComplexValue', key: string, value?: any | null }> };

export type AutocompleteSearchUserQueryVariables = Exact<{
  query: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type AutocompleteSearchUserQuery = { __typename?: 'Queries', autocompleteSearchUser: Array<{ __typename?: 'AutocompleteEntry', value: string, label: string, labelPlaceholder?: Array<string> | null, disabled?: boolean | null, icon?: string | null }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Queries', currentUser: { __typename?: 'User', firstname?: string | null, lastname?: string | null, preferences?: any | null, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null, screens?: any | null, editable: boolean, active: boolean } }>, organization?: { __typename?: 'Organization', name: string, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null, screens?: any | null, editable: boolean, active: boolean } }> } | null, permissions?: { __typename?: 'Permission', names: Array<string> } | null } };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { __typename?: 'Queries', locales: Array<{ __typename?: 'Locale', locale: string, alias?: string | null, name: string, dir: TextDirection, active: boolean }> };

export type SessionIdQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionIdQuery = { __typename?: 'Queries', sessionId: string };

export type TranslationsQueryVariables = Exact<{
  locale: Scalars['String'];
  cacheKey?: InputMaybe<Scalars['String']>;
}>;


export type TranslationsQuery = { __typename?: 'Queries', translations?: { __typename?: 'TranslationsPayload', isCacheStillValid: boolean, cacheKey?: string | null, translations?: any | null } | null };

export type AppMaintenanceSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AppMaintenanceSubscription = { __typename?: 'Subscriptions', appMaintenance: { __typename?: 'AppMaintenancePayload', type?: AppMaintenanceType | null } };

export type ConfigUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ConfigUpdatesSubscription = { __typename?: 'Subscriptions', configUpdates: { __typename?: 'ConfigUpdatesPayload', setting?: { __typename?: 'KeyComplexValue', key: string, value?: any | null } | null } };

export type PushMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PushMessagesSubscription = { __typename?: 'Subscriptions', pushMessages: { __typename?: 'PushMessagesPayload', title?: string | null, text?: string | null } };
