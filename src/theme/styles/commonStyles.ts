import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { responsiveWidth as wp, responsiveHeight as hp, responsiveFontSize as fp } from "react-native-responsive-dimensions";
import fonts from '../../assets/fonts';

export const commonStyles = (theme: MD3Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        row: {
            flexDirection: 'row'
        },
        column: {
            flexDirection: 'row'
        },
        center: {
            justifyContent: "center",
        },
        centerTxt: {
            textAlign: "center",
        },
        onPrimaryTxt: {
            fontFamily: fonts.regular,
            color: theme.colors.onPrimary,
        },
        primaryText: {
            color: theme.colors.primary,
        },
        textUnderline: {
            textDecorationLine: 'underline',
        },
        
    });
