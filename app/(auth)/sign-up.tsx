import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'

export default function Signup() {
  // const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const onSignUpPress = async () => {
    return router.push('/(root)/(tabs)/home')
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View className='flex bg-white pt-10' style={{height: Dimensions.get('window').height}}>
          <ScrollView>
              {/* <Image source={images.signUpImage} className='w-full h-[300px] mb-5' resizeMode="contain" /> */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}  className='w-full px-5 mb-5'>
              <Text className='text-5xl text-black font-RobotoBold mb-5'>JOIN US</Text>
              <Text className='text-3xl text-black font-RobotoBold'>Create your account</Text>
            </View>
            {/* <View className='w-full px-5 mb-5'>
              <Text className='text-3xl text-black font-RobotoBold'>Create Your Account</Text>
            </View> */}
            <View className='px-5'>
              <InputField placeholder='Enter your name' value={form.name} onChangeText={(value) => setForm({...form, name: value})} />
              <InputField placeholder='Enter your Email' value={form.email} onChangeText={(value) => setForm({...form, email: value})} />
              <InputField secureTextEntry={true} placeholder='Enter Password' value={form.password} onChangeText={(value) => setForm({...form, password: value})} />
              <Link href={'/sign-in'} className='text-sm text-general-200 mt-2'>
                <Text>By signing up. you're agree to our </Text>
                <Text className='text-primary-500'>Terms & Conditions </Text>
                <Text className='text-primary-500'>and </Text>
                <Text className='text-primary-500'> Privacy Policy</Text>
              </Link>
              <CustomButton title='Sign Up' onPress={onSignUpPress} classname='mt-6' />
              {/* OAuth */}
              <OAuth />
              <Link href={'/sign-in'} className='text-sm text-center text-general-200 my-10'>
                <Text>Already have an account? </Text>
                <Text className='text-primary-500 font-RobotoBold'>Log In</Text>
              </Link>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})