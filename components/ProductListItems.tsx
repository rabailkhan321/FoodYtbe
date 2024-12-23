
import { StyleSheet, Image, Pressable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import products from '@/assets/data/product';
import { Product } from '@/types';
import { Link } from 'expo-router';


export const defaultImage=  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png'
type ProductListItemProps = {
  product: Product;

}
const ProductListItems=({product}: ProductListItemProps)=>{

    return(     
     
  //           <View style={styles.container}>
  //   <Image source={{uri: product.image || defaultImage }} style={styles.image} resizeMode='contain' />
  //   <Text style={styles.title}> {product.name}</Text>
  //   <Text style={styles.price}>${product.price}</Text>
  //   <Link href={"/product"}>go to screen</Link>
  // </View>

//creating screens with expo router on entire view (NOT just text )

<Link href={`/menu/${product.id}`} asChild>
  <Pressable style={styles.container}>
  <Image source={{uri: product.image || defaultImage }} style={styles.image} resizeMode='contain' />
  <Text style={styles.title}> {product.name}</Text>
  <Text style={styles.price}>Rs {product.price}</Text>
  </Pressable>
  </Link>


        
    )


}
export default ProductListItems
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    maxWidth: '48%',
    margin: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  price: {
    color: '#4caf50',
    fontWeight: '600',
    fontSize: 14,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
  