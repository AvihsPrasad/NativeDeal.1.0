import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { images, MenuList } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useAuth, useUser } from "@clerk/clerk-expo";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import InputField from "@/components/InputField";

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


export default function OrderDetails() {
  return (
    <>
      {/* {Platform.OS === 'ios'? <View className="bg-red-500 w-full h-9"><Text>asas</Text></View> : ''} */}
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        <CustomHeader
          title="Payment"
          backArrow={true}
          onBack={() => router.back()}
        />
        <View className="relative" style={{height:hp(85)}}>
            <ScrollView>
            <View className="p-5 bg-white mb-3">
                <View><Text className="font-RobotoMedium text-lg mb-3">Deliver to:</Text></View>
                <View><Text className="font-RobotoMedium text-lg mb-2">Shiva Prasad</Text></View>
                <View><Text className="font-Roboto text-base mb-2">door no 12/c, ward no 17, near MG Automobiles, Behind kalappa complex, Patel Nagar, Bellary 583101</Text></View>
                <View><Text className="font-Roboto text-base mb-2">9591499101</Text></View>
            </View>            
            <View className="p-5 bg-white mb-3">
                    <View className="flex flex-row">
                        <View className="grow"><Text className="font-RobotoMedium text-base">Total Amount</Text></View>
                        <View className="flex flex-row items-center"><MaterialIcons name="currency-rupee" size={14} color="black" /><Text className="text-base">4,500</Text></View>
                    </View>
                </View>
                {/* <View className="p-5 bg-white mb-3">
                    <View><Text className="font-RobotoMedium text-lg mb-3">Deliver to:</Text></View>
                    <View><Text className="font-RobotoMedium text-lg mb-2">Shiva Prasad</Text></View>
                    <View><Text className="font-Roboto text-base mb-2">door no 12/c, ward no 17, near MG Automobiles, Behind kalappa complex, Patel Nagar, Bellary 583101</Text></View>
                    <View><Text className="font-Roboto text-base mb-2">9591499101</Text></View>
                </View> */}
                
                <View className="flex w-full px-5 py-3 bg-white mb-1">
                    <View className="grow flex flex-row items-center mb-2"><Entypo name="credit-card" size={24} color="black" /><Text className="ml-2 font-RobotoMedium text-lg">Credit or Debit card</Text></View>
                    <View className={`flex`}><InputField placeholder='Cerdit/Debit number' value={''} icon={<Entypo name={'credit-card' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} /></View>
                    <View className="flex w-full"><CustomButton title="Place Order" classname="py-2"/></View>
                </View>
                <View className="flex flex-row w-full px-5 py-3 bg-white justify-center items-center mb-1">
                    <View className="grow flex flex-row items-center"><FontAwesome5 name="cc-apple-pay" size={24} color="black" /><Text className="ml-2 font-RobotoMedium text-lg">UPI</Text></View>
                    <View className="flex w-[160px]"><CustomButton title="Place Order" classname="py-2"/></View>
                </View>
                <View className="flex flex-row w-full px-5 py-3 bg-white justify-center items-center mb-1">
                    <View className="grow flex flex-row items-center"><MaterialCommunityIcons name="cash" size={24} color="black" /><Text className="ml-2 font-RobotoMedium text-lg">COD</Text></View>
                    <View className="flex w-[160px]"><CustomButton title="Place Order" classname="py-2"/></View>
                </View>
            </ScrollView>
            {/* <View className="absolute bottom-0 flex flex-row w-full px-5 py-4 bg-white justify-center items-center">
                    <View className="grow flex flex-row items-center"><MaterialIcons name="currency-rupee" size={18} color="black" /><Text className="font-RobotoMedium text-2xl">4,500</Text></View>
                    <View className="flex w-[160px]"><CustomButton title="Place Order" classname="py-2"/></View>
                </View> */}
        </View>
      </SafeAreaView>
    </>
  );
}
