import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { useAppTheme } from '../theme';

const Providers = ({ children }: { children: ReactNode }) => {
  const theme = useAppTheme()
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </PaperProvider>
  )
}

export default Providers
