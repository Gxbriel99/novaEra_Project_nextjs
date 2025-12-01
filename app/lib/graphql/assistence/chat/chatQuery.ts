import { gql } from "@apollo/client";

export const GET_CHAT_BY_TICKET = gql`
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


export const SEND_ASSISTENCE_RESPONSE = gql `
  mutation sendAssistenceResponse($payload:MessageInput!){
    sendResponse(input: $payload){
      success,
      message,
      code
    }
  }
`;

export const SEND_CUSTOMER_RESPONSE = gql `
  mutation sendCustomerResponse($payload:MessageInput!){
    sendMessage(input: $payload){
      success,
      message,
      code
    }
  }
`;

