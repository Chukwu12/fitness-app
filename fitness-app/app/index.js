import { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Animation value
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
      // handle login logic
      console.log("Logging in with:", email, password);
    } else {
      // handle signup logic
      console.log("Signing up with:", email, password);
    }
  };

  return (
        <View style={styles.container}>
      {/* Background Video */}
      <Video
        source={require("../assets/background/homebg.mp4")} // replace with your video file
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
      <View style={styles.header}>
        <Text style={styles.logo}>🏋️‍♂️ Kristie Fitness App</Text>
        <Text style={styles.tagline}>Your Expert Coach in Your Pocket</Text>
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={() => setIsLogin(true)} style={[styles.switchBtn, isLogin && styles.activeBtn]}>
          <Text style={[styles.switchText, isLogin && styles.activeText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(false)} style={[styles.switchBtn, !isLogin && styles.activeBtn]}>
          <Text style={[styles.switchText, !isLogin && styles.activeText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>{isLogin ? "Login" : "Sign Up"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Effortless, medical-aware fitness at your fingertips</Text>
      </View>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
    justifyContent: "center"
  },
  video: {
    ...StyleSheet.absoluteFillObject, // fills entire screen
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent overlay
  },
  content: {
    flex: 1,
    justifyContent: "center",
       alignItems: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
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
    width: width * 0.8, // 80% of screen width
    alignSelf: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  submitBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  footer: { alignItems: "center", marginTop: 20 },
  footerText: { color: "#ccc", textAlign: "center" },
});