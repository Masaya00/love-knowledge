import { StyleSheet, TouchableOpacity, Text } from "react-native";

const LogoutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: '#ffffff'
  }
})
