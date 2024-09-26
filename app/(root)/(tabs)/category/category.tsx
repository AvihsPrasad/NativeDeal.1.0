import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import { categoryList } from '@/constants'
import { AntDesign, Ionicons } from '@expo/vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const CategoryColor = (item)


export default function Category() {
  // const [toggleDropdown, setToggleDropdown] = useState(true)

  // const toggle = () => {
  //   setToggleDropdown(!toggleDropdown)
  // }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
          <CustomHeader title='Categories' backArrow={true}  onBack={() => router.back()}/>
        <ScrollView>
          <View className='flex px-5 mb-20 py-5 bg-white'>
              {categoryList.map((item, index) => (
                <View key={item.CategoryId} className='flex px-5 shadow-sm bg-gray-100 mb-4'>
                  <TouchableOpacity onPress={() => router.push({pathname:'/category/category',params:{cid: item.CategoryId}})} className='flex flex-row'>
                    <View className='grow py-3  justify-center'>
                      <Text className='text-xl font-RobotoMedium'>{item.CategoryName}</Text>
                      <Text className='text-md font-Roboto text-gray-500'>{item.categoryDisp}</Text>
                        {/* <Text className='font-Roboto text-blue-600'>View All</Text> */}
                    </View>
                        <View className='py-3'>
                          <Image source={item.CategoryUrl} className='w-20 h-24 object-fill' />
                        </View>
                  </TouchableOpacity>
                  {/* {toggleDropdown && <View className='flex flex-row flex-wrap gap-3'>
                    {item.CategoryList.map((subList, i) => (
                      <View key={i} className={'flex flex-row px-3 py-4 mb-2 mr-3 w-2/5 bg-white rounded-md' }>
                        <Ionicons name="search" size={24} color="#a855f7" className='text-purple-500' />
                        <Text className='ml-2 text-lg font-Roboto text-purple-500'>{subList}</Text>
                      </View>
                    ))}
                  </View>} */}
                </View>
              ))}
            {/* <Text>category</Text> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}