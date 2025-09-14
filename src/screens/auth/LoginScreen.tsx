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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  
  const emailRef = React.useRef<any>(null);
  const passwordRef = React.useRef<any>(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Password validation regex (alphanumeric, 8+ characters)
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be alphanumeric and at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
  };

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={styles.container}>
      <View style={{ gap: 10 }}>
        <FText variant='bold' style={styles.titleText}>Welcome Back</FText>
        <FTextInput
          ref={emailRef}
          left={<TextInput.Icon icon="email" />}
          label="Username or Email"
          mode='outlined'
          keyboardType='email-address'
          returnKeyType='next'
          value={email}
          onChangeText={handleEmailChange}
          onSubmitEditing={() => passwordRef.current?.focus()}
          error={!!emailError}
        />
        <View style={{ gap: 5 }}>
          <FTextInput
            ref={passwordRef}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={isPasswordVisible ? "eye-off" : "eye"} onPress={() => setIsPasswordVisible(!isPasswordVisible)} />}
            label="Password"
            style={{ fontFamily: fonts.regular }}
            secureTextEntry={!isPasswordVisible}
            mode='outlined'
            value={password}
            onChangeText={handlePasswordChange}
            error={!!passwordError}
          />
          {passwordError ? (
            <FText style={{ color: theme.colors.error, fontSize: 12, marginTop: 4 }}>
              {passwordError}
            </FText>
          ) : null}
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
        <Button onPress={()=> navigation.replace("userstack")} style={[styles.btn]}>
          <FText>Continue as Guest</FText>
        </Button>
      </View>
    </ScrollView>
  )
}

export default withNavigation(LoginScreen)