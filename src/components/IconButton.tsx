import { Pressable, StyleSheet, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.iconButton}>
      <MaterialIcons color="#fff" name={icon} size={24} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
