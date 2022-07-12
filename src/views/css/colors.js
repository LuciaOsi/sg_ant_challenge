import {StyleSheet} from 'react-native';
// In palettes the scales goes from 100 (lighter) to 800 (darker)

const backgroundcolors = {
  // White backgroundColor
  lightBackgroundColor: '#FFFFFF',
  // Dark gray backgroundColor
  darkBackgroundColor: '#2F2F2F',
  darkBackgroundColorOpacity: '#2F2F2F80',
  // Gray backgroundColor palette
  secondary50BackgroundColor: '#F1F1F1',
  secondary100BackgroundColor: '#F3F3F3',
  secondary200BackgroundColor: '#F4F4F4',
  secondary250BackgroundColor: '#F9F9F9',
  secondary300BackgroundColor: '#E9E9E9',
  // Dark backgroundColor with opacity
  darkOpacityBackgroundColor: '#000000E8',
};

const textcolors = {
  // White color
  lightColor: '#FFFFFF',
  // Black color
  darkColor: '#444444',
  // Gray color palette
  secondary100Color: '#E5E5E5',
  secondary150Color: '#D8D8D8',
  secondary200Color: '#AFAFAF',
  secondary250Color: '#828282',
  secondary300Color: '#2F2F2F',
  secondary400Color: '#8D8D8D',
  secondary300ColorOpacity: '#2F2F2F80',
  // Red color
  dangerColor: '#FF6B7F',
  danger100Color: '#E54141',
  danger150Color: '#FF3333',
  danger200Color: '#E30000',
  // Green color
  successColor: '#00D27E',
  // Blue color
  primaryColor: '#4F8ECF',
};

const bordercolors = {
  // Black color
  darkBorderColor: '#444444',
  // Gray color palette
  secondary100BorderColor: '#E5E5E5',
  secondary150BorderColor: '#E8E8E8',
  secondary200BorderColor: '#E9E9E9',
  // Red color
  dangerBorderColor: '#FD0000',
};

const iconcolors = {
  // Black color
  darkIconColor: '#444444',
};

export const colors = StyleSheet.create({
  ...backgroundcolors,
  ...textcolors,
  ...bordercolors,
  ...iconcolors,
});
