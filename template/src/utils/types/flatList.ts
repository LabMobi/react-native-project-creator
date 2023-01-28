import {FlatListProps as RNFlatListProps, ViewStyle} from 'react-native';

export type FlatListProps<T> = Omit<
  RNFlatListProps<T>,
  | 'style'
  | 'contentContainerStyle'
  | 'columnWrapperStyle'
  | 'ListFooterComponentStyle'
  | 'ListHeaderComponentStyle'
> & {
  style?: ViewStyle;
  columnWrapperStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  ListFooterComponentStyle?: ViewStyle;
  ListHeaderComponentStyle?: ViewStyle;
};
