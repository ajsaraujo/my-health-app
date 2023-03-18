import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RouteParams } from "../../../App";
import { MyHealthModule } from "../../modules";

type CodesProps = NativeStackScreenProps<RouteParams, MyHealthModule.Codes>;

export default function Codes(props: CodesProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}
