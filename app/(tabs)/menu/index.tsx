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

//2 without intro screen
// import { useEffect, useState } from 'react';
// import { StyleSheet, FlatList, View, Text } from 'react-native';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase'; // Ensure this is correctly set up

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function TabOneScreen() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <ProductListItems product={item} />}
//       numColumns={2}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container} // This will ensure items are correctly aligned
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

 



//4 with 3 intro screen without reset
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IntroScreen1 from '@/screens/IntroScreen1';
// import IntroScreen2 from '@/screens/IntroScreen2';
// import IntroScreen3 from '@/screens/IntroScreen3';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
//   const [currentIntroScreen, setCurrentIntroScreen] = useState(0);

//   useEffect(() => {
//     const checkIntroStatus = async () => {
//       const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
//       setHasSeenIntro(seenIntro ? true : false);
//     };

//     checkIntroStatus();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     if (hasSeenIntro === true) fetchProducts();
//   }, [hasSeenIntro]);

//   const handleIntroNext = () => {
//     setCurrentIntroScreen(currentIntroScreen + 1);
//   };

//   const handleIntroDone = async () => {
//     await AsyncStorage.setItem('hasSeenIntro', 'true');
//     setHasSeenIntro(true);
//   };

//   if (hasSeenIntro === null) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (!hasSeenIntro) {
//     if (currentIntroScreen === 0) {
//       return <IntroScreen1 onNext={handleIntroNext} />;
//     } else if (currentIntroScreen === 1) {
//       return <IntroScreen2 onNext={handleIntroNext} />;
//     } else {
//       return <IntroScreen3 onDone={handleIntroDone} />;
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <ProductListItems product={item} />}
//       numColumns={2}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


//5 3intro screen with reset
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IntroScreen1 from '@/screens/IntroScreen1';
// import IntroScreen2 from '@/screens/IntroScreen2';
// import IntroScreen3 from '@/screens/IntroScreen3';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
//   const [currentIntroScreen, setCurrentIntroScreen] = useState(0);

//   useEffect(() => {
//     const checkIntroStatus = async () => {
//       const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
//       setHasSeenIntro(seenIntro ? true : false);
//     };

//     checkIntroStatus();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     if (hasSeenIntro === true) fetchProducts();
//   }, [hasSeenIntro]);

//   const handleIntroNext = () => {
//     setCurrentIntroScreen(currentIntroScreen + 1);
//   };

//   const handleIntroDone = async () => {
//     await AsyncStorage.setItem('hasSeenIntro', 'true');
//     setHasSeenIntro(true);
//   };

//   const resetIntroScreens = async () => {
//     await AsyncStorage.removeItem('hasSeenIntro');
//     setHasSeenIntro(false);
//     setCurrentIntroScreen(0);
//   };

//   if (hasSeenIntro === null) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (!hasSeenIntro) {
//     if (currentIntroScreen === 0) {
//       return <IntroScreen1 onNext={handleIntroNext} />;
//     } else if (currentIntroScreen === 1) {
//       return <IntroScreen2 onNext={handleIntroNext} />;
//     } else {
//       return <IntroScreen3 onDone={handleIntroDone} />;
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         renderItem={({ item }) => <ProductListItems product={item} />}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productContainer}
//       />
//       <Button
//         title="Show Intro Screens Again"
//         onPress={resetIntroScreens}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productContainer: {
//     paddingBottom: 20,
//   },
// });


//with reset
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IntroScreen1 from '@/screens/IntroScreen1';
import IntroScreen2 from '@/screens/IntroScreen2';
import IntroScreen3 from '@/screens/IntroScreen3';
import ProductListItems from '@/components/ProductListItems';
import { supabase } from '@/supabase';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  const [currentIntroScreen, setCurrentIntroScreen] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'lowToHigh' | 'highToLow' | null>(null);

  useEffect(() => {
    const checkIntroStatus = async () => {
      const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
      setHasSeenIntro(seenIntro ? true : false);
    };

    checkIntroStatus();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        setProducts(data as Product[]);
        setFilteredProducts(data as Product[]);
      }
      setLoading(false);
    };

    if (hasSeenIntro === true) fetchProducts();
  }, [hasSeenIntro]);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === 'lowToHigh') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, sortOrder, products]);

  const handleIntroNext = () => {
    setCurrentIntroScreen(currentIntroScreen + 1);
  };

  const handleIntroDone = async () => {
    await AsyncStorage.setItem('hasSeenIntro', 'true');
    setHasSeenIntro(true);
  };

  const resetIntroScreens = async () => {
    await AsyncStorage.removeItem('hasSeenIntro');
    setHasSeenIntro(false);
    setCurrentIntroScreen(0);
  };

  if (hasSeenIntro === null) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!hasSeenIntro) {
    if (currentIntroScreen === 0) {
      return <IntroScreen1 onNext={handleIntroNext} />;
    } else if (currentIntroScreen === 1) {
      return <IntroScreen2 onNext={handleIntroNext} />;
    } else {
      return <IntroScreen3 onNext={handleIntroDone} />;
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setSortOrder('lowToHigh')}
        >
          <Text style={styles.filterButtonText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setSortOrder('highToLow')}
        >
          <Text style={styles.filterButtonText}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductListItems product={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productContainer}
      />
      <Button title="Home Page"  color="#FFC0CB" onPress={resetIntroScreens} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  productContainer: {
    paddingBottom: 20,
  },
});
