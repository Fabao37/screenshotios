import { Image, View } from 'react-native';

export default function Logo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
}




// import { Entypo, FontAwesome } from "@expo/vector-icons"; // ou use react-native-vector-icons
// import React from "react";
// import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";

// const { width, height } = Dimensions.get("window");

// const CardUser = () => {
//   return (
//     <View style={styles.container}>

//       {/* Alterne para poder tirar o print da imagem da mulher e do homem */}
//       <Image source={require('../../assets/images/mulher.png')} style={styles.image} />
//       {/* <Image source={require('../../assets/images/homem.jpg')} style={styles.image} /> */}


//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Entypo name="cross" size={40} color="#ff0066" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <FontAwesome name="star" size={32} color="#4aa3ff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Entypo name="heart" size={40} color="#00cc66" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CardUser;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//   },
//   image: {
//     width: width,
//     height: height,
//     resizeMode: "cover",
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   button: {
//     backgroundColor: "#fff",
//     borderRadius: 50,
//     padding: 15,
//     elevation: 5,
//   },
// });




// import { AntDesign, Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import {
//   Keyboard,
//   SafeAreaView, StyleSheet,
//   Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,
//   View
// } from 'react-native';


// const Login = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);


//   return (
//     <SafeAreaView style={styles.container}>

//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

//         <View style={styles.containerContent}>
//           <View style={{ paddingBottom: 70 }}>
//             <Text style={{
//               fontSize: 40,
//               fontWeight: '400',
//               letterSpacing: 2,
//               color: '#06b6d4',
//               //fontFamily: 'Pacifico_400Regular',
//             }}>
//               evǝnto
//             </Text>
//           </View>
//           <View style={styles.content}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 placeholder='e-mail'
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   setEmailError('');
//                 }}
//                 style={styles.input}
//               />
//               <View style={{ paddingTop: 25 }}>
//                 {emailError ? <Text style={{ color: 'red', bottom: 18 }}>{emailError}</Text> : null}
//               </View>
//             </View>
//             <View style={styles.inputContainer}>

//               <TextInput
//                 secureTextEntry={!showPassword}
//                 value={password}
//                 placeholder='Senha'
//                 onChangeText={(text) => {
//                   setPassword(text);
//                   setPasswordError('');
//                 }}
//                 style={styles.input}
//               />
//               <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
//                 <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color='gray' />
//               </TouchableOpacity>
//               <View style={{ paddingTop: 25 }}>
//                 {passwordError ? <Text style={{ color: 'red', bottom: 18 }}>{passwordError}</Text> : null}
//               </View>
//             </View>
//             <TouchableOpacity
//               style={styles.button}

//             >
//               <AntDesign name='arrowright' color='white' size={25} />
//             </TouchableOpacity>
//           </View>
//           <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
//             <TouchableOpacity
//             >
//               <Text style={styles.text}>
//                 Criar conta
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity

//             >
//               <Text style={styles.text}>
//                 Esqueci minha senha
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//       </TouchableWithoutFeedback>

//     </SafeAreaView >
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   containerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 30,
//     //fontFamily: 'Poppins_500Medium',
//     color: '#06b6d4',
//     marginBottom: 6
//   },
//   content: {
//     width: '100%',
//     padding: 20
//   },

//   input: {
//     flexDirection: "row",
//     backgroundColor: 'rgba(0,0,0,0.1)',
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     gap: 10,
//     //fontFamily: 'Poppins_400Regular',
//   },
//   text: {
//     color: '#06b6d4',
//     //fontFamily: 'Poppins_400Regular',
//     fontSize: 14,
//   },
//   entrar: {
//     //fontFamily: 'Poppins_400Regular',
//     fontSize: 18,
//     color: 'white',
//   },
//   subText: {
//     //fontFamily: 'Poppins_400Regular',
//     fontSize: 14,
//   },

//   button: {
//     flexDirection: "row",
//     backgroundColor: '#06b6d4',
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 8,
//     marginTop: 32
//   },
//   textBottom: {
//     flexDirection: 'row',

//   },
//   inputContainer: {
//     marginVertical: 10,
//   },
//   iconContainer: {
//     position: 'absolute',
//     right: 10,
//     top: 10
//   },

// })

