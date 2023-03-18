import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RouteParams } from "../../../App";
import { MyHealthModule } from "../../modules";

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>;

export default function Remedies(props: RemediesProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}
