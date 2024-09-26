import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { HomeSwiperImages } from "@/constants";
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import Card from "@/components/Card";

const swiperDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#E2E8F0] rounded-full" />;
};
const swiperActiveDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#32357a] rounded-full" />;
};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    BrandTitle: 'Brand name',
    orginalprice: 100,
    discount: 10
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    BrandTitle: 'Brand name',
    orginalprice: 200,
    liked:true,
    discount: 10
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
    BrandTitle: 'Brand name',
    orginalprice: 132,
    liked:false,
    discount: 10
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'four Item',
    BrandTitle: 'Brand name',
    orginalprice: 212,
    liked:true,
    discount: 10
  },
];
export default function Home() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useUser();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        <ScrollView>
          <View>
            <CustomHeader
              title="Home"
              home={true}
              user={user?.username + ''}
              userImage={user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl}
              onNotification={() => router.push("/(root)/(public)/notification")}
              onWishList={() => router.push("/(root)/(public)/wishlist")}
              onSearch={() => router.push("/(root)/(public)/cart")}
            />
            <View className="mb-4 rounded-md">
              <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={true}
                height={160}
                dot={swiperDot()}
                activeDot={swiperActiveDot()}
                onIndexChanged={(index) => setActiveIndex(index)}
              >
                {HomeSwiperImages.map((item: any, index) => (
                  <View key={index} className="h-[160px] rounded-md justify-start items-start bg-slate-400">
                    <Image
                      className="w-full h-[160px] rounded-md object-fill"
                      source={item.url}
                      resizeMode="contain"
                    />
                  </View>
                ))}
              </Swiper>
            </View>
          </View>
          <View className="flex mb-5 px-5 ">
            <View className="flex flex-row justify-center mb-5">
              <Text className="grow font-RobotoBold text-2xl">Category</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <MaterialCommunityIcons name="seed" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">Groceries</Text>
              </View>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <FontAwesome name="book" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">Books</Text>
              </View>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <FontAwesome5 name="mobile" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">Electronics</Text>
              </View>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <FontAwesome5 name="medkit" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">Medical</Text>
              </View>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <FontAwesome name="automobile" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">Auto</Text>
              </View>
              <View className="w-24 h-28 bg-[#d1d4fb] justify-center items-center rounded-lg mr-4">
                <Entypo name="grid" size={34} color="#32357a" />
                <Text className="font-RobotoMedium text-base mt-2">More</Text>
              </View>
            </ScrollView>
          </View>
          <View className="bg-white px-5 pt-5 pb-8 shadow-xl">
            <View className="flex flex-row justify-center">
              <Text className="grow font-RobotoBold text-2xl">Popular Products</Text>
              <Text className="font-RobotoMedium text-md py-2 text-gray-400">View All</Text>
            </View>
            <View className="flex gap-5 flex-row flex-wrap pt-5">
              {DATA.map((item) => <View className="flex w-[43.9%]" key={item.id}>
                <Card dataItem={item} />
              </View>)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
