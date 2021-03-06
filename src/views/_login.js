import {StyleSheet} from 'react-native';
import {colors} from '../views/css/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    width: '80%',
    marginBottom: '25%',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '10%',
    width: '80%',
  },
  error: {
    color: colors.danger,
  },
});
