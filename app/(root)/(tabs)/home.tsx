import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import Swiper from "react-native-swiper";
import { HomeSwiperImages } from '@/constants';

const swiperDot = () => {
  return (<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />)
}
const swiperActiveDot = () => {
  return (<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />)
}

export default function Home() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <CustomHeader title='Home' home={true} user='Shivaprasad KS'  onNotification={() => router.push('/(tabs)/profile')}/>
            <View className='px-5 my-4 rounded-md'>
              <Swiper ref={swiperRef} loop={true} autoplay={true} height={150}
                style={{borderWidth:1}}
                dot={swiperDot()} 
                activeDot={swiperActiveDot()} onIndexChanged={(index) => setActiveIndex(index)}>
                {HomeSwiperImages.map((item: any, index) => (
                  <View key={index} className="h-[160px]  rounded-md">
                    <Image className='w-full h-[150px]  rounded-md' source={item.url} resizeMode="contain" />
                  </View>
                ))}
              </Swiper>
            </View>

          </View>
        </ScrollView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})