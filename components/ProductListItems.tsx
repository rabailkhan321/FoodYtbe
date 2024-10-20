
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
  <Text style={styles.price}>${product.price}</Text>
  </Pressable>
  </Link>


        
    )


}
export default ProductListItems
const styles = StyleSheet.create({
    container: {
   
      backgroundColor:'white',
      borderRadius: 20,
      padding:10,
      flex:1,
      maxWidth:'50%',
      margin:5 //there are other ways of doing that as well chapter flatlist implemetnation 51:10
  
    },
    title:{
      fontSize:18,
      fontWeight:700,
      marginVertical: 10 //i dont know about  it 
     
     },
  
     price:{
      color:'blue',
      fontWeight:'bold'
     },
    image:{
      // height: 100,
      // width: 100
      width: '100%',
      aspectRatio:1
      }
  });
  