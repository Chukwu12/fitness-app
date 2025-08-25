import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Image,
} from "react-native";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
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

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Logging in with:", email, password);
    } else {
      console.log("Signing up with:", email, password);
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        source={require("../assets/background/homebg.mp4")}
        rate={1.0}
        volume={0}
        isMuted
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />

      {/* Overlay */}
      <View style={styles.overlay} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Logo (image or fallback text) */}
        <View style={styles.header}>
          <Image
            source={require("../assets/logo.png")} // replace with your logo file
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>Your Expert Coach in Your Pocket</Text>
        </View>

        {/* Login / Signup toggle */}
        <View style={styles.switchContainer}>
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            style={[styles.switchBtn, isLogin && styles.activeBtn]}
          >
            <Text style={[styles.switchText, isLogin && styles.activeText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            style={[styles.switchBtn, !isLogin && styles.activeBtn]}
          >
            <Text style={[styles.switchText, !isLogin && styles.activeText]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Animated Form */}
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
            <Text style={styles.submitText}>
              {isLogin ? "Login" : "Sign Up"}
            </Text>
          </TouchableOpacity>

          {/* Signup/Login redirect text */}
          <Text style={styles.redirectText}>
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <Text style={styles.redirectLink}>
              {isLogin ? "Sign Up" : "Login"}
            </Text>
          </Text>
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Effortless, medical-aware fitness at your fingertips
          </Text>
        </View>
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

  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  switchBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFD700",
    marginHorizontal: 5,
  },
  activeBtn: { backgroundColor: "#FFD700" },
  switchText: { color: "#FFD700", fontWeight: "bold" },
  activeText: { color: "#000" },

  form: {
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  submitText: { color: "#000", fontWeight: "bold", fontSize: 16 },

  redirectText: {
    marginTop: 15,
    color: "#ccc",
    textAlign: "center",
    fontSize: 14,
  },
  redirectLink: { color: "#FFD700", fontWeight: "600" },

  footer: { alignItems: "center", marginTop: 25 },
  footerText: { color: "#ccc", textAlign: "center", fontSize: 13 },
});
