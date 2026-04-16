import { Button, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AuthStack from "../../routes/AuthStack";
import StackNavigation from "../../routes/StackNavigation";
import { useAppSelector } from "../../redux/hooks";


const MainLayout = () => {

  const token = useAppSelector((state) => state.auth.token);
  // const token = 0;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
     
      {token ? (
        <StackNavigation />
      ) : (
        <AuthStack />
      )}
    </View>
  );
};

export default MainLayout;
