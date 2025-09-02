import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { apple, google } from '../../assets';
import fonts from '../../assets/fonts';
import appConstants from '../../common';
import FText from '../../components/FText';
import FTextInput from '../../components/FTextInputs';
import { useAppTheme } from '../../theme';
import { loginStyles } from '../../theme/styles/loginStyles';

const RegisterScreen = ({navigation}:{navigation:any}) => {
  const theme = useAppTheme();
  const styles = loginStyles(theme);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
      <View style={{ gap: 10 }}>
        <FText variant="bold" style={styles.titleText}>
          Create an account
        </FText>
        <FTextInput
          left={<TextInput.Icon icon="email" />}
          label="Email"
          mode="outlined"
        />
        <FTextInput
          left={<TextInput.Icon icon="email" />}
          label="Username"
          mode="outlined"
        />

        <FTextInput
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={isPasswordVisible ? 'eye-off' : 'eye'}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
          label="Password"
          style={{ fontFamily: fonts.regular }}
          secureTextEntry={isPasswordVisible}
          mode="outlined"
        />

        <FTextInput
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={isPasswordVisible ? 'eye-off' : 'eye'}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
          label="Confirm password"
          style={{ fontFamily: fonts.regular }}
          secureTextEntry={isPasswordVisible}
          mode="outlined"
        />
        <View style={styles.row}>
          <Checkbox
          status='indeterminate'
          onPress={()=>{}}
          />
        <FText style={{flexShrink: 1,...styles.textGap}}>By signing up, I agree to {appConstants.businessName}'s' of Use and <FText style={[styles.textUnderline]}>Privacy Policy.</FText></FText>
        </View>
        <Button style={styles.btn} mode="contained">
          <FText style={styles.onPrimaryTxt}>Register</FText>
        </Button>
      </View>
      <View style={styles.lastContainer}>
        <FText style={styles.centerTxt}>- OR Continue with -</FText>
        <View style={[styles.row, styles.center]}>
          <TouchableOpacity style={styles.iconHolder}>
            <Image source={google} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconHolder}>
            <Image source={apple} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <FText>
          Already have an account{' '}
          <FText
            variant="bold"
            style={[styles.primaryText, styles.textUnderline]}
            onPress={()=> navigation.replace('login')}
          >
            Log in
          </FText>
        </FText>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
