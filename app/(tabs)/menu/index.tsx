import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import products from '@/assets/data/product';
import ProductListItems from '@/components/ProductListItems';
import { FlatList } from 'react-native';


export default function TabOneScreen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}> pizza</Text>
    //   <Text style={styles.price}>$12.99</Text>
    // </View>

    //  <View style={styles.container}>
    //   <Image source={{uri: product.image}} style={styles.image} />
    //   <Text style={styles.title}> {product.name}</Text>
    //   <Text style={styles.price}>${product.price}</Text>
    // </View>


    //custom component creation 
    // <>
    //  <ProductListItems product={products[0]}></ProductListItems>
    //  <ProductListItems product={products[1]}></ProductListItems>
    // </>
   
    //flatlist for scrolling
    <FlatList data={products} renderItem={({item})=>(

      <ProductListItems product={item}></ProductListItems>)}
      numColumns={2}/> //also do container-> flex:1
    
    
  );
}
