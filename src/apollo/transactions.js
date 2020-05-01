  
import gql from 'graphql-tag';

const TRANSACTIONS = gql`
  query transactions {
    AllTransactions {
      tnx_id
      description
      user
      date
    }
  }
`;

export default TRANSACTIONS;
