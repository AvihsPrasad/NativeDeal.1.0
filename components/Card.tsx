import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons, images } from "@/constants";
import { formatTime } from "@/lib/utils";
import { DriverCardProps } from "@/types/type";
import CustomButton from "./CustomButton";

const Card = (dataItem: any) => {
  return(
      <View className="flex bg-white p-2 pb-3 rounded-md shadow-md shadow-black my-1.5 mr-4 w-full">
          <View className="flex">
            {/* <TouchableOpacity className="p-3 rounded-full absolute bottom-2 right-1.5 z-10 bg-slate-200">
              {dataItem?.dataItem.liked === true? <AntDesign name="heart" size={20} color="#a30f0f" /> : <AntDesign name="hearto" size={20} color="black" />}
            </TouchableOpacity> */}
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

export default Card;
