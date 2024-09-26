import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router,useLocalSearchParams  } from 'expo-router'
import { categorySubList } from '@/constants'

export default function CategoryScreen() {
    const { cid } = useLocalSearchParams();
    const [detailsData, setDetailsData] = useState<any>()
    let wantedData = categorySubList.filter(function(i) {
        return i.catid === cid;
      });

      useEffect(()=>{
        setDetailsData(wantedData[0].itemTypes)
      },[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
            <CustomHeader title='Category SubList' backArrow={true}  onBack={() => router.back()}/>
          <View className='px-3 py-5'>
            {/* <Text>dealerfs {JSON.stringify(detailsData)}</Text> */}
            <View className="flex gap-5 flex-row flex-wrap pt-5">
                {wantedData[0].itemTypes && wantedData[0].itemTypes.map((dataList: any) => (
                    <View className="px-3 py-5 rounded-md bg-slate-300 w-[45%] justify-center items-center" key={dataList.itemId}>
                      <Text className='uppercase font-RobotoMedium text-lg'>{dataList.title}</Text>
                    </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}