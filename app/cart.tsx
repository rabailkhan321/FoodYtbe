import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import {useCart} from '@/provider/CartProvider'
import CartListItem from '@/components/CartListItem'
const cartScreen = () => {
  const {items} = useCart()
  return (
    <View>
      <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item}/>}
      contentContainerStyle={{padding:10, gap: 10}} />
    </View>
  )
}

export default cartScreen