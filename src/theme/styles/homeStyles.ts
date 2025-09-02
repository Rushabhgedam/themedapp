
import { StyleSheet } from 'react-native';

export const homescreenStyles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 16,
    },
    title: {
        color: theme.colors.primary,
        fontSize: 24,
    },
});