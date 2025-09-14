import React from 'react';
import { TextStyle } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import fonts from '../assets/fonts';

type FTextInputProps = TextInputProps & {
  fontSize?: number;
  variant?: 'regular' | 'medium' | 'bold';
  style?: TextStyle | TextStyle[];
};

const FTextInput = React.forwardRef<any, FTextInputProps>(({
  fontSize = 16,
  variant = 'regular',
  style,
  ...rest
}, ref) => {
  return (
    <TextInput
      ref={ref}
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
});

FTextInput.displayName = 'FTextInput';

export default FTextInput;