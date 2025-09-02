import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { apple, google } from '../../assets';
import fonts from '../../assets/fonts';
import FText from '../../components/FText';
import FTextInput from '../../components/FTextInputs';
import withNavigation from '../../HOF/withNavigation';
import { useAppTheme } from '../../theme';
import { loginStyles } from '../../theme/styles/loginStyles';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = loginStyles(theme);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <View style={{ gap: 10 }}>
        <FText variant="bold" style={styles.titleText}>
          Forgot password?
        </FText>
        <FTextInput
          left={<TextInput.Icon icon="email" />}
          label="Enter your email address"
          mode="outlined"
        />
        <FText style={styles.secondaryText}>
          * We will send you a message to set or reset your new password
        </FText>
        <Button style={styles.btn} mode="contained">
          <FText style={styles.onPrimaryTxt}>Submit</FText>
        </Button>
      </View>
    </ScrollView>
  );
};

export default withNavigation(ForgotPasswordScreen);
