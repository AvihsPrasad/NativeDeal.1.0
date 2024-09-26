import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { MenuList } from "@/constants";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";


export default function Search() {
    const [form, setForm] = useState({searchtext: "",});
    const [backArrowEnable, setBackArrowEnable] = useState(false);
  const onLogout = () => {
    router.push('/(auth)/sign-in')
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        {/* <CustomHeader
          title="Search"
          // backArrow={true}
          onBack={() => router.back()}
        /> */}
        <ScrollView className="flex bg-[#32357a] px-3">
          <View className="">
            <View className="flex relative justify-center">
              <View className="flex absolute left-0 top-2 pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-[#414584]">
                  <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#fff" /></TouchableOpacity>
              </View>
            </View>
            <View className={`flex z-10 pl-14`}><InputField placeholder='Search' value={form.searchtext} onChangeText={(value) => setForm({...form, searchtext: value})} onFocus={() => setBackArrowEnable(!backArrowEnable)} icon={<Ionicons name={'search' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
