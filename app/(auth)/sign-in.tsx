import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
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
  const onSignInPress = async () => {}
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
        <View className='relative w-full'>
          {/* <Image source={images.signUpCar} className='z-0 w-full' /> */}
          <Text className='text-2xl text-black font-RobotoBold'>Welcome</Text>
        </View>
        <View className='p-5'>
          <InputField label='Email' placeholder='Enter your Email' value={form.email} onChangeText={(value) => setForm({...form, email: value})} />
          <InputField label='password' secureTextEntry={true} placeholder='Enter Password' value={form.password} onChangeText={(value) => setForm({...form, password: value})} />
          <CustomButton title='Sign Up' onPress={onSignInPress} classname='mt-6' />
          {/* OAuth */}
          <OAuth />
          <Link href={'/sign-up'} className='text-lg text-center text-general-200 mt-10'>
            <Text>Don't have an account? </Text>
            <Text className='text-primary-500'>Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})