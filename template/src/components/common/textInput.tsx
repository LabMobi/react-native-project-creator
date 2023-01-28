import {StyleSheet, TextInputProps, TextInput as RNInput} from 'react-native';
import React, {useCallback} from 'react';
import {useTheme} from '@react-navigation/native';
import theme from '../../theme';
import {SearchInputProps} from './searchInput';
import _ from 'lodash';

const TextInput = (props: TextInputProps & SearchInputProps) => {
  const {colors} = useTheme();
  const {
    onChangeText,
    value,
    placeholder,
    style,
    handleChangeDebounce,
    debounceMiliSeconds = 300,
    ...rest
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(
    _.debounce(handleChangeDebounce, debounceMiliSeconds),
    [handleChangeDebounce],
  );
  return (
    <RNInput
      returnKeyType="done"
      placeholderTextColor={colors.text}
      selectionColor={colors.primary}
      onChangeText={text => {
        onChangeText(text);
        debouncedHandler(text);
      }}
      value={value}
      placeholder={placeholder}
      clearButtonMode="while-editing"
      style={[
        styles.input,
        {
          color: colors.primary,
          backgroundColor: colors.inputContainer,
          borderColor: colors.gray,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderRadius: theme.SIZES.cardBorderRadius,
    height: 50,
    paddingHorizontal: 10,
    width: '95%',

    borderWidth: 1,
  },
});
