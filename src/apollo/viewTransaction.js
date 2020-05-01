  
import gql from 'graphql-tag';

const VIEW_TRANSACTION = gql`
  query transaction($tnx_id: String!) {
    Transaction(tnx_id: $tnx_id) {
      tnx_id
      description
      user
      date
    }
  }
`;

export default VIEW_TRANSACTION;
