import { Pressable, PressableProps, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { GREEN_700 } from '../colors'
import { globalStyles } from '../globalStyles'

type Icon = {
  icon: React.ComponentProps<typeof Ionicons>['name']
}

export function FloatingActionButton(props: PressableProps & Icon) {
  return (
    <Pressable
      {...props}
      style={[
        style.floatingActionButton,
        globalStyles.elevation2,
        props.style as any,
      ]}
    >
      <Ionicons
        // style={globalStyles.debug}
        name={props.icon}
        size={32}
        color="white"
      ></Ionicons>
    </Pressable>
  )
}

const style = StyleSheet.create({
  floatingActionButton: {
    backgroundColor: GREEN_700,
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 100,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
