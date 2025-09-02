import React from 'react';
import { useNavigation } from '@react-navigation/native';

function withNavigation<P>(WrappedComponent: React.ComponentType<P & { navigation: any }>) {
  return function WithNavigationComponent(props: P) {
    const navigation = useNavigation();
    return <WrappedComponent {...props} navigation={navigation} />;
  };
}

export default withNavigation;