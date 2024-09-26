import { HeaderProps } from "@/types/type";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
// import { TouchableOpacity, Text, View } from "react-native";
import { useEffect, useState } from 'react'; 
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowHeight = Dimensions.get('window').height;



const CustomDrawer = ({
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
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

const handleOpenBottomSheet = () => {
  setIsBottomSheetOpen(true);
};

const handleCloseBottomSheet = () => {
  setIsBottomSheetOpen(false);
};
useEffect(()=>{
    setIsBottomSheetOpen(backArrow)
},[])
let visible = backArrow;
  return (
    <Modal animationType="slide" transparent={true} visible={isBottomSheetOpen} 
    onRequestClose={handleCloseBottomSheet}
    >

    <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
      <TouchableOpacity style={{ paddingVertical: 16 }} onPress={() => {visible=false}}>
        <Text>asasasasa {'' + visible}</Text>
    </TouchableOpacity>
  </View>
</Modal>
  );
};
// const SubText = ({ borderWidth, borderColor, text, size, color, family, letterSpacing, align = 'left', leading }) => {
//     return (
//         <Text 
//           style={{ 
//               fontSize: size, 
//               color: color, 
//               fontFamily: family, 
//               letterSpacing: letterSpacing ? letterSpacing : -0.02, 
//               textAlign: align, 
//               lineHeight: leading, 
//               borderWidth: borderWidth, 
//               borderColor: borderColor }}>
                
//               {text}
          
//           </Text>
//     )
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 1,
        borderColor: 'red'
    },
});

export default CustomDrawer;