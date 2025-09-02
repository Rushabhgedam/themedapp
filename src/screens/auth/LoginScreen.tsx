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

const LoginScreen = ({navigation}: any) => {
  const theme = useAppTheme();
  const styles = loginStyles(theme);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={styles.container}>
      <View style={{ gap: 10 }}>
        <FText variant='bold' style={styles.titleText}>Welcome Back</FText>
        <FTextInput
          left={<TextInput.Icon icon="email" />}
          label="Username or Email"
          mode='outlined'
        />
        <View style={{ gap: 5 }}>

          <FTextInput
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={isPasswordVisible ? "eye-off" : "eye"} onPress={() => setIsPasswordVisible(!isPasswordVisible)} />}
            label="Password"
            style={{ fontFamily: fonts.regular }}
            secureTextEntry={isPasswordVisible}
            mode='outlined'
          />
          <FText onPress={()=> navigation.navigate("forget-password")} style={styles.secondaryText}>Forgot Password ?</FText>
        </View>
        <Button style={styles.btn} mode='contained'>
          <FText style={styles.onPrimaryTxt}>Login</FText>
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
        <FText>Create An Account <FText variant='bold' style={[styles.primaryText, styles.textUnderline]} onPress={()=> navigation.navigate('register')}>Sign Up</FText></FText>
        <FText style={styles.centerTxt}>- OR -</FText>
        <Button style={[styles.btn]}>
          <FText>Continue as Guest</FText>
        </Button>
      </View>
    </ScrollView>
  )
}

export default withNavigation(LoginScreen)