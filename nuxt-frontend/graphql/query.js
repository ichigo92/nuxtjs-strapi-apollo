import gql from 'graphql-tag';

export const restaurantsQuery = gql`
  query restaurantsQuery {
    restaurants {
      id
      name
      categories {
        id
        name
      }
    }
  }
`;

export const messageQuery = gql `
query messageQuery {
  messages {
    greetings
    id
  }
}
`;
