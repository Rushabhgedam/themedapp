import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { responsiveWidth as wp, responsiveHeight as hp, responsiveFontSize as fp } from "react-native-responsive-dimensions";
import fonts from '../../assets/fonts';
import { commonStyles } from './commonStyles';

export const loginStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    ...commonStyles(theme),
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      flexDirection: "column",
      paddingHorizontal: wp(5),
    },
    titleText: {
      fontSize: fp(6),
      marginTop: hp(6),
      marginBottom: hp(4),
    },
    btn: {
      borderRadius: wp(1),
      // backgroundColor: theme.colors.primary,
    },
    secondaryText: {
      alignSelf: "flex-end"
    },
    iconHolder: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
      padding: wp(3),
      borderRadius: wp(8),
      marginRight: wp(5)
    },
    icon: {
      width: wp(5),
      height: wp(5),
      alignSelf: "center"
    },
    lastContainer: { alignSelf: "center", marginTop: hp(7), gap: hp(1) },
    textGap:{
      marginVertical: hp(1),
    }
  });
