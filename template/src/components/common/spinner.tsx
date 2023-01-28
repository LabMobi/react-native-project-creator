import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import Typography from './typography';

type LoadingSpinnerPropsType = {
  isSplashLoading: boolean;
};

const LoadingSpinner = (props: LoadingSpinnerPropsType) => {
  const {isSplashLoading} = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
      {isSplashLoading && (
        <Typography title center style={styles.text}>
          Your awesome app is loading... {'\n'} Please wait..
        </Typography>
      )}
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    color: 'white',
    fontStyle: 'italic',
  },
});
