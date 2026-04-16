import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainLayout from "./src/components/layout/MainLayout";

const App = () => {
  return (
   <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainLayout/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;