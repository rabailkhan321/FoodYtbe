


//working with products correct code
// import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
// import React, { useState } from 'react'
// import { Stack, useLocalSearchParams } from 'expo-router'
// import products from '@/assets/data/product'
// import { defaultImage } from '@/components/ProductListItems'
// import Button from '@/components/Button'
// const productDetailScreen = () => {
//   const { id } = useLocalSearchParams()
//   const product = products.find(p => p.id.toString() == id)

//   const [selectedsize, setSelectedSize] = useState('1Tb')
//   const sizes = ['64Gb', '1Tb', '2Tb', '4Tb'];

//   function setCart(){
//     console.warn('added to cart ' + selectedsize)
//   }
//   if (!product) {
//     return (

//       <Text> Product not found</Text> //to get rid of ugly ? in title:product?.name

//     )
//   }

//   return (


//     <View style={styles.container}>
//       <Stack.Screen options={{ title: product.name }}></Stack.Screen>
//       {/* <Text>displaying details fors id {id}</Text> */}
//       <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
//       <Text style={styles.text}> {product.name}</Text>
//       <View style={styles.sizes}>
//         {sizes.map(size => (
//           <Pressable onPress={()=>{setSelectedSize(size)}} key={size} style={[styles.size, { backgroundColor: selectedsize===size?'gainsboro':'white'}] }> 
//             <Text style={[styles.sizeText, {color :selectedsize===size? 'black':'gray'}]}>{size}</Text> 
//           </Pressable>
//         ))}
//       </View>
//       <Text style={styles.price}> price: Rs {product.price}</Text>
   


//       <Button text='add to cart' onPress={setCart}></Button>

//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1

//   },
//   image: {
//     width: '100%',
//     aspectRatio: 1
//   },
//   price: {
//     color: 'blue',
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginTop:'auto'
//   },
//   text: {
//     fontSize: 18
//   },
//   sizes: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10

//   },
//   size: {
//     backgroundColor: 'gainsboro',
//     width: 50,
//     aspectRatio: 1,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center'

//   },
//   sizeText:{
//     fontSize:20,
//     fontWeight:'500'
//   }
// })

// export default productDetailScreen

import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/product'
import { defaultImage } from '@/components/ProductListItems'
import Button from '@/components/Button'
import { useCart } from '@/provider/CartProvider'
import { PizzaSize } from '@/types'
const productDetailScreen = () => {
  const { id } = useLocalSearchParams()
  const {addItem } = useCart();
  const product = products.find(p => p.id.toString() == id)

  const [selectedsize, setSelectedSize] = useState<PizzaSize>('1Tb')
  const sizes : PizzaSize[]= ['64Gb', '1Tb', '2Tb', '4Tb']

  function setCart(){
    if(!product){
      return;
    }
    addItem(product, selectedsize);
  }

  if (!product) {
    return (
      <Text>Product not found</Text>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
      <Text style={styles.text}>{product.name}</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable
            onPress={() => { setSelectedSize(size) }}
            key={size}
            style={[styles.size, { backgroundColor: selectedsize === size ? 'gainsboro' : 'white' }]} >
            <Text style={[styles.sizeText, { color: selectedsize === size ? 'black' : 'gray' }]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>Price Starting from: Rs {product.price}</Text>

      {/* Table inserted here */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Feature</Text>
          <Text style={styles.tableHeader}>Details</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Memory</Text>
          <Text style={styles.tableCell}>{selectedsize}</Text>
        </View>
        {/* Removed Price Row from table */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Color</Text>
          <Text style={styles.tableCell}>Black</Text>
        </View>
        {/* Added new features */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Processor</Text>
          <Text style={styles.tableCell}>Intel Core i7 13th Generation i7-13620H</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Installed RAM</Text>
          <Text style={styles.tableCell}>16GB</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Screen Size</Text>
          <Text style={styles.tableCell}>15.6 Inch</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Operating System</Text>
          <Text style={styles.tableCell}>Windows 11</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Backlight</Text>
          <Text style={styles.tableCell}>LED</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Screen Surface</Text>
          <Text style={styles.tableCell}>15.6 inch diagonal FHD, 1920 x 1080, 9 ms response time, IPS, micro-edge, anti-glare 45% NTSC</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Aspect Ratio</Text>
          <Text style={styles.tableCell}>16:9</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Screen Resolution</Text>
          <Text style={styles.tableCell}>1920 x 1080</Text>
        </View>
      </View>

      <Button text="Add to Cart" onPress={setCart} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10
  },
  text: {
    fontSize: 18,
    marginVertical: 10
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
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  },
  table: {
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14
  }
})

export default productDetailScreen
