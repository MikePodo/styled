export const PRODUCT_QUERY: string = `
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
