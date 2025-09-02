import React from 'react';
import { TextProps, TextStyle } from 'react-native';
import fonts from '../assets/fonts';
import { Text } from 'react-native-paper';

type FTextProps = TextProps & {
  variant?: 'regular' | 'medium' | 'bold';
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};


const FText: React.FC<FTextProps> = ({
  children,
  variant = 'regular',
  style,
  ...rest
}) => {
  return (
    <Text
      style={[{ fontFamily: fonts[variant] }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default FText; 