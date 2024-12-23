// import { StyleSheet, Image } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import products from '@/assets/data/product';
// import ProductListItems from '@/components/ProductListItems';
// import { FlatList } from 'react-native';


// export default function TabOneScreen() {
//   return (
    
//     <FlatList data={products} renderItem={({item})=>(

//       <ProductListItems product={item}></ProductListItems>)}
//       numColumns={2}/> //also do container-> flex:1
    
    
//   );
// }

//2
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductListItems from '@/components/ProductListItems';
import { supabase } from '@/supabase'; // Ensure this is correctly set up

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function TabOneScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        setProducts(data as Product[]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItems product={item} />}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container} // This will ensure items are correctly aligned
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
