import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MyHealthModule } from "../../modules";
import { RouteParams } from "../../routeParams";

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>;

export default function Codes(props: CodesProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}
