import React, { useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProviderBottomNavigation } from "./ProviderBottomNavigation";
import { ActivityIndicator } from "react-native";
import { BottomNavigation } from "./BottomNavigation";
import ChatScreen from "../screens/Message/ChatScreen";
import CampaignDetailsScreen from "../screens/campaign/CampaignDetails";
import AccountSettingsScreen from "../screens/More/AccountSettingsScreen";
import AccountInfoScreen from "../screens/More/AccountInfo";
import SavedListScreen from "../screens/More/SavedListScreen";
import { AboutUsScreen, HelpSupportScreen, PrivacyPolicyScreen, TermsConditionsScreen } from "../screens/More/StaticScreens";
import SubscriptionScreen from "../screens/More/SubscriptionScreen";
import { PaymentBillingScreen, TransactionDetailsScreen } from "../screens/More/PaymentBilling";
import AnalyticsScreen from "../screens/More/Analytic";
import OrderDetailsScreen from "../screens/Orders/OrderDetailsScreen";
import MyReviewsScreen from "../screens/More/Review";
import BadgeScreen from "../screens/More/Badges";
import OrdersScreen from "../screens/Orders/OrderNextPage";
import { WithdrawBalanceScreen } from "../screens/Earnings/WithdrawBalance";
import CreateCampaignScreen from "../screens/campaign/CreateCampaign";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  // const userType = useAppSelector((store)=>store.auth.userType)



  // if(!userType){
  //   <ActivityIndicator size="large"/>
  // }

  return (

    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fff",
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontFamily: "HelveticaNeue-Black",
        },
        headerTintColor: "#006400",
        // headerRight: () => <NavRight routeName={routeNameRef.current} />,
      }}
    >

      <Stack.Screen options={{ headerShown: false }} name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen options={{ headerShown: false }} name="ChatScreen" component={ChatScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CampaignDetailsScreen" component={CampaignDetailsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="AccountSettingsScreen" component={AccountSettingsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="AccountInfoScreen" component={AccountInfoScreen} />
      <Stack.Screen options={{ headerShown: false }} name="SavedListScreen" component={SavedListScreen} />

      <Stack.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen options={{ headerShown: false }} name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen options={{ headerShown: false }} name="TermsConditions" component={TermsConditionsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="SubscriptionScreen" component={SubscriptionScreen} />
      <Stack.Screen options={{ headerShown: false }} name="PaymentBillingScreen" component={PaymentBillingScreen} />
      <Stack.Screen options={{ headerShown: false }} name="TransactionDetails" component={TransactionDetailsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="AnalyticsScreen" component={AnalyticsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="MyReviewsScreen" component={MyReviewsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="BadgeScreen" component={BadgeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CampaignDetails Screen" component={CampaignDetailsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="OrderNext Screen" component={OrdersScreen} />
      <Stack.Screen options={{ headerShown: false }} name="WithdrawBalance Screen" component={WithdrawBalanceScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CreateCampaignScreen" component={CreateCampaignScreen} />


      {/*  */}




    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
