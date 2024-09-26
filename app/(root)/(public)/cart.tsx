import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { images, MenuList } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useAuth, useUser } from "@clerk/clerk-expo";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const CartCard = () => {
    
const [count, setCount] = useState(1);
    return(
        <View className="flex flex-row bg-white rounded-xl px-5 py-3 mb-2">
                        <View className="flex w-[25%] h-auto justify-center items-center rounded-full">
                            <Image source={images.product1} className="w-full h-[80px] rounded-sm object-fill"/>
                        </View>
                        <View className="flex grow w-[70%] pl-5 relative">
                            <TouchableOpacity className="absolute right-1 top-1 p-2 border-2 border-gray-200 rounded-lg">
                                <MaterialIcons name="delete" size={20} color="black" />
                            </TouchableOpacity>
                            <Text className="font-Roboto text-xl">Rice</Text>
                            <Text className="font-RobotoMedium text-lg ">1500/25kg</Text>
                            <View className="flex flex-row mt-3 items-center">
                                <Text className="font-Roboto text-base mr-5">Qty</Text>
                                <TouchableOpacity onPress={() => setCount(count + 1)}>
                                    <View className="px-4 py-1 border-2 border-gray-200 rounded-l-lg"><Text className="font-RobotoBold text-xl">+</Text></View>
                                </TouchableOpacity>
                                <View className="px-2 py-1 border-t-2 border-b-2 border-gray-200 "><Text className="font-RobotoMedium text-xl">{count}</Text></View>
                                <TouchableOpacity onPress={() => {if (count > 1) {
                                    setCount(count - 1)
                                }}}>
                                    <View className="px-4 py-1 border-2 border-gray-200 rounded-r-lg"><Text className="font-RobotoBold text-xl">-</Text></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
    )
}


export default function Cart() {
  
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
          title="Order Summary"
          backArrow={true}
          onBack={() => router.back()}
        />
        <View className="relative" style={{height:hp(85)}}>
            <ScrollView>
            <View className="pb-40">
                <View className="mb-2">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </View>
                <View className="p-5 bg-white mb-3">
                    <View><Text className="font-RobotoMedium text-lg mb-3">Price Details</Text></View>
                    <View className="flex flex-row mb-2">
                        <View className="grow"><Text className="text-base">Price (7 items)</Text></View>
                        <View className="flex flex-row items-center"><MaterialIcons name="currency-rupee" size={14} color="black" /><Text className="text-base">4,500</Text></View>
                    </View>
                    <View className="flex flex-row mb-2">
                        <View className="grow"><Text className="text-base">Discount</Text></View>
                        <View className="flex flex-row items-center">
                            <Text className="text-base text-green-600">-</Text>
                            <MaterialIcons name="currency-rupee" size={14} color="#16a34a" />
                            <Text className="text-base text-green-600">4,500</Text>
                        </View>
                    </View>
                    <View className="flex flex-row mb-2">
                        <View className="grow"><Text className="text-base">Coupons for you</Text></View>
                        <View className="flex flex-row items-center"><MaterialIcons name="currency-rupee" size={14} color="black" /><Text className="text-base">4,500</Text></View>
                    </View>
                    <View className="flex flex-row mb-2">
                        <View className="grow"><Text className="text-base">Platform Fee</Text></View>
                        <View className="flex flex-row items-center"><MaterialIcons name="currency-rupee" size={14} color="black" /><Text className="text-base">4,500</Text></View>
                    </View>
                    <View className="flex flex-row mb-2">
                        <View className="grow"><Text className="text-base">Delivery Charges</Text></View>
                        <View className="flex flex-row items-center">
                            <MaterialIcons name="currency-rupee" size={14} color="#16a34a" />
                            <Text className="text-base text-green-600">Free Delivery</Text>
                        </View>
                    </View>
                    <View className="flex flex-row border-gray-200 border-dashed pt-2" style={{borderTopWidth: 1}}>
                        <View className="grow"><Text className="font-RobotoMedium text-base">Total Amount</Text></View>
                        <View className="flex flex-row items-center"><MaterialIcons name="currency-rupee" size={14} color="black" /><Text className="text-base">4,500</Text></View>
                    </View>
                </View>

                <View className="p-5 bg-white">
                    <View><Text className="font-RobotoMedium text-lg mb-3">Deliver to:</Text></View>
                    <View><Text className="font-RobotoMedium text-lg mb-2">Shiva Prasad</Text></View>
                    <View><Text className="font-Roboto text-base mb-2">door no 12/c, ward no 17, near MG Automobiles, Behind kalappa complex, Patel Nagar, Bellary 583101</Text></View>
                    <View><Text className="font-Roboto text-base mb-2">9591499101</Text></View>
                </View>
            </View>
            </ScrollView>
            <View className="absolute bottom-0 flex flex-row w-full px-5 py-4 bg-white justify-center items-center">
                    <View className="grow flex flex-row items-center"><MaterialIcons name="currency-rupee" size={18} color="black" /><Text className="font-RobotoMedium text-2xl">4,500</Text></View>
                    <View className="flex w-[160px]"><CustomButton title="Place Order" classname="py-2" onPress={() => router.push('/(root)/(public)/cartAddress')} /></View>
                </View>
        </View>
      </SafeAreaView>
    </>
  );
}
