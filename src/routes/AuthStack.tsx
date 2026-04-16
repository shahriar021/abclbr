import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from '../screens/Auth/OnBoarding';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpPage';
import EmailVerificationScreen from '../screens/Auth/ContactVerificaiton';
import VerificationCodeScreen from '../screens/Auth/VerificationCode';
import UserCredentialsScreen from '../screens/Auth/UserCredentials';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen options={{headerShown:true,title: "Email Verification",}}  name="EmailVerificationScreen" component={EmailVerificationScreen} />
      <Stack.Screen  options={{headerShown:true,title: "Email Verification",}}  name="VerificationCodeScreen" component={VerificationCodeScreen} />
      <Stack.Screen  options={{headerShown:true,title: "Email Verification",}}  name="UserCredentialsScreen" component={UserCredentialsScreen} />
      {/* <Stack.Screen  options={{headerShown:true}}  name="UserCredentialsScreen" component={Ema} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
