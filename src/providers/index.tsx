import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { useAppTheme } from '../theme';
import { Provider } from 'react-redux';

const Providers = ({ children }: { children: ReactNode }) => {
  const theme = useAppTheme();
  return (
    <Provider store={{} as any}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default Providers;
