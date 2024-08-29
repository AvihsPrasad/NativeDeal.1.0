import { HeaderProps } from "@/types/type";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, View } from "react-native";


const CustomHeader = ({
    onSearch,
    onWishList,
    onNotification,
    onBack,
    title,
    user,
    backArrow = false,
    home = false,
    ...props
  }: HeaderProps) => {
  return (
    // <TouchableOpacity
    //   onPress={onPress}
    //   className={`w-full rounded-xl p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${classname}`}
    //   {...props}
    // >
    //   {IconLeft && <IconLeft />}
    //   <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
    //     {title}
    //   </Text>
    //   {IconRight && <IconRight />}
    // </TouchableOpacity>
    <View className="flex flex-row px-5 py-3 bg-white shadow-lg">
        <View className="basis-9/12 h-[50px] justify-center">
            {home && <View className="flex flex-row items-center">
                    <View className="w-12 h-12 bg-purple-500 justify-center items-center rounded-full">
                        <Text className="font-RobotoMedium text-lg color-[#ffffff] " style={{letterSpacing:1.2}}>SH</Text>
                    </View>
                    <View>
                        <Text className="text-sm font-Roboto pl-2 m-0">Welcome</Text>
                        <Text className="text-lg font-RobotoBold m-0 pl-2">{user}</Text>
                    </View>
                </View>
            }
            <View className="flex flex-row">
                {backArrow && <TouchableOpacity  onPress={onBack} className="mr-2"><AntDesign name="arrowleft" size={32} color="#979dac" /></TouchableOpacity>}
                {!home && title && <Text className="text-xl font-RobotoBold">{title}</Text>}
            </View>
        </View>
        <View className="grow justify-center">
            {home && <View className="flex flex-row items-end justify-end ">
                <TouchableOpacity  onPress={onSearch} className="pr-1"><Ionicons name="search" size={24} color="#979dac" /></TouchableOpacity>
                <TouchableOpacity  onPress={onWishList} className="px-1.5"><Feather name="bookmark" size={24} color="#979dac" /></TouchableOpacity>
                <TouchableOpacity  onPress={onNotification} className="px-1.5"><FontAwesome name="bell-o" size={24} color="#979dac" /></TouchableOpacity>
            </View>}
        </View>
    </View>
  );
};

export default CustomHeader;