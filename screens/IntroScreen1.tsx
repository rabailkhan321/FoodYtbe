

//2
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function IntroScreen1({ onNext }: { onNext: () => void }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the App!</Text>
//       <Text style={styles.text}>This is Intro Screen 1.</Text>
//       <Button title="Next" onPress={onNext} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

//3 intro screen with styling 
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Sample image import (Replace with your own image or URL)

const IntroScreen1 = ({ onNext }: { onNext: () => void }) => {
  return (
    <View style={styles.container}>
      {/* Image on top */}
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcRuvJXWnjQgcXrlYGQ5oNqvF6bOVumrSqA&s" }}
        style={styles.image}
        resizeMode="contain"  // Apply resizeMode separately
      />

      {/* Heading */}
      <Text style={styles.heading}>Welcome to Our App</Text>

      {/* Subheading */}
      <Text style={styles.subheading}>Your journey begins here</Text>

      {/* Descriptive Text */}
      <Text style={styles.description}>
      Looking for the perfect laptop to match your needs? You've 
      come to the right place! At LaptopHub, we offer a wide selection
      of high-performance laptops that cater to all kinds of users, 
      from students to professionals and gamers. 

</Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color
  },
  image: {
    width: '100%',  // Full width
    height: 250,    // Fixed height, adjust based on your image
    marginBottom: 30,  // Space between the image and text
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',  // Dark color for contrast
    textAlign: 'center',
    marginBottom: 10,  // Space between heading and subheading
  },
  subheading: {
    fontSize: 20,
    color: '#777', // Lighter color for subheading
    textAlign: 'center',
    marginBottom: 20,  // Space between subheading and description
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40, // Space between description and button
    lineHeight: 22,  // Better readability for text
  },
  button: {
    backgroundColor: '#FF69B4',  // Pink color for the button (HotPink)
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,  // Rounded corners
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',  // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IntroScreen1;
