import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Typography from '../../components/common/typography';
import Container from '../../components/common/container';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamsList} from '../../utils/types/routes';
// import {ScreenNames} from '../../navigation/screens';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  return (
    <Container>
      <TouchableOpacity style={styles.button}>
        <Typography bold>{t('screens.home.header.title')}</Typography>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    width: 160,
    borderRadius: 10,
    height: 55,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
