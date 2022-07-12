import {StyleSheet} from 'react-native';
import {colors} from '../../views/css/colors';
export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.dark,
    height: 48,
    borderRadius: 10,
  },
  textButtonContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
  },
});
