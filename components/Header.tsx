import { HeaderProps } from "@/types/type";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, Text, View, Image } from "react-native";
import InputField from "./InputField";


const CustomHeader = ({
    onSearch,
    onWishList,
    onNotification,
    onBack,
    title,
    user,
    userImage,
    backArrow = false,
    home = false,
    ...props
  }: HeaderProps) => {
  return (<>
    <View className="flex flex-row px-5 py-3 bg-[#32357a] shadow-lg h-[80px] relative">
        {home && <View className="grow justify-center">
            <View className="flex flex-row items-center">
                { userImage && <Image source={{uri: userImage,}}
                     style={{ width: 40, height: 40, borderRadius: 110 / 2 }} 
                     className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                     />}
                {! userImage && <View className="w-12 h-12 bg-purple-500 justify-center items-center rounded-full">   
                    <Text className="font-RobotoMedium text-3xl color-[#ffffff] " style={{ letterSpacing: 1.2 }}>SH</Text>
                </View>}
                    <View>
                        <Text className="text-sm font-Roboto pl-4 m-0 text-white">Welcome</Text>
                        <Text className="text-lg font-RobotoBold m-0 pl-4 text-white">{user}</Text>
                    </View>
                </View>
            </View>}
            {!home && title && 
            <>
            <View className="flex flex-row absolute left-4 top-4 pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-[#414584]">
                {backArrow && <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#fff" /></TouchableOpacity>}
            </View>
            <View className="grow flex flex-row justify-center items-center">
                <Text className="text-xl font-RobotoMedium text-white tracking-widest">{title}</Text>
            </View>
            </>}
            {home && <View className="grow justify-center">
            <View className="flex flex-row items-end justify-end ">
                <TouchableOpacity  onPress={onNotification} className="p-3 bg-[#414584] rounded-lg"><FontAwesome name="bell" size={20} color="#fff" /></TouchableOpacity>
                <TouchableOpacity  onPress={onWishList} className="ml-2 p-3 bg-[#414584] rounded-lg"><Feather name="bookmark" size={20} color="#fff" /></TouchableOpacity>
                <TouchableOpacity  onPress={onSearch} className="ml-2 p-3 bg-[#414584] rounded-lg"><Ionicons name="cart-sharp" size={20} color="#fff" /></TouchableOpacity>
            </View>
        </View>}
    </View>
    {home && <View className="flex px-5 bg-[#32357a] shadow-lg pb-3">
        <TouchableOpacity  onPress={() => router.push('/(root)/(tabs)/search')} className="mx-1">
            <InputField disable={true} placeholder='Search' containerStyle={'bg-[#46498c]'} onPress={() => router.push('/(root)/(tabs)/search')}   icon={<Ionicons name={'search' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>}/>
        </TouchableOpacity>
    </View>}
    </>
  );
};

export default CustomHeader;