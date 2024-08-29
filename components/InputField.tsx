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
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
  }: InputFieldProps) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-4 w-full">
            {label && <Text className={`text-lg font-RobotoBold mb-3 ${labelStyle}`}>
              {label}
            </Text>
            }
            <View
              className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-xl border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
            >
              {icon && (
                <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
              )}
              <TextInput
                className={`rounded-xl p-4 font-RobotoBold text-[15px] flex-1 ${inputStyle} text-left`}
                placeholderTextColor="#979dac"
                secureTextEntry={secureTextEntry}
                {...props}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default InputField;