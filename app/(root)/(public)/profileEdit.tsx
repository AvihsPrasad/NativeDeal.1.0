import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { images, MenuList } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useAuth, useUser } from "@clerk/clerk-expo";
import InputField from "@/components/InputField";
import Spinner from "react-native-loading-spinner-overlay";
import ReactNativeModal from "react-native-modal";


export default function ProfileEdit() {
  
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(true);
  const [form, setForm] = useState({
    username: user?.username + "",
    firstname: user?.firstName +"",
    lastname: user?.lastName + "",
  });
  
//   const { signOut } = useAuth();

  useEffect(() => {
    // console.log(JSON.stringify(user));
  });
  const onSaveUser = async () => {
    setLoading(true);
    try {
        await user?.update({
            username: form.username,
            firstName: form.firstname,
            lastName: form.lastname,
        });
        setLoading(false);
        setShowSuccessModal(true);
    } catch (error) {
        console.log(JSON.stringify(error));
        setLoading(false);
    }
};

  return (
    <>
      {/* {Platform.OS === 'ios'? <View className="bg-red-500 w-full h-9"><Text>asas</Text></View> : ''} */}
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
      <Spinner visible={loading} />
        <CustomHeader
          title="Edit Profile"
          backArrow={true}
          onBack={() => router.back()}
        />
        <ScrollView>
          <View className="flex p-5 mb-20">
            <View className="flex bg-white rounded-xl p-3 pb-10 shadow-md shadow-black">
                <View className="flex justify-center items-center mt-3">
                    { user?.imageUrl && <Image source={{uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,}}
                        style={{ width: 120, height: 120, borderRadius: 110 / 2 }} 
                        className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                        />}                
                </View>
                <View className="flex">
                    <InputField label='Username' value={form.username} onChangeText={(value) => setForm({ ...form, username: value })} placeholder='Firstname' icon={<Entypo name={'user' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
                    <InputField label='First Name' value={form.firstname} onChangeText={(value) => setForm({ ...form, firstname: value })} placeholder='Firstname' icon={<Entypo name={'user' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
                    <InputField label='Last Name' value={form.lastname} onChangeText={(value) => setForm({ ...form, lastname: value })} placeholder='Lastname' icon={<Entypo name={'user' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
                    <InputField label='Email' value={user?.emailAddresses +''} disable={false} placeholder='Email' icon={<Entypo name={'user' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
                    <InputField label='Phone' value={user?.phoneNumbers +''} disable={false} placeholder='Phone' icon={<Entypo name={'user' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>} />
                </View>
                <View>
                    <CustomButton title="Update profile" className="mt-3" onPress={onSaveUser}/>
                </View>
            </View>            
          </View>
          <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Profile Updated
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              Details of your account has been updated Successfully.
            </Text>
            <CustomButton
              title="OK"
              onPress={() => setShowSuccessModal(false)}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
