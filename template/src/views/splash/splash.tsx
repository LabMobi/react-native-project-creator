import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
// import {getListsThunk} from '../../redux/thunks';
import theme from '../../theme';
import {setIsSplasLoading} from '../../redux/appSlice';

const Splash = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getListsThunk());
    setTimeout(() => {
      dispatch(setIsSplasLoading(false));
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View style={styles.container} />;
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.splashBG,
  },
});
