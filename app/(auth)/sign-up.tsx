import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
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
  const onSignUpPress = async () => {}
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View className='bg-white p-5' style={{borderWidth:10}}>
            <View className=''>
              <Image source={images.onboarding1} className='w-full h-1/2' />
              <Text className='text-2xl text-black font-RobotoBold'>Create Your Account</Text>
            </View>
            <View className='p-5'>
              <InputField label='Name' placeholder='Enter your name' value={form.name} onChangeText={(value) => setForm({...form, name: value})} />
              <InputField label='Email' placeholder='Enter your Email' value={form.email} onChangeText={(value) => setForm({...form, email: value})} />
              <InputField label='password' secureTextEntry={true} placeholder='Enter Password' value={form.password} onChangeText={(value) => setForm({...form, password: value})} />
              <CustomButton title='Sign Up' onPress={onSignUpPress} classname='mt-6' />
              {/* OAuth */}
              <OAuth />
              <Link href={'/sign-in'} className='text-lg text-center text-general-200 mt-10'>
                <Text>Already have an account? </Text>
                <Text className='text-primary-500'>Log In</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})