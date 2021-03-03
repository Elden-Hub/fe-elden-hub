import { gql } from "apollo-boost";

export const googleAuthMutation = gql`
  mutation Google($code: String!) {
    googleSignIn(code: $code)
  }
`;

//  {
//       id
//       email
//       firstName
//       lastName
//       displayName
//       email
//       avatar
//       confirmed
//     }
