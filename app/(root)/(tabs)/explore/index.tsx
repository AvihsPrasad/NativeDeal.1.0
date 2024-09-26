import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import { categoryList, DealersList } from '@/constants'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/Drawer'
import CustomButton from '@/components/CustomButton'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const BrandList = (dataItem: any) => {}
// const EnterpriseList = (dataItem: any) => {}


export default function Explore() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [brandType, setBrandType] = useState('brand');
    
    const handleOpenBottomSheet = () => {
      setIsBottomSheetOpen(true);
    };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        <CustomHeader title='Explore' backArrow={true}  onBack={() => router.back()}/>
        <ScrollView>
          <View className='px-3 mb-20 py-5'>
            <View className='flex flex-row mb-5'>
              <View className='flex w-[48%] mr-4'><CustomButton title="Brands" bgVariant={brandType =='enterprise'?'secondary':'primary'} textVariant={brandType =='enterprise'?'secondary':'primary'}onPress={() => setBrandType('brand')}/></View>
              <View className='flex w-[47%]'><CustomButton title="Enterprises"  bgVariant={brandType !=='enterprise'?'secondary':'primary'} textVariant={brandType !=='enterprise'?'secondary':'primary'} onPress={() => setBrandType('enterprise')}/></View>
            </View>
            {DealersList.map((item,index) => (
              <View key={index}>{item.type === brandType ? 
              <TouchableOpacity onPress={()=> router.push({pathname:'/(public)/explore/[eid]', params: {eid: item.dId}})}>
                <View className='flex rounded-lg p-3 bg-white mb-5 shadow-sm'>
                    <Image source={item.img} className='w-full h-28 object-fill' />
                    <View className='flex flex-row mt-4'>
                        <View className='grow'>
                            <Text className='text-2xl font-RobotoMedium'>{item.title}</Text>
                            <Text className='text-md font-Roboto'>{item.descp}</Text>
                        </View>
                        <View>
                            <Text className='bg-green-600 text-white text-sm font-RobotoMedium px-3 py-1 rounded-sm'>{item.ratings}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>: <View></View>}</View>
            )) }
            {/* <Text>dealerfs</Text> */}
          </View>
          {/* <View>
            <TouchableOpacity onPress={handleOpenBottomSheet} style={{ width: '90%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#86827e', paddingVertical: 12, borderRadius: 8 }}>
                <Text>QWERTYyy {'' + isBottomSheetOpen}</Text>
            </TouchableOpacity>
            </View>
          <CustomDrawer backArrow={isBottomSheetOpen} /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}