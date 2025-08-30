import { View, Text, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edge={['top']}>
      <StatusBar style="dark" />

      {/* header and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            Ready To
          </Text>

          <Text style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            Workout
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image 
            source={require('../../assets/images/avatar.png')}
            style={{ height: hp(6), width: hp(6), borderRadius: hp(3) }} 
          />
          <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height: hp(5.5), width: hp(5.5)}}>
            
            <Ionicons name="notifications" size={hp(3)} color="#900" />
          </View>
        </View>
      </View>

      {/* Image slider */}
      <View>
        <Text>ImageSlider</Text>
      </View>
    </SafeAreaView>
  );
}
