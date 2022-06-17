export const PRODUCT_QUERY: String = `
  query {
    products {
      data {
        attributes {
          title
          description
          price
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
