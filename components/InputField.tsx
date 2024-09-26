import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
  } from "react-native";
  
  import { InputFieldProps } from "@/types/type";
  
  const InputField = ({
    label,
    icon,
    Imageicon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    disable = true,
    className,
    ...props
  }: InputFieldProps) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="mb-4 w-full">
            {label && <Text className={`text-lg font-RobotoBold mb-1 ${labelStyle}`}>
              {label}
            </Text>
            }
            <View
              className={`flex flex-row justify-start items-center relative rounded-xl ${containerStyle? containerStyle :'border bg-neutral-100  border-neutral-100 focus:border-primary-500'}`}
            >
              {Imageicon && (
                <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
              )}
              {icon}
              <TextInput
                className={`rounded-xl p-2 px-5 h-[50px] font-RobotoMedium text-[18px] flex-1 ${inputStyle} text-left`}
                placeholderTextColor="#979dac"
                secureTextEntry={secureTextEntry}
                editable={disable}
                {...props}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default InputField;