import { FlatList, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { images, MenuList } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useAuth, useUser } from "@clerk/clerk-expo";

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
      title: 'Third Item',
      BrandTitle: 'Brand name',
      orginalprice: 212,
      liked:true,
      discount: 10
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
      BrandTitle: 'Brand name',
      orginalprice: 412,
      liked:true,
      discount: 80
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
      BrandTitle: 'Brand name',
      orginalprice: 112,
      liked:true,
      discount: 13
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
      BrandTitle: 'Brand name',
      orginalprice: 412,
      liked:true,
      discount: 80
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
      BrandTitle: 'Brand name',
      orginalprice: 112,
      liked:true,
      discount: 13
    },
  ];

  const ProductCard = (dataItem: any) => {
    return(
        <View className="flex flex-row flex-wrap bg-white p-2 pb-3 rounded-md shadow-md shadow-black my-1.5 mr-4 w-[47.5%]">
            <View className="flex flex-row relative">
              <TouchableOpacity className="p-3 rounded-full absolute bottom-2 right-1.5 z-10 bg-slate-200">
                {dataItem?.dataItem.liked === true? <AntDesign name="heart" size={20} color="#a30f0f" /> : <AntDesign name="hearto" size={20} color="black" />}
              </TouchableOpacity>
              <Image source={images.product1} className="w-full h-[180px] rounded-sm object-fill"/>
            </View>
            <View className="flex flex-row w-[100%] mt-2">
                <View className="grow">
                    <Text className="text-lg font-RobotoMedium">{dataItem?.dataItem?.title}</Text>
                </View>
                <View className="">
                    <Text className="text-md font-Roboto bg-green-800 px-2 py-1 rounded-md text-white">4.0</Text>
                </View>
            </View>
            <View className="flex flex-row"><Text className="text-sm">100rs</Text></View>
            <CustomButton title="Add to cart" className="mt-3"/>
     
        </View>
    )
  }

export default function WishList() {
  
//   const { user } = useUser();
  
//   const { signOut } = useAuth();

  useEffect(() => {
    // console.log(JSON.stringify(user));
  });

//   const onLogout = () => {
//     signOut();
//     router.push('/(auth)/sign-in')
//   }
  return (
    <>
      {/* {Platform.OS === 'ios'? <View className="bg-red-500 w-full h-9"><Text>asas</Text></View> : ''} */}
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        <CustomHeader
          title="Wishlist"
          backArrow={true}
          onBack={() => router.back()}
        />
        {/* <ScrollView> */}
          <View className="px-5 mt-4 mb-44">
            <FlatList data={DATA} numColumns={2} columnWrapperStyle={{justifyContent: 'space-between'}} renderItem={({item}) => <ProductCard dataItem={item}/>} />   
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
}
