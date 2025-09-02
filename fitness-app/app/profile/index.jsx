import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../../components/ImageSlider';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* Header with avatar and notification */}
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.readyText}>Ready To</Text>
          <Text style={styles.workoutText}>Workout</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.notificationWrapper}>
            <Ionicons name="notifications" size={hp(3)} color="#900" />
          </View>
        </View>
      </View>

      {/* Image slider */}
      <View style={styles.sliderContainer}>
        <ImageSlider />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: hp(2),
    justifyContent: 'flex-start',
    gap: hp(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  readyText: {
    fontSize: hp(4.5),
    fontWeight: '700',
    letterSpacing: 1,
    color: '#4B5563', // neutral-700
    marginBottom: hp(0.5),
  },
  workoutText: {
    fontSize: hp(4.5),
    fontWeight: '700',
    letterSpacing: 1,
    color: '#F43F5E', // rose-500
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(1),
  },
  avatar: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3),
  },
  notificationWrapper: {
    height: hp(5.5),
    width: hp(5.5),
    borderRadius: hp(5.5) / 2,
    backgroundColor: '#E5E7EB', // neutral-200
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#D1D5DB', // neutral-300
  },
  sliderContainer: {
    marginHorizontal: wp(5),
    height: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
