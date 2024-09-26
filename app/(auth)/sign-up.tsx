import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import Spinner from 'react-native-loading-spinner-overlay';
import { FontAwesome, Fontisto, MaterialIcons } from "@expo/vector-icons";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "Shiva",
    email: "shivaprasad266@gmail.com",
    password: "Paapu@19112023",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    setLoading(true);
    if (!isLoaded) return;
    try {
      await signUp.create({
        username: form.name,
        emailAddress: form.email,
        password: form.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      });
      setLoading(false);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.log(JSON.stringify(err, null, 2));
      setLoading(false);
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };
  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });
      if (completeSignUp.status === "complete") {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
        });
        router.replace("/(root)/(tabs)/home");
      } else {
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed",
        });
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
    }
  };
  return (<>
    <Spinner visible={loading} />
    <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/>
    <SafeAreaView>
    <ScrollView className="flex mt-[24px] bg-white">
      <View className="flex px-5 bg-[#414584] justify-center items-center h-[300px] rounded-b-[200px] shadow-2xl shadow-black">
        <Text className="font-RobotoBold text-3xl text-white -mt-10 mb-3 tracking-widest">Create and account</Text>
        <Text className="font-Roboto text-md text-white px-5 text-center leading-6">Unlock ur Potential, Register Now for an Empowering Jounery!</Text>
      </View>
      <View className="flex bg-white">
        <View className="p-5">
          <InputField label="Name" placeholder="Enter name" icon={<FontAwesome name="user" size={20} color={'#979dac'} style={{fontSize:20,marginLeft: 15}} />}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField label="Email" placeholder="Enter email" icon={<MaterialIcons name="email" size={20} color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          {/* <InputField
            label="Phone" placeholder="Enter Phone number" icon={<FontAwesome name="phone" size={20}  color={'#979dac'} style={{fontSize:20,marginLeft: 15}} />}
            textContentType="telephoneNumber"
            value={form.phone}
            onChangeText={(value) => setForm({ ...form, email: value })}
          /> */}
          <InputField
            label="Password" placeholder="Enter password" icon={<Fontisto name="locked" size={20} color={'#979dac'} style={{fontSize:20,marginLeft: 15}} />}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          <OAuth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          // onBackdropPress={() =>
          //   setVerification({ ...verification, state: "default" })
          // }
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <InputField
              label={"Code"}
              // icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => router.push(`/(root)/(tabs)/home`)}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
    </SafeAreaView></>
  );
};
export default SignUp;
