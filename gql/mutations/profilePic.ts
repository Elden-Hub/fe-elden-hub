import { gql } from "apollo-boost";

export const addProfilePictureMutation = gql`
  mutation AddProfilePicture($picture: GraphQLUpload!) {
    addProfilePicture(picture: $picture)
  }
`;
