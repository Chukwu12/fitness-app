import React from "react";
import { SafeAreaView, StatusBar, View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BodyParts from "../../components/BodyParts";

export default function WorkoutsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.readyText}>Ready To</Text>
          <Text style={styles.workoutText}>Workout</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.notificationWrapper}>
            <Ionicons name="notifications" size={hp(3)} color="#900" />
          </View>
        </View>
      </View>

      {/* Body Parts */}
      <BodyParts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingVertical: hp(2) },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: wp(5) },
  textContainer: { justifyContent: "space-between" },
  readyText: { fontSize: hp(4.5), fontWeight: "700", letterSpacing: 1, color: "#4B5563", marginBottom: hp(0.5) },
  workoutText: { fontSize: hp(4.5), fontWeight: "700", letterSpacing: 1, color: "#F43F5E" },
  avatarContainer: { justifyContent: "center", alignItems: "center", gap: hp(1) },
  avatar: { height: hp(6), width: hp(6), borderRadius: hp(3) },
  notificationWrapper: { height: hp(5.5), width: hp(5.5), borderRadius: hp(5.5)/2, backgroundColor: "#E5E7EB", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "#D1D5DB" },
});
