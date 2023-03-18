import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MyHealthModule } from "../../modules";
import { RouteParams } from "../../routeParams";

type DiaryProps = NativeStackScreenProps<RouteParams, MyHealthModule.Diary>;

export default function Diary(props: DiaryProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}
