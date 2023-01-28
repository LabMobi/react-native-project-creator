import React from 'react';
import {FlatList as RNFlatList} from 'react-native';
import {FlatListProps} from '../../utils/types/flatList';
import {useTheme} from '@react-navigation/native';

export function FlatList<T>(props: FlatListProps<T>): JSX.Element {
  const {
    style,
    contentContainerStyle,
    columnWrapperStyle,
    ListFooterComponentStyle,
    ListHeaderComponentStyle,
    ...remainingProps
  } = props;
  const {colors} = useTheme();

  return (
    <RNFlatList
      style={style && style}
      contentContainerStyle={[
        {backgroundColor: colors.background},
        contentContainerStyle && contentContainerStyle,
      ]}
      columnWrapperStyle={columnWrapperStyle && columnWrapperStyle}
      ListFooterComponentStyle={
        ListFooterComponentStyle && ListFooterComponentStyle
      }
      ListHeaderComponentStyle={
        ListHeaderComponentStyle && ListHeaderComponentStyle
      }
      {...remainingProps}
    />
  );
}
