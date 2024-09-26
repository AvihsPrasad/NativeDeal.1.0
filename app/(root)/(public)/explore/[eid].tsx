import { Alert, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/Header'
import { router,useLocalSearchParams  } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { DealersDetails, DealersItems } from '@/constants'

export default function DetailsScreen() {
    const { eid } = useLocalSearchParams();
    const[details, setDetails] = useState<any>()
    const[productList, setProductList] = useState<any>([])
    const[productAdded, setProductAdded] = useState(false)

    useEffect(() => {
      DealersDetails.filter((id)=>{
        if (id.dId == eid) {
          setDetails(id)
        }
      })
      DealersItems.filter((data)=>{
        if (data.dId == eid) {
          // Alert.alert(JSON.stringify(data.products))
          setProductList(data.products)
        }
      })
    },[])

    const CartCard = (dataList: any) => {
    
      const [count, setCount] = useState(0);
      const[addtocart, setAddtocart] = useState(false)
      const cartbtn = () => {
        setCount(count + 1);
        setAddtocart(true);
        if (count >= 1) {
          setProductAdded(true);          
        }
      }
          return(
              <View className="flex flex-row bg-white rounded-xl px-5 py-3 mb-2" key={dataList.dataList.pid}>
                <View className="flex w-[30%] h-auto justify-center items-center rounded-full">
                  <Image source={dataList.dataList.img} className="w-full h-[100px] rounded-sm object-fill"/>
                </View>
                <View className="flex grow w-[70%] pl-5 relative">
                  <Text className="font-Roboto text-base">{dataList.dataList.pName}</Text>
                  <Text className="font-RobotoMedium text-lg mt-3">{dataList.dataList.price}</Text>
                  {addtocart&&<View className="flex flex-row mt-3 items-center">
                    <Text className="font-Roboto text-base mr-5">Qty</Text>
                    <TouchableOpacity onPress={() => setCount(count + 1)}>
                      <View className="px-4 py-1 border-2 border-gray-200 rounded-l-lg">
                        <Text className="font-RobotoBold text-xl">+</Text>
                      </View>
                    </TouchableOpacity>
                    <View className="px-2 py-1 border-t-2 border-b-2 border-gray-200 ">
                      <Text className="font-RobotoMedium text-xl">{count}</Text>
                    </View>
                    {count > 1?<TouchableOpacity onPress={() => {if (count > 1) {setCount(count - 1)}}}>
                      <View className="px-4 py-1 border-2 border-gray-200 rounded-r-lg">
                        <Text className="font-RobotoBold text-xl">-</Text>
                      </View>
                    </TouchableOpacity>:
                    <TouchableOpacity onPress={() => {setAddtocart(false);setProductAdded(false)}}>
                      <View className="px-3 py-1 border-2 border-gray-200 rounded-r-lg">
                        <MaterialIcons name="delete" size={22} color="black" />
                      </View>
                    </TouchableOpacity>}
                  </View>}
                  {!addtocart&&<View className='mt-3'>
                    <CustomButton title="Add To Cart" classname="py-2" onPress={()=>cartbtn()} />
                  </View>}
                </View>
              </View>
            )
          }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
      <SafeAreaView>
        <View className="relative" style={{height:hp(97)}}>
            <ScrollView>
            {details &&<View className="pb-20">
              <View className='flex relative'>
                <View className="flex absolute left-5 top-5 pl-2 w-[45px] h-[45px] z-20 justify-center items-center rounded-full bg-[#414584] shadow-2xl shadow-black">
                    <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#fff" /></TouchableOpacity>
                </View>
                <Image source={details.img} className="w-full rounded-sm object-fill" style={{height: hp(40)}} />
              </View>
              <View className='bg-white flex p-5 mb-5'>
                <View className='flex flex-row items-start mb-3'>
                  <Text className='grow text-2xl font-RobotoMedium'>{details.title}</Text>
                  <Text className="text-md font-Roboto bg-green-800 px-2 py-1 rounded-md text-white">{details.ratings}</Text>
                </View>
                <View><Text>{details.descp}</Text></View>
              </View>
              <View className='flex'>
                {productList && productList.map((item: any,index: any)=>(
                  <View key={index}><CartCard dataList={item}/></View>
                ))}
              </View>
            </View>}
            </ScrollView>
            {productAdded&&<View className="absolute bottom-0 flex flex-row w-full px-5 py-4 bg-white justify-center items-center shadow-2xl shadow-slate-900 border-gray-300" style={{borderTopWidth: 1}}>
                    <View className="grow flex flex-col">
                      <View><Text>Total Price</Text></View>
                      <View className='flex flex-row items-center'>
                        <MaterialIcons name="currency-rupee" size={18} color="black" />
                        <Text className="font-RobotoMedium text-2xl">120.00</Text>
                      </View>
                    </View>
                    <View className="flex w-[160px]"><CustomButton title="Add To Cart" classname="py-2" onPress={() => router.push('/(root)/(public)/cart')} /></View>
                </View>}
        </View>
      </SafeAreaView>
    </>
  )
}