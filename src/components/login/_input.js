import {StyleSheet} from 'react-native';
import {colors} from '../../views/css/colors';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: colors.secondary100BackgroundColor,
    borderRadius: 5,
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textInput: {
    alignItems: 'center',
    marginLeft: 12,
    width: '100%',
  },
  textLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
});
