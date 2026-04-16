import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Text, useWindowDimensions, View, TouchableOpacity } from "react-native";
import Svg, { Path, Rect, Circle, Line } from "react-native-svg";

// ── Screens ──────────────────────────────────────────────────────────────────
import HomeScreen from "../screens/Home/Home";

// Placeholder screens — replace with real ones as you build them
import { View as RNView } from "react-native";
import InfluencerDirectoryScreen from "../screens/Influencers/Influencers";
import MessagesScreen from "../screens/Message/MessageScreen";
import CampaignScreen from "../screens/campaign/CampaignScreen";
import MoreScreen from "../screens/More/MoreScreen";
import InfluencerHomeScreen from "../screens/Home/InfluencerHomeScreen";
import { EarningsWithdrawalsScreen } from "../screens/Earnings/EarningScreen";
import OrdersScreen from "../screens/Orders/Orders";
import { useAppSelector } from "../redux/hooks";
const Placeholder = () => <RNView style={{ flex: 1, backgroundColor: "#fff" }} />;

// ── Icons (SVG, no image assets needed) ──────────────────────────────────────
const PRIMARY = "#6C63FF";
const INACTIVE = "#AAAAAA";

const HomeIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
      stroke={focused ? PRIMARY : INACTIVE}
      strokeWidth={1.8}
      fill={focused ? PRIMARY + "22" : "none"}
    />
  </Svg>
);

const InfluencersIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={8} r={4} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} />
    <Path d="M4 20C4 17 7.58 14 12 14C16.42 14 20 17 20 20" stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round" />
    <Path d="M18 6C19.1 6 20 6.9 20 8C20 9.1 19.1 10 18 10" stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round" />
    <Path d="M20 14C21.7 14.6 23 16.1 23 18" stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

const MessagesIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 15C21 15.55 20.55 16 20 16H7L3 20V4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4V15Z"
      stroke={focused ? PRIMARY : INACTIVE}
      strokeWidth={1.8}
      fill={focused ? PRIMARY + "22" : "none"}
    />
    <Line x1={7} y1={8} x2={17} y2={8} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={7} y1={12} x2={14} y2={12} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);

const CampaignsIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Rect x={3} y={7} width={18} height={14} rx={2} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} fill={focused ? PRIMARY + "22" : "none"} />
    <Path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round" />
    <Line x1={8} y1={12} x2={16} y2={12} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={8} y1={16} x2={13} y2={16} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);

const MoreIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Rect x={3} y={3} width={8} height={8} rx={1.5} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} fill={focused ? PRIMARY + "22" : "none"} />
    <Rect x={13} y={3} width={8} height={8} rx={1.5} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} />
    <Rect x={3} y={13} width={8} height={8} rx={1.5} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} />
    <Rect x={13} y={13} width={8} height={8} rx={1.5} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} />
  </Svg>
);

const OrdersIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    {/* Clipboard body */}
    <Rect
      x={4} y={4} width={16} height={18} rx={2}
      stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8}
      fill={focused ? PRIMARY + "22" : "none"}
    />
    {/* Clipboard top clip */}
    <Path
      d="M9 4V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3V4"
      stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round"
    />
    {/* Lines */}
    <Line x1={8} y1={9}  x2={16} y2={9}  stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={8} y1={13} x2={16} y2={13} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={8} y1={17} x2={13} y2={17} stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);

const EarningsIcon = ({ focused }: { focused: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle
      cx={12} cy={12} r={9}
      stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8}
      fill={focused ? PRIMARY + "22" : "none"}
    />
    <Path
      d="M12 7V8M12 16V17M15 9.5C15 8.12 13.66 7 12 7C10.34 7 9 8.12 9 9.5C9 10.88 10.34 12 12 12C13.66 12 15 13.12 15 14.5C15 15.88 13.66 17 12 17C10.34 17 9 15.88 9 14.5"
      stroke={focused ? PRIMARY : INACTIVE} strokeWidth={1.8} strokeLinecap="round"
    />
  </Svg>
);
 

// ── Custom Tab Button ─────────────────────────────────────────────────────────
const CustomTabBarButton = ({ children, onPress, accessibilityState }: any) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    {children}
  </TouchableOpacity>
);

// ── Tab Item (icon + label) ───────────────────────────────────────────────────
const TabIcon = ({ IconComponent, label, focused }: any) => (
  <View style={{ alignItems: "center", gap: 3 }}>
    <IconComponent focused={focused} />
    <Text style={{textAlign:"center", fontSize: 10, color: focused ? PRIMARY : INACTIVE, fontWeight: focused ? "600" : "400",width: 60, }}>
      {label}
    </Text>
  </View>
);

// ── Navigator ─────────────────────────────────────────────────────────────────
const BottomTabs = createBottomTabNavigator();

export const BottomNavigation = () => {
  const userType = useAppSelector((state)=>state.auth.userType)
  console.log(userType)

  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 7,
          marginBottom: Platform.OS === "android" ? 10 : 16,
          height: 72,
          backgroundColor: "#fff",
          borderRadius: 20,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 10,
          overflow: "hidden",
          position: "absolute",
        },
        headerShown: false,
      }}
    >
     {userType=="brand"&&<BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={HomeIcon} label="Home" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}
      {userType=="influencer"&&<BottomTabs.Screen
        name="Home"
        component={InfluencerHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={HomeIcon} label="Home" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}

      {userType=="brand"&&<BottomTabs.Screen
        name="Influencers"
        component={InfluencerDirectoryScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={InfluencersIcon} label="Influencers" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}

      {userType=="brand"&&<BottomTabs.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={MessagesIcon} label="Messages" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}


      <BottomTabs.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={OrdersIcon} label="Order" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      {userType=="brand"&&<BottomTabs.Screen
        name="Campaigns"
        component={CampaignScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={CampaignsIcon} label="Campaigns" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}
       {userType=="influencer"&&<BottomTabs.Screen
        name="EarningsWithdrawalsScreen"
        component={EarningsWithdrawalsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={EarningsIcon} label="Earnings" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />}

      <BottomTabs.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon IconComponent={MoreIcon} label="More" focused={focused} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};