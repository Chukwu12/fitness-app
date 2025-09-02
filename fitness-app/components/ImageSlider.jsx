// components/ImageSlider.jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ImageSlider() {
  const sliderWidth = wp(100);        // full screen width
  const itemWidth = wp(80);           // item takes 80% width, leaving space for peek
  const sliderHeight = hp(25);        // height of carousel

  return (
    <Carousel
      loop
      width={sliderWidth}
      height={sliderHeight}
      autoPlay
      autoPlayInterval={3000}
      scrollAnimationDuration={800}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      data={sliderImages}
      renderItem={({ item }) => (
        <View style={[styles.item, { width: itemWidth, height: sliderHeight }]}>
          <Image source={item} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
