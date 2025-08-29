import { useState, useRef, useEffect } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  Dimensions, KeyboardAvoidingView, Platform, Animated, Image,
} from "react-native";
import { Video } from "expo-av";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSubmit = async () => {
    // Mock authentication for now
    if (email && password) {
      await AsyncStorage.setItem('userToken', 'loggedIn'); // store token
      router.replace("(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/background/homebg.mp4")}
        rate={1.0}
        volume={0}
        isMuted
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>Your Expert Coach in Your Pocket</Text>
        </View>

        <View style={styles.switchContainer}>
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            style={[styles.switchBtn, isLogin && styles.activeBtn]}
          >
            <Text style={[styles.switchText, isLogin && styles.activeText]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            style={[styles.switchBtn, !isLogin && styles.activeBtn]}
          >
            <Text style={[styles.switchText, !isLogin && styles.activeText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.form, { opacity: fadeAnim }]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>{isLogin ? "Login" : "Sign Up"}</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  video: { ...StyleSheet.absoluteFillObject },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.4)" },
  header: { alignItems: "center", marginBottom: 20 },
  logoImage: { width: 120, height: 120, marginBottom: 10 },
  tagline: { fontSize: 16, color: "#fff", textAlign: "center" },
  switchContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  switchBtn: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, borderWidth: 1, borderColor: "#FFD700", marginHorizontal: 5 },
  activeBtn: { backgroundColor: "#FFD700" },
  switchText: { color: "#FFD700", fontWeight: "bold" },
  activeText: { color: "#000" },
  form: { width: width * 0.8, alignSelf: "center", backgroundColor: "rgba(255,255,255,0.08)", padding: 20, borderRadius: 12 },
  input: { backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", padding: 15, borderRadius: 10, marginBottom: 15 },
  submitBtn: { backgroundColor: "#FFD700", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 5 },
  submitText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});
