import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { responsiveWidth as wp, responsiveHeight as hp, responsiveFontSize as fp } from "react-native-responsive-dimensions";

export const onboardingStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      flexDirection:"column"
    },
    title: {
      color: theme.colors.primary,
      fontSize: 24,
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: wp(4),
      alignItems: 'center',
      height: hp(10)
    },
    imgStyle:{
      width: wp(100),
      height: hp(40),
      resizeMode: 'contain',
    },
    secondaryContainer:{
      height: hp(80),
      justifyContent: 'center',
    },
    titleTxt:{
      fontSize: fp(3.5),
      textAlign: 'center',
      marginTop: hp(2),
      fontWeight: "condensedBold"
    },
    descriptionTxt:{
      // fontSize: fp(2.5),
      textAlign: 'center',
      marginTop: hp(2),
      paddingHorizontal: wp(10),
      color: theme.colors.onSurfaceVariant,
    },
    tertiaryContainer: {
      justifyContent: 'space-between',
      paddingHorizontal: wp(4),
      width: wp(100),
      alignItems: 'center',
    },
    row: {
      flexDirection:'row'
    },
  });
