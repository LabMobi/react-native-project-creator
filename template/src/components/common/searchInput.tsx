import React, {useCallback} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import _ from 'lodash';

import {useTheme} from '@react-navigation/native';

export type SearchInputProps = TextInputProps & {
  debounceMiliSeconds?: number;
  handleChangeDebounce: (value: any, event?: any) => void;
  onChangeText: (value: any, event?: any) => void;
};
export default function SearchInput(props: SearchInputProps) {
  const {
    debounceMiliSeconds = 600,
    onChangeText,
    handleChangeDebounce,
    ...rest
  } = props;
  const {colors} = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(
    _.debounce(handleChangeDebounce, debounceMiliSeconds),
    [handleChangeDebounce],
  );

  return (
    <TextInput
      style={[
        styles.searchInput,
        {backgroundColor: colors.lightGrayBG, color: colors.text},
      ]}
      placeholder="Search..."
      placeholderTextColor={colors.primary}
      onChangeText={text => {
        onChangeText(text);
        debouncedHandler(text);
      }}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  searchInput: {
    width: '90%',
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    alignSelf: 'center',
  },
});
