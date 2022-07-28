import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser() {
    username
    email
    password
  }
`;

export const CREATE_BOOK =gql`
  mutation createBook() {
   authors
   description
   bookId
   image
   link
   title
  }
`;