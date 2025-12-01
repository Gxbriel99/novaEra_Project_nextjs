import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AttachmentInput = {
  file_name: Scalars['String']['input'];
  path: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AttachmentType = {
  __typename?: 'AttachmentType';
  assistence_request_id: Scalars['ID']['output'];
  file_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ChatType = {
  __typename?: 'ChatType';
  assistence_request_id: Scalars['Int']['output'];
  attachment_request_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['Int']['output'];
};

export type MessageInput = {
  assistence_request_id: Scalars['Int']['input'];
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTicket?: Maybe<TicketResponse>;
  sendMessage?: Maybe<TicketResponse>;
  sendResponse?: Maybe<TicketResponse>;
};


export type MutationCreateTicketArgs = {
  input: TicketInput;
};


export type MutationSendMessageArgs = {
  input: MessageInput;
};


export type MutationSendResponseArgs = {
  input: MessageInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type Query = {
  __typename?: 'Query';
  getChat: Array<ChatType>;
  ticketsList: Array<TicketType>;
  userTicketsList: Array<TicketType>;
};


export type QueryGetChatArgs = {
  assistence_request_id: Scalars['Int']['input'];
};


export type QueryUserTicketsListArgs = {
  email: Scalars['String']['input'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type TicketInput = {
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  object: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type TicketType = {
  __typename?: 'TicketType';
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  object: Scalars['String']['output'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type TicketResponse = {
  __typename?: 'ticketResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type GetTicketsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTicketsListQuery = { __typename?: 'Query', ticketsList: Array<{ __typename?: 'TicketType', id: string, object: string, description: string }> };

export type GetUserTicketsQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserTicketsQuery = { __typename?: 'Query', userTicketsList: Array<{ __typename?: 'TicketType', id: string, object: string, description: string }> };

export type GetChatQueryVariables = Exact<{
  assistence_request_id: Scalars['Int']['input'];
}>;


export type GetChatQuery = { __typename?: 'Query', getChat: Array<{ __typename?: 'ChatType', id: string, assistence_request_id: number, user_id: number, message?: string | null, response?: string | null, attachment_request_id?: number | null }> };

export type SendAssistenceResponseMutationVariables = Exact<{
  payload: MessageInput;
}>;


export type SendAssistenceResponseMutation = { __typename?: 'Mutation', sendResponse?: { __typename?: 'ticketResponse', success: boolean, message: string, code: number } | null };

export type SendCustomerResponseMutationVariables = Exact<{
  payload: MessageInput;
}>;


export type SendCustomerResponseMutation = { __typename?: 'Mutation', sendMessage?: { __typename?: 'ticketResponse', success: boolean, message: string, code: number } | null };

export type SendTicketRequestMutationVariables = Exact<{
  payload: TicketInput;
}>;


export type SendTicketRequestMutation = { __typename?: 'Mutation', createTicket?: { __typename?: 'ticketResponse', success: boolean, message: string, code: number } | null };


export const GetTicketsListDocument = gql`
    query GetTicketsList {
  ticketsList {
    id
    object
    description
  }
}
    `;

/**
 * __useGetTicketsListQuery__
 *
 * To run a query within a React component, call `useGetTicketsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTicketsListQuery(baseOptions?: Apollo.QueryHookOptions<GetTicketsListQuery, GetTicketsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketsListQuery, GetTicketsListQueryVariables>(GetTicketsListDocument, options);
      }
export function useGetTicketsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketsListQuery, GetTicketsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketsListQuery, GetTicketsListQueryVariables>(GetTicketsListDocument, options);
        }
export function useGetTicketsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTicketsListQuery, GetTicketsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTicketsListQuery, GetTicketsListQueryVariables>(GetTicketsListDocument, options);
        }
export type GetTicketsListQueryHookResult = ReturnType<typeof useGetTicketsListQuery>;
export type GetTicketsListLazyQueryHookResult = ReturnType<typeof useGetTicketsListLazyQuery>;
export type GetTicketsListSuspenseQueryHookResult = ReturnType<typeof useGetTicketsListSuspenseQuery>;
export type GetTicketsListQueryResult = Apollo.QueryResult<GetTicketsListQuery, GetTicketsListQueryVariables>;
export const GetUserTicketsDocument = gql`
    query GetUserTickets($email: String!) {
  userTicketsList(email: $email) {
    id
    object
    description
  }
}
    `;

/**
 * __useGetUserTicketsQuery__
 *
 * To run a query within a React component, call `useGetUserTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTicketsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserTicketsQuery(baseOptions: Apollo.QueryHookOptions<GetUserTicketsQuery, GetUserTicketsQueryVariables> & ({ variables: GetUserTicketsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTicketsQuery, GetUserTicketsQueryVariables>(GetUserTicketsDocument, options);
      }
export function useGetUserTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTicketsQuery, GetUserTicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTicketsQuery, GetUserTicketsQueryVariables>(GetUserTicketsDocument, options);
        }
export function useGetUserTicketsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserTicketsQuery, GetUserTicketsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserTicketsQuery, GetUserTicketsQueryVariables>(GetUserTicketsDocument, options);
        }
export type GetUserTicketsQueryHookResult = ReturnType<typeof useGetUserTicketsQuery>;
export type GetUserTicketsLazyQueryHookResult = ReturnType<typeof useGetUserTicketsLazyQuery>;
export type GetUserTicketsSuspenseQueryHookResult = ReturnType<typeof useGetUserTicketsSuspenseQuery>;
export type GetUserTicketsQueryResult = Apollo.QueryResult<GetUserTicketsQuery, GetUserTicketsQueryVariables>;
export const GetChatDocument = gql`
    query getChat($assistence_request_id: Int!) {
  getChat(assistence_request_id: $assistence_request_id) {
    id
    assistence_request_id
    user_id
    message
    response
    attachment_request_id
  }
}
    `;

/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      assistence_request_id: // value for 'assistence_request_id'
 *   },
 * });
 */
export function useGetChatQuery(baseOptions: Apollo.QueryHookOptions<GetChatQuery, GetChatQueryVariables> & ({ variables: GetChatQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
      }
export function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
        }
export function useGetChatSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, options);
        }
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatSuspenseQueryHookResult = ReturnType<typeof useGetChatSuspenseQuery>;
export type GetChatQueryResult = Apollo.QueryResult<GetChatQuery, GetChatQueryVariables>;
export const SendAssistenceResponseDocument = gql`
    mutation sendAssistenceResponse($payload: MessageInput!) {
  sendResponse(input: $payload) {
    success
    message
    code
  }
}
    `;
export type SendAssistenceResponseMutationFn = Apollo.MutationFunction<SendAssistenceResponseMutation, SendAssistenceResponseMutationVariables>;

/**
 * __useSendAssistenceResponseMutation__
 *
 * To run a mutation, you first call `useSendAssistenceResponseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendAssistenceResponseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendAssistenceResponseMutation, { data, loading, error }] = useSendAssistenceResponseMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useSendAssistenceResponseMutation(baseOptions?: Apollo.MutationHookOptions<SendAssistenceResponseMutation, SendAssistenceResponseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendAssistenceResponseMutation, SendAssistenceResponseMutationVariables>(SendAssistenceResponseDocument, options);
      }
export type SendAssistenceResponseMutationHookResult = ReturnType<typeof useSendAssistenceResponseMutation>;
export type SendAssistenceResponseMutationResult = Apollo.MutationResult<SendAssistenceResponseMutation>;
export type SendAssistenceResponseMutationOptions = Apollo.BaseMutationOptions<SendAssistenceResponseMutation, SendAssistenceResponseMutationVariables>;
export const SendCustomerResponseDocument = gql`
    mutation sendCustomerResponse($payload: MessageInput!) {
  sendMessage(input: $payload) {
    success
    message
    code
  }
}
    `;
export type SendCustomerResponseMutationFn = Apollo.MutationFunction<SendCustomerResponseMutation, SendCustomerResponseMutationVariables>;

/**
 * __useSendCustomerResponseMutation__
 *
 * To run a mutation, you first call `useSendCustomerResponseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCustomerResponseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCustomerResponseMutation, { data, loading, error }] = useSendCustomerResponseMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useSendCustomerResponseMutation(baseOptions?: Apollo.MutationHookOptions<SendCustomerResponseMutation, SendCustomerResponseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCustomerResponseMutation, SendCustomerResponseMutationVariables>(SendCustomerResponseDocument, options);
      }
export type SendCustomerResponseMutationHookResult = ReturnType<typeof useSendCustomerResponseMutation>;
export type SendCustomerResponseMutationResult = Apollo.MutationResult<SendCustomerResponseMutation>;
export type SendCustomerResponseMutationOptions = Apollo.BaseMutationOptions<SendCustomerResponseMutation, SendCustomerResponseMutationVariables>;
export const SendTicketRequestDocument = gql`
    mutation sendTicketRequest($payload: TicketInput!) {
  createTicket(input: $payload) {
    success
    message
    code
  }
}
    `;
export type SendTicketRequestMutationFn = Apollo.MutationFunction<SendTicketRequestMutation, SendTicketRequestMutationVariables>;

/**
 * __useSendTicketRequestMutation__
 *
 * To run a mutation, you first call `useSendTicketRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendTicketRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendTicketRequestMutation, { data, loading, error }] = useSendTicketRequestMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useSendTicketRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendTicketRequestMutation, SendTicketRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendTicketRequestMutation, SendTicketRequestMutationVariables>(SendTicketRequestDocument, options);
      }
export type SendTicketRequestMutationHookResult = ReturnType<typeof useSendTicketRequestMutation>;
export type SendTicketRequestMutationResult = Apollo.MutationResult<SendTicketRequestMutation>;
export type SendTicketRequestMutationOptions = Apollo.BaseMutationOptions<SendTicketRequestMutation, SendTicketRequestMutationVariables>;