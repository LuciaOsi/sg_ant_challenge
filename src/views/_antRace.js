import {StyleSheet} from 'react-native';
import {colors} from '../views/css/colors';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  error: {
    color: colors.danger150Color,
    textAlign: 'center',
    width: '100%',
    padding: 10,
  },
});
