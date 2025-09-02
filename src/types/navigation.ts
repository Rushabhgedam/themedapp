import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { userId: string };
  Profile: { username: string };
  Settings: undefined;
};

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList
>;
