import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'

export default function Signin() {
  // const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const onSignInPress = async () => {
    return router.push('/(root)/(tabs)/home')
  }
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View className='flex bg-white pt-10' style={{height: Dimensions.get('window').height}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}  className='w-full px-5 mb-5'>
              <Text className='text-5xl text-black font-RobotoBold mb-5'>LOG IN</Text>
              <Text className='text-3xl text-black font-RobotoBold'>Access your account</Text>
            </View>
              {/* <Image source={images.loginImage} className='w-full h-[300px] mb-5'  resizeMode="contain" /> */}
            {/* <View className='w-full px-5 mb-5'>
              <Text className='text-3xl text-black font-RobotoBold'>Welcome</Text>
            </View> */}
            <View className='px-5'>
              <InputField placeholder='Enter your Email' value={form.email} onChangeText={(value) => setForm({...form, email: value})} />
              <InputField secureTextEntry={true} placeholder='Enter Password' value={form.password} onChangeText={(value) => setForm({...form, password: value})} />
              <CustomButton title='Sign Up' onPress={onSignInPress} classname='mt-6' />
              {/* OAuth */}
              <OAuth />
              <Link href={'/sign-up'} className='text-lg text-center text-general-200 my-10'>
                <Text>Don't have an account? </Text>
                <Text className='text-primary-500 font-RobotoBold'>Sign Up</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})