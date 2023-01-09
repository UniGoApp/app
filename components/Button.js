import { StyleSheet, Text } from 'react-native';

export default function Button({ label, onPress }) {
  return (<></>);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  text:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
