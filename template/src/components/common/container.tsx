import React from 'react';
import {StyleSheet, ScrollView, Pressable, Keyboard} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';

interface ContainerType {
  children: any;
  keyboardAwareProps: any;
  useKeyboardAware: boolean;
  useScrollView: boolean;
  style?: any;
  contentContainerStyle?: any;
}

const Container = ({
  children,
  useScrollView,
  // useKeyboardAware,
  // keyboardAwareProps,
  style,
  contentContainerStyle,
}: ContainerType) => {
  const {colors} = useTheme();

  //  useKeyboardAware ? (
  //   <KeyboardAwareScrollView
  //     viewIsInsideTabBar
  //     {...keyboardAwareProps}
  //     style={[styles.container, style]}
  //     contentContainerStyle={[
  //       styles.contentContainerStyle,
  //       contentContainerStyle,
  //     ]}
  //     enableOnAndroid={false}
  //     extraScrollHeight={100}
  //     // viewIsInsideTabBar
  //   >
  //     {children}
  //   </KeyboardAwareScrollView>
  // ) :
  const backgroundColor = {backgroundColor: colors.primary};
  return useScrollView ? (
    <ScrollView
      bounces={false}
      style={[styles.scrollView, style, backgroundColor]}
      contentContainerStyle={[
        styles.contentContainerStyle,
        backgroundColor,
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  ) : (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      style={[styles.viewContainer, style, backgroundColor]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,

    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: '10%',
    paddingTop: 12,
    flexGrow: 1,

    paddingBottom: 24,
  },
});

Container.defaultProps = {
  useKeyboardAware: false,
  keyboardAwareProps: {},
  useScrollView: false,
};
export default Container;
