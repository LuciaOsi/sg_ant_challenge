import {StyleSheet} from 'react-native';
import {colors} from '../../views/css/colors';

export const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
  },
  antContainer: {
    alignItems: 'center',
    textAlign: 'center',
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary20,
    backgroundColor: colors.light,
    shadowColor: colors.dark,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  nameContainer: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 6,
    marginBottom: 5,
  },

  ant: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  antName: {
    borderRadius: 100,
    marginBottom: 12,
  },
  antPositionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
  },
  antPosition: {
    fontSize: 12,
    marginBottom: 4,
  },
  antText: {
    textAlign: 'center',
  },
  antDetailText: {
    fontWeight: 'bold',
    color: colors.secondary20,
    font: 13,
  },
  antStatusText: {
    fontWeight: 'bold',
  },
});
