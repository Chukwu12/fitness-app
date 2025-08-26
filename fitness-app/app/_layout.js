import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
          headerShown: false,
        tabBarActiveTintColor: "#FFD700", 
        tabBarInactiveTintColor: "#AAB7B8", 
        tabBarStyle: {
          backgroundColor: "#000", 
          borderTopWidth: 1,
          borderTopColor: "#333",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginBottom: -3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#2E86DE",
                    marginBottom: 2,
                  }}
                />
              )}
              <Ionicons name="home-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      
    </Tabs>
  );
}
