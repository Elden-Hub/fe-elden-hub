import { gql } from "apollo-boost";

export const meQuery = gql`
  query {
    me {
      id
      email
      firstName
      lastName
      displayName
      avatar
      confirmed
      role
    }
  }
`;
