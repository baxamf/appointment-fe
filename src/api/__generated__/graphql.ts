/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Appointment = {
  __typename?: 'Appointment';
  createdAt: Scalars['DateTime']['output'];
  customer: UserResponse;
  customerId: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  staff: UserResponse;
  staffId: Scalars['Int']['output'];
  staffService: StaffService;
  staffServiceId: Scalars['Int']['output'];
  status: AppointmentStatus;
  targetTime: Scalars['DateTime']['output'];
};

/** Appointment statuses */
export enum AppointmentStatus {
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  Pending = 'PENDING'
}

export type Auth = {
  __typename?: 'Auth';
  /** jwt access token */
  accessToken: Scalars['String']['output'];
  /** user */
  user: UserResponse;
};

export type CompanyService = {
  __typename?: 'CompanyService';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  staffServices?: Maybe<Array<StaffService>>;
  tags?: Maybe<Array<ServiceTag>>;
  title: Scalars['String']['output'];
};

export type CreateAppointmentInput = {
  customerId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  staffId: Scalars['Int']['input'];
  staffServiceId: Scalars['Int']['input'];
  targetTime: Scalars['DateTime']['input'];
};

export type CreateCompanyServiceInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type CreateServiceTagInput = {
  title: Scalars['String']['input'];
};

export type CreateStaffServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Service duration in minutes */
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
};

export type CreateUserProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type CreateUserSocialInput = {
  link: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type LoginInput = {
  /** user email */
  email: Scalars['String']['input'];
  /** user password */
  password: Scalars['String']['input'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  /** Response message */
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelAppointment: Appointment;
  createAppointment: Appointment;
  createCompanyService: CompanyService;
  createMyProfile: UserProfile;
  createMySocial: UserSocial;
  createServiceTag: ServiceTag;
  createStaffService: StaffService;
  createUser: UserResponse;
  /** Login user */
  login: Auth;
  removeCompanyService: CompanyService;
  removeMySocial: UserSocial;
  removeServiceTag: ServiceTag;
  removeStaffService: StaffService;
  updateAppointment: Appointment;
  updateCompanyService: CompanyService;
  updateMyProfile: UserProfile;
  updateMySocial: UserSocial;
  updateServiceTag: ServiceTag;
  updateStaffService: StaffService;
};


export type MutationCancelAppointmentArgs = {
  appointmentId: Scalars['Int']['input'];
};


export type MutationCreateAppointmentArgs = {
  createAppointmentInput: CreateAppointmentInput;
};


export type MutationCreateCompanyServiceArgs = {
  createCompanyServiceInput: CreateCompanyServiceInput;
};


export type MutationCreateMyProfileArgs = {
  createUserProfileInput: CreateUserProfileInput;
};


export type MutationCreateMySocialArgs = {
  createUserSocialInput: CreateUserSocialInput;
};


export type MutationCreateServiceTagArgs = {
  createServiceTagInput: CreateServiceTagInput;
};


export type MutationCreateStaffServiceArgs = {
  createStaffServiceInput: CreateStaffServiceInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveCompanyServiceArgs = {
  companyServiceId: Scalars['Int']['input'];
};


export type MutationRemoveMySocialArgs = {
  socialId: Scalars['Int']['input'];
};


export type MutationRemoveServiceTagArgs = {
  serviceTagId: Scalars['Int']['input'];
};


export type MutationRemoveStaffServiceArgs = {
  staffServiceId: Scalars['Int']['input'];
};


export type MutationUpdateAppointmentArgs = {
  updateAppointmentInput: UpdateAppointmentInput;
};


export type MutationUpdateCompanyServiceArgs = {
  updateCompanyServiceInput: UpdateCompanyServiceInput;
};


export type MutationUpdateMyProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};


export type MutationUpdateMySocialArgs = {
  updateUserSocialInput: UpdateUserSocialInput;
};


export type MutationUpdateServiceTagArgs = {
  updateServiceTagInput: UpdateServiceTagInput;
};


export type MutationUpdateStaffServiceArgs = {
  updateServiceInput: UpdateStaffServiceInput;
};

export type Query = {
  __typename?: 'Query';
  getCompanyService: CompanyService;
  getCompanyServices: Array<CompanyService>;
  /** Get my user data */
  getMe: UserResponse;
  /** Get my appointments */
  getMyAppointments: Array<Appointment>;
  getServiceTag: ServiceTag;
  getServiceTags: Array<ServiceTag>;
  /** Get staff appointments */
  getStaffAppointments: Array<Appointment>;
  getStaffService: StaffService;
  getStaffServices: Array<StaffService>;
  /** Get user by id */
  getUser: UserResponse;
  /** Logout user */
  logout: MessageResponse;
  /** Refresh access token */
  refresh: Auth;
};


export type QueryGetCompanyServiceArgs = {
  companyServiceId: Scalars['Int']['input'];
};


export type QueryGetServiceTagArgs = {
  serviceTagId: Scalars['Int']['input'];
};


export type QueryGetStaffAppointmentsArgs = {
  staffUserId: Scalars['Int']['input'];
};


export type QueryGetStaffServiceArgs = {
  staffServiceId: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  userId: Scalars['Int']['input'];
};

export type ServiceTag = {
  __typename?: 'ServiceTag';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StaffService = {
  __typename?: 'StaffService';
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  service: CompanyService;
  serviceId: Scalars['Int']['output'];
  tags?: Maybe<Array<ServiceTag>>;
  title?: Maybe<Scalars['String']['output']>;
  user: UserResponse;
  userId: Scalars['Int']['output'];
};

export type UpdateAppointmentInput = {
  customerId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  staffServiceId?: InputMaybe<Scalars['Int']['input']>;
  targetTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCompanyServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceTagInput = {
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStaffServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Service duration in minutes */
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserSocialInput = {
  id: Scalars['Int']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  profile?: Maybe<UserProfile>;
  role: UserRole;
  socials?: Maybe<Array<UserSocial>>;
};

/** User roles */
export enum UserRole {
  Admin = 'ADMIN',
  Staff = 'STAFF',
  User = 'USER'
}

export type UserSocial = {
  __typename?: 'UserSocial';
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type RefreshQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshQuery = { __typename?: 'Query', refresh: { __typename?: 'Auth', accessToken: string } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, user: { __typename?: 'UserResponse', role: UserRole } } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'UserResponse', id: number, email: string, role: UserRole, createdAt: any } };


export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshQuery, RefreshQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;