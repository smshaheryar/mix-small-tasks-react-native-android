import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
    
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
