import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';
import VIEW_TRANSACTION from '../apollo/viewTransaction';

const ViewTransaction = props => {
  const {tnx_id} = props.route.params;
  const [card, setCard] = useState({});
  const {loading, data, error} = useQuery(VIEW_TRANSACTION, {variables: {
    tnx_id
  }});

  useEffect(() => {
    if (!loading) {
      if (data) {
        const {Transaction} = data;
        setCard(Transaction);
      }

      if (error) {
        console.log(error, 'err')
      }
    }
  }, [loading, data, error])

  return (
    <ScrollView>
      <View style={{backgroundColor: '#7c53B0', height: 250}}>
        <View style={{padding: 20, paddingTop: 100}}>
          <Text style={{color: '#fff', fontSize: 14}}>{card.tnx_id}</Text>
          <Text style={{color: '#fff', fontSize: 20}}>{card.user}</Text>
          <Text style={{color: '#fff', fontSize: 14}}>{moment(Number(card.date)).format('Do, MMMM YYYY')}</Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text>{card.description}</Text>
      </View>
    </ScrollView>
  )
}

export default ViewTransaction;