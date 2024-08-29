import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router } from 'expo-router'

export default function Profile() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CustomHeader title='Profile'  onBack={() => router.push('/(tabs)/home')}/>
        <Text>Profile</Text>
      </SafeAreaView>
    </>
  )
}