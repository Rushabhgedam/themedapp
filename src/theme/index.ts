import { Appearance, useColorScheme } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#F83758',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 218, 218)',
    onPrimaryContainer: 'rgb(64, 0, 12)',
    secondary: '#020202ff',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(190, 233, 255)',
    onSecondaryContainer: 'rgb(0, 31, 42)',
    tertiary: '#006874ff',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(151, 240, 255)',
    onTertiaryContainer: 'rgb(0, 31, 36)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: '#ffffff',
    onBackground: 'rgb(32, 26, 26)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(32, 26, 26)',
    surfaceVariant: 'rgb(244, 221, 221)',
    onSurfaceVariant: 'rgb(82, 67, 67)',
    outline: 'rgb(133, 115, 115)',
    outlineVariant: 'rgb(215, 193, 193)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(54, 47, 47)',
    inverseOnSurface: 'rgb(251, 238, 237)',
    inversePrimary: 'rgb(255, 179, 182)',
    elevation: {
      level0: 'transparent',
      level1: 'rgba(255, 255, 255, 1)',
      level2: 'rgb(250, 231, 239)',
      level3: 'rgb(248, 223, 233)',
      level4: 'rgb(247, 221, 231)',
      level5: 'rgb(246, 216, 227)',
    },
    surfaceDisabled: 'rgba(32, 26, 26, 0.12)',
    onSurfaceDisabled: 'rgba(32, 26, 26, 0.38)',
    backdrop: 'rgba(59, 45, 45, 0.4)',
  },
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#ffb3b6ff',
    onPrimary: '#680019ff',
    primaryContainer: '#920028ff',
    onPrimaryContainer: '#ffdadaff',
    secondary: '#69d3ffff',
    onSecondary: '#003546ff',
    secondaryContainer: '#004d64ff',
    onSecondaryContainer: 'rgb(190, 233, 255)',
    tertiary: '#50d8ecff',
    onTertiary: '#00363dff',
    tertiaryContainer: '#004f58ff',
    onTertiaryContainer: '#99f0ffff',
    error: '#ffb4abff',
    onError: '#690005ff',
    errorContainer: '#93000aff',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(32, 26, 26)',
    onBackground: 'rgb(236, 224, 223)',
    surface: 'rgb(32, 26, 26)',
    onSurface: 'rgb(236, 224, 223)',
    surfaceVariant: 'rgb(82, 67, 67)',
    onSurfaceVariant: 'rgb(215, 193, 193)',
    outline: 'rgb(159, 140, 140)',
    outlineVariant: 'rgb(82, 67, 67)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(236, 224, 223)',
    inverseOnSurface: 'rgb(54, 47, 47)',
    inversePrimary: 'rgb(190, 0, 54)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(43, 34, 34)',
      level2: 'rgb(50, 38, 39)',
      level3: 'rgb(57, 43, 43)',
      level4: 'rgb(59, 44, 45)',
      level5: 'rgb(63, 47, 48)',
    },
    surfaceDisabled: 'rgba(236, 224, 223, 0.12)',
    onSurfaceDisabled: 'rgba(236, 224, 223, 0.38)',
    backdrop: 'rgba(59, 45, 45, 0.4)',
  },
};

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};


// export default theme;
