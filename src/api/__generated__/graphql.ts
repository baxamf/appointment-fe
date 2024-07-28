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
  image?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  /** Service price per duration */
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
  nickName?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  specialization?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserSocialInput = {
  link: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type CustomerDataInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type GetAppointmentFilterInput = {
  staffId?: InputMaybe<Scalars['Int']['input']>;
  staffServiceId?: InputMaybe<Scalars['Int']['input']>;
  targetTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GetStaffInput = {
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type GetStaffServicesInput = {
  serviceId?: InputMaybe<Scalars['Int']['input']>;
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
  customerDataInput: CustomerDataInput;
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
  companyServiceId?: InputMaybe<Scalars['Int']['input']>;
  createServiceTagInput: CreateServiceTagInput;
};


export type MutationCreateStaffServiceArgs = {
  createStaffServiceInput: CreateStaffServiceInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
  createUserProfileInput: CreateUserProfileInput;
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
  companyServiceId: Scalars['Int']['input'];
  updateCompanyServiceInput: UpdateCompanyServiceInput;
};


export type MutationUpdateMyProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};


export type MutationUpdateMySocialArgs = {
  updateUserSocialInput: UpdateUserSocialInput;
};


export type MutationUpdateServiceTagArgs = {
  serviceTagId: Scalars['Int']['input'];
  updateServiceTagInput: UpdateServiceTagInput;
};


export type MutationUpdateStaffServiceArgs = {
  staffServiceId: Scalars['Int']['input'];
  updateStaffServiceInput: UpdateStaffServiceInput;
};

export type Query = {
  __typename?: 'Query';
  getCompanyService: CompanyService;
  getCompanyServiceTags: Array<ServiceTag>;
  getCompanyServices: Array<CompanyService>;
  /** Get my user data */
  getMe: UserResponse;
  /** Get my appointments */
  getMyAppointments: Array<Appointment>;
  getMyStaffServices: Array<StaffService>;
  getServiceTags: Array<ServiceTag>;
  /** Get staff */
  getStaff: Array<UserResponse>;
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


export type QueryGetCompanyServiceTagsArgs = {
  companyServiceId: Scalars['Int']['input'];
};


export type QueryGetMyAppointmentsArgs = {
  getAppointmentFilterInput?: InputMaybe<GetAppointmentFilterInput>;
};


export type QueryGetStaffArgs = {
  getStaffInput?: InputMaybe<GetStaffInput>;
};


export type QueryGetStaffAppointmentsArgs = {
  getAppointmentFilterInput?: InputMaybe<GetAppointmentFilterInput>;
  staffUserId: Scalars['Int']['input'];
};


export type QueryGetStaffServiceArgs = {
  staffServiceId: Scalars['Int']['input'];
};


export type QueryGetStaffServicesArgs = {
  getStaffServicesInput?: InputMaybe<GetStaffServicesInput>;
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
  image?: Maybe<Scalars['String']['output']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  staffServiceId?: InputMaybe<Scalars['Int']['input']>;
  targetTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCompanyServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceTagInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStaffServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Service duration in minutes */
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  /** Service price per duration */
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  specialization?: InputMaybe<Scalars['String']['input']>;
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
  nickName?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  specialization?: Maybe<Scalars['String']['output']>;
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

export type GetAdminCompanyServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminCompanyServicesQuery = { __typename?: 'Query', getCompanyServices: Array<{ __typename?: 'CompanyService', id: number, title: string, description: string, image: string, order: number, tags?: Array<{ __typename?: 'ServiceTag', title: string }> | null }> };

export type GetAdminCompanyServiceQueryVariables = Exact<{
  companyServiceId: Scalars['Int']['input'];
}>;


export type GetAdminCompanyServiceQuery = { __typename?: 'Query', getCompanyService: { __typename?: 'CompanyService', id: number, title: string, description: string, image: string, order: number } };

export type CreateCompanyServiceMutationVariables = Exact<{
  createCompanyServiceInput: CreateCompanyServiceInput;
}>;


export type CreateCompanyServiceMutation = { __typename?: 'Mutation', createCompanyService: { __typename?: 'CompanyService', id: number } };

export type UpdateCompanyServiceMutationVariables = Exact<{
  companyServiceId: Scalars['Int']['input'];
  updateCompanyServiceInput: UpdateCompanyServiceInput;
}>;


export type UpdateCompanyServiceMutation = { __typename?: 'Mutation', updateCompanyService: { __typename?: 'CompanyService', id: number, title: string, description: string, image: string, order: number } };

export type GetCompanyServiceTagsQueryVariables = Exact<{
  companyServiceId: Scalars['Int']['input'];
}>;


export type GetCompanyServiceTagsQuery = { __typename?: 'Query', getCompanyServiceTags: Array<{ __typename?: 'ServiceTag', id: number, title: string }> };

export type CreateServiceTagMutationVariables = Exact<{
  createServiceTagInput: CreateServiceTagInput;
  companyServiceId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateServiceTagMutation = { __typename?: 'Mutation', createServiceTag: { __typename?: 'ServiceTag', id: number } };

export type UpdateServiceTagMutationVariables = Exact<{
  serviceTagId: Scalars['Int']['input'];
  updateServiceTagInput: UpdateServiceTagInput;
}>;


export type UpdateServiceTagMutation = { __typename?: 'Mutation', updateServiceTag: { __typename?: 'ServiceTag', id: number } };

export type RemoveServiceTagMutationVariables = Exact<{
  serviceTagId: Scalars['Int']['input'];
}>;


export type RemoveServiceTagMutation = { __typename?: 'Mutation', removeServiceTag: { __typename?: 'ServiceTag', id: number } };

export type GetAdminStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminStaffQuery = { __typename?: 'Query', getStaff: Array<{ __typename?: 'UserResponse', id: number, profile?: { __typename?: 'UserProfile', firstName: string, lastName?: string | null, nickName?: string | null, specialization?: string | null, phone: string, avatar?: string | null } | null, socials?: Array<{ __typename?: 'UserSocial', id: number, title: string, link: string }> | null }> };

export type GetAdminStaffInfoQueryVariables = Exact<{
  staffId: Scalars['Int']['input'];
}>;


export type GetAdminStaffInfoQuery = { __typename?: 'Query', getUser: { __typename?: 'UserResponse', email: string, createdAt: any, profile?: { __typename?: 'UserProfile', firstName: string, lastName?: string | null, nickName?: string | null, specialization?: string | null, phone: string, avatar?: string | null, bio?: string | null } | null, socials?: Array<{ __typename?: 'UserSocial', id: number, title: string, link: string }> | null } };

export type CreateStaffMutationVariables = Exact<{
  createUserInput: CreateUserInput;
  createUserProfileInput: CreateUserProfileInput;
}>;


export type CreateStaffMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', id: number } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, user: { __typename?: 'UserResponse', role: UserRole } } };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'MessageResponse', message: string } };

export type CreateAppointmentMutationVariables = Exact<{
  createAppointmentInput: CreateAppointmentInput;
  customerDataInput: CustomerDataInput;
}>;


export type CreateAppointmentMutation = { __typename?: 'Mutation', createAppointment: { __typename?: 'Appointment', id: number, targetTime: any } };

export type GetStaffForAppointmentQueryVariables = Exact<{
  getStaffInput?: InputMaybe<GetStaffInput>;
}>;


export type GetStaffForAppointmentQuery = { __typename?: 'Query', getStaff: Array<{ __typename?: 'UserResponse', id: number, profile?: { __typename?: 'UserProfile', firstName: string, lastName?: string | null, nickName?: string | null, specialization?: string | null, phone: string, avatar?: string | null, bio?: string | null } | null }> };

export type GetStaffServicesForAppointmentQueryVariables = Exact<{
  getStaffServicesInput?: InputMaybe<GetStaffServicesInput>;
}>;


export type GetStaffServicesForAppointmentQuery = { __typename?: 'Query', getStaffServices: Array<{ __typename?: 'StaffService', id: number, title?: string | null, description?: string | null, image?: string | null, price?: number | null, duration: number, user: { __typename?: 'UserResponse', id: number, profile?: { __typename?: 'UserProfile', firstName: string, lastName?: string | null, nickName?: string | null, phone: string, avatar?: string | null } | null } }> };

export type GetPublicCompanyServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublicCompanyServicesQuery = { __typename?: 'Query', getCompanyServices: Array<{ __typename?: 'CompanyService', id: number, title: string, description: string, image: string, order: number, tags?: Array<{ __typename?: 'ServiceTag', title: string }> | null }> };

export type GetMyStaffAppointmentsQueryVariables = Exact<{
  getAppointmentFilterInput?: InputMaybe<GetAppointmentFilterInput>;
}>;


export type GetMyStaffAppointmentsQuery = { __typename?: 'Query', getMyAppointments: Array<{ __typename?: 'Appointment', id: number, status: AppointmentStatus, targetTime: any, description?: string | null, images?: Array<string> | null, staffService: { __typename?: 'StaffService', title?: string | null }, customer: { __typename?: 'UserResponse', profile?: { __typename?: 'UserProfile', firstName: string, lastName?: string | null, phone: string } | null } }> };

export type GetMyStaffServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyStaffServicesQuery = { __typename?: 'Query', getMyStaffServices: Array<{ __typename?: 'StaffService', id: number, title?: string | null, description?: string | null, image?: string | null, price?: number | null, duration: number, service: { __typename?: 'CompanyService', title: string } }> };

export type GetMyStaffServiceQueryVariables = Exact<{
  staffServiceId: Scalars['Int']['input'];
}>;


export type GetMyStaffServiceQuery = { __typename?: 'Query', getStaffService: { __typename?: 'StaffService', id: number, serviceId: number, title?: string | null, description?: string | null, image?: string | null, price?: number | null, duration: number } };

export type UpdateMyStaffServiceMutationVariables = Exact<{
  staffServiceId: Scalars['Int']['input'];
  updateStaffServiceInput: UpdateStaffServiceInput;
}>;


export type UpdateMyStaffServiceMutation = { __typename?: 'Mutation', updateStaffService: { __typename?: 'StaffService', serviceId: number, title?: string | null, description?: string | null, image?: string | null, price?: number | null, duration: number } };

export type GetCompanyServicesForStaffServiceCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyServicesForStaffServiceCreateQuery = { __typename?: 'Query', getCompanyServices: Array<{ __typename?: 'CompanyService', id: number, title: string, description: string, image: string }> };

export type CreateStaffServiceMutationVariables = Exact<{
  createStaffServiceInput: CreateStaffServiceInput;
}>;


export type CreateStaffServiceMutation = { __typename?: 'Mutation', createStaffService: { __typename?: 'StaffService', id: number } };


export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshQuery, RefreshQueryVariables>;
export const GetAdminCompanyServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminCompanyServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminCompanyServicesQuery, GetAdminCompanyServicesQueryVariables>;
export const GetAdminCompanyServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminCompanyService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<GetAdminCompanyServiceQuery, GetAdminCompanyServiceQueryVariables>;
export const CreateCompanyServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCompanyService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCompanyServiceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCompanyServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompanyService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCompanyServiceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCompanyServiceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCompanyServiceMutation, CreateCompanyServiceMutationVariables>;
export const UpdateCompanyServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCompanyService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCompanyServiceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCompanyServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompanyService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCompanyServiceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCompanyServiceInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<UpdateCompanyServiceMutation, UpdateCompanyServiceMutationVariables>;
export const GetCompanyServiceTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyServiceTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyServiceTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetCompanyServiceTagsQuery, GetCompanyServiceTagsQueryVariables>;
export const CreateServiceTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateServiceTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createServiceTagInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateServiceTagInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createServiceTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createServiceTagInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createServiceTagInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyServiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateServiceTagMutation, CreateServiceTagMutationVariables>;
export const UpdateServiceTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateServiceTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceTagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateServiceTagInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateServiceTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateServiceTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serviceTagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceTagId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateServiceTagInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateServiceTagInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateServiceTagMutation, UpdateServiceTagMutationVariables>;
export const RemoveServiceTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveServiceTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceTagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeServiceTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serviceTagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceTagId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveServiceTagMutation, RemoveServiceTagMutationVariables>;
export const GetAdminStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminStaff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStaff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"specialization"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminStaffQuery, GetAdminStaffQueryVariables>;
export const GetAdminStaffInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminStaffInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staffId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staffId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"specialization"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminStaffInfoQuery, GetAdminStaffInfoQueryVariables>;
export const CreateStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserProfileInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"createUserProfileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserProfileInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateStaffMutation, CreateStaffMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>;
export const CreateAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAppointmentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAppointmentInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerDataInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerDataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAppointmentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAppointmentInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerDataInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerDataInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}}]}}]}}]} as unknown as DocumentNode<CreateAppointmentMutation, CreateAppointmentMutationVariables>;
export const GetStaffForAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaffForAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getStaffInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetStaffInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStaff"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getStaffInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getStaffInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"specialization"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]} as unknown as DocumentNode<GetStaffForAppointmentQuery, GetStaffForAppointmentQueryVariables>;
export const GetStaffServicesForAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaffServicesForAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getStaffServicesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetStaffServicesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStaffServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getStaffServicesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getStaffServicesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStaffServicesForAppointmentQuery, GetStaffServicesForAppointmentQueryVariables>;
export const GetPublicCompanyServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublicCompanyServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPublicCompanyServicesQuery, GetPublicCompanyServicesQueryVariables>;
export const GetMyStaffAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyStaffAppointments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getAppointmentFilterInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAppointmentFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyAppointments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getAppointmentFilterInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getAppointmentFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"staffService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMyStaffAppointmentsQuery, GetMyStaffAppointmentsQueryVariables>;
export const GetMyStaffServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyStaffServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyStaffServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyStaffServicesQuery, GetMyStaffServicesQueryVariables>;
export const GetMyStaffServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyStaffService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staffServiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStaffService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"staffServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staffServiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]} as unknown as DocumentNode<GetMyStaffServiceQuery, GetMyStaffServiceQueryVariables>;
export const UpdateMyStaffServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMyStaffService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staffServiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateStaffServiceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStaffServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStaffService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"staffServiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staffServiceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateStaffServiceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateStaffServiceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]} as unknown as DocumentNode<UpdateMyStaffServiceMutation, UpdateMyStaffServiceMutationVariables>;
export const GetCompanyServicesForStaffServiceCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyServicesForStaffServiceCreate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetCompanyServicesForStaffServiceCreateQuery, GetCompanyServicesForStaffServiceCreateQueryVariables>;
export const CreateStaffServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStaffService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createStaffServiceInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStaffServiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStaffService"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createStaffServiceInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createStaffServiceInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateStaffServiceMutation, CreateStaffServiceMutationVariables>;