import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.replace("/(auth)");
  };

  return <Button title="Logout" onPress={handleLogout} />;
}
