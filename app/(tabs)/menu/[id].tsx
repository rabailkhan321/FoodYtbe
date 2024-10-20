// import { View, Text } from 'react-native'
// import React from 'react'
// import { Stack, useLocalSearchParams } from 'expo-router'
// import products from '@/assets/data/product'
// const productDetailScreen = () => {
//   const {id} = useLocalSearchParams()

//   return (

//     <View>
//       <Stack.Screen options={{title:'details '+ id}}></Stack.Screen>
//       <Text>displayind details fors id {id}</Text>
//     </View>
//   )
// }

// export default productDetailScreen


//working with products 
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/product'
import { defaultImage } from '@/components/ProductListItems'
import Button from '@/components/Button'
const productDetailScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find(p => p.id.toString() == id)

  const [selectedsize, setSelectedSize] = useState('S')
  const sizes = ['S', 'M', 'L', 'XL'];

  function setCart(){
    console.warn('added to cart ' + selectedsize)
  }
  if (!product) {
    return (

      <Text> Product not found</Text> //to get rid of ugly ? in title:product?.name

    )
  }

  return (


    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }}></Stack.Screen>
      {/* <Text>displaying details fors id {id}</Text> */}
      <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
      <Text style={styles.text}> {product.name}</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable onPress={()=>{setSelectedSize(size)}} key={size} style={[styles.size, { backgroundColor: selectedsize===size?'gainsboro':'white'}] }> 
            <Text style={[styles.sizeText, {color :selectedsize===size? 'black':'gray'}]}>{size}</Text> 
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}> price: ${product.price}</Text>


      <Button text='add to cart' onPress={setCart}></Button>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1

  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:'auto'
  },
  text: {
    fontSize: 18
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10

  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'

  },
  sizeText:{
    fontSize:20,
    fontWeight:'500'
  }
})

export default productDetailScreen