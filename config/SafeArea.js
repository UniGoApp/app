import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from "./theme";

export default function SafeScreen({children}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      // backgroundColor: theme.background.app,
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',

      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.background.app} />
      {children}
    </View>
  );
}