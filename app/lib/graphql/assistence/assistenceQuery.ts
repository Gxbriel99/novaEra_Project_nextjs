import { gql } from "@apollo/client";

export const GET_TICKETS_LIST = gql`
  query {
    ticketsList {
      id
      object
      description
    }
  }
`;


export const GET_USER_TICKETS = gql`
  query GetUserTickets($email: String!) {
    userTicketsList(email: $email) {
      id
      object
      description
    }
  }
`;
