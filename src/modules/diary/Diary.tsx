import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RouteParams } from "../../../App";
import { MyHealthModule } from "../../modules";

type DiaryProps = NativeStackScreenProps<RouteParams, MyHealthModule.Diary>;

export default function Diary(props: DiaryProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}
