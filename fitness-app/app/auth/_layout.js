// import { Stack } from "expo-router";
// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function RootLayout() {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);

//   useEffect(() => {
//     const checkLogin = async () => {
//       const token = await AsyncStorage.getItem("userToken");
//       setIsLoggedIn(!!token);
//     };
//     checkLogin();
//   }, []);

//   if (isLoggedIn === null) {
//     return null; // can replace with a Splash screen
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {isLoggedIn ? (
//         <Stack.Screen name="(tabs)" />
//       ) : (
//         <Stack.Screen name="(auth)" />
//       )}
//     </Stack>
//   );
// }
