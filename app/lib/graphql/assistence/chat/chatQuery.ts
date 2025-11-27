import { gql } from "@apollo/client";

export const GET_CHAT_BY_TICKET = gql`
  query GetChat($assistence_request_id: Int!) {
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


