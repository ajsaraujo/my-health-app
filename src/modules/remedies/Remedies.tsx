import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MyHealthModule } from "../../modules";
import { RouteParams } from "../../routeParams";

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
