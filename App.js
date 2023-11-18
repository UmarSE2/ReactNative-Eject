// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{ textAlign: "center" }}>Open up App.js or index.js to start on your app hello nice!</Text>
//       <Image source={require("./assets/favicon.png")} alt='image' width={200} height={200}
//         style={{ marginTop: 30 }} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { Video } from 'expo-av';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>
        Open up App.js or index.js to start on your app hsello nice!
      </Text>

      {/* Add an icon */}
      <Icon name="rocket" type="font-awesome" size={30} style={{ marginTop: 20 }} />

      {/* Add an image */}
      <Image
        source={require('./assets/favicon.png')}
        alt="image"
        style={{ width: 100, height: 100, marginTop: 20 }}
      />

      {/* Add a video player */}
      <Video
        source={{ uri: 'https://www.example.com/sample.mp4' }} // replace with your video URL
        style={{ width: 300, height: 200, marginTop: 20 }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />

      <StatusBar style="auto" />
    </View>
  );
}
