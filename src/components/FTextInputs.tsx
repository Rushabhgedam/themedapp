import React from 'react';
import { TextStyle } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import fonts from '../assets/fonts';

type FTextInputProps = TextInputProps & {
  fontSize?: number;
  variant?: 'regular' | 'medium' | 'bold';
  style?: TextStyle | TextStyle[];
};

const FTextInput: React.FC<FTextInputProps> = ({
  fontSize = 16,
  variant = 'regular',
  style,
  ...rest
}) => {
  return (
    <TextInput
      style={[
        {
          fontFamily: fonts[variant],
          fontSize,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default FTextInput;