import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import Spinner from "react-native-loading-spinner-overlay";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "shivaprasad266@gmail.com",
    password: "Paapu@19112023",
  });

  const onSignInPress = useCallback(async () => {
    setLoading(true)
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        setLoading(false);
        router.replace("/(root)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
        console.log(JSON.stringify(signInAttempt, null, 2));
        setLoading(false);
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      setLoading(false);
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);

  return (<>
    <Spinner visible={loading} />
    <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
    <SafeAreaView>
    <ScrollView className="flex mt-[24px] bg-white">
      <View className="flex px-5 bg-[#414584] justify-center items-center h-[300px] rounded-b-[200px] shadow-2xl shadow-black">
        <Text className="font-RobotoBold text-3xl text-white -mt-10 mb-3 tracking-widest">Enter Your account</Text>
        <Text className="font-Roboto text-md text-white px-5 text-center leading-6">Login into your account with ease!</Text>
      </View>
      <View className="flex">
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={<MaterialIcons name="email" size={20} color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={<Fontisto name="locked" size={20} color={'#979dac'} style={{fontSize:20,marginLeft: 15}} />}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView></SafeAreaView></>
  );
};

export default SignIn;
