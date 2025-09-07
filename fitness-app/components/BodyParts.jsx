import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { bodyParts } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function BodyParts({}) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: hp(3) }]}>
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  );
}

const BodyPartCard = ({ item, router, index }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({
          pathname: '/exercises',
          params: { bodyPart: item.name, returnTo: '/profile' }
        })}
        style={[styles.card, { width: wp(44), height: hp(52) }]}
      >

        <Image
          source={item.image}
          resizeMode="cover"
          style={[styles.cardImage, { width: wp(44), height: hp(52) }]}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={[styles.gradient, { width: wp(44), height: hp(15) }]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <Text style={[styles.imageName, { fontSize: hp(2.3) }]}>
          {item.name}
        </Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
  },
  title: {
    fontWeight: '600',
    color: '#404040', // neutral-700 equivalent
  },
  flatListContent: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    justifyContent: 'flex-end',
    padding: 16,
    marginBottom: 16,
  },
  cardImage: {
    borderRadius: 35,
    position: 'absolute',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderRadius: 35,
  },
  imageName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
})
