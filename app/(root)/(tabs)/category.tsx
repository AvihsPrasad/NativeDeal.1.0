import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router } from 'expo-router'

export default function Category() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <CustomHeader title='Categories'  onBack={() => router.push('/(tabs)/home')}/>
            <Text>category</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}