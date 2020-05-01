import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import TRANSACTIONS from '../apollo/transactions';

const Home = (props) => {
  const [cards, setCards] = useState([]);
  const {loading, data, error} = useQuery(TRANSACTIONS);

  useEffect(() => {
    if (!loading) {
      if (data) {
        const {AllTransactions} = data;
        setCards(AllTransactions);
      }

      if (error) {
        console.log(error, 'err')
      }
    }
  }, [loading, data, error])

  const renderCards = ({item, index}) => {
    const mod = index + 1;
    let marginRightMod = 0;
    let marginLeftMod = 0;
    if (mod%2 === 0) {
      marginRightMod = 0;
      marginLeftMod = '2.5%'
    } else {
      marginRightMod = '2.5%';
      marginLeftMod = 0;
    }
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          height: 200,
          width: '47.5%',
          marginRight: marginRightMod,
          marginLeft: marginLeftMod,
          marginBottom: 15,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5
        }}
        onPress={() => props.navigation.navigate('ViewTransaction', {tnx_id: item.tnx_id})}>
        <View>
          <Image source={require('../assets/images/purple_transaction.png')} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#7c53B0', fontSize: 16}}>{item.user}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView style={{padding: 20}}>
      <View style={{marginBottom: 20}}>
        <Text style={{color: '#7c53B0', fontSize: 20, letterSpacing: 5}}>CODE CREDIT</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={cards}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderCards}
          numColumns={2}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

export default Home;
