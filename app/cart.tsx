import { View, Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '@/provider/CartProvider'
const cartScreen = () => {
  const {items} = useContext(CartContext)
  return (
    <View>
      <Text>cart items legth:{items.length}</Text>
    </View>
  )
}

export default cartScreen