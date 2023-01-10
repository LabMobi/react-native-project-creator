import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Theme from '../../theme/theme';
import {TypographyProps} from '../../utils/types/typography';
import {useTheme} from '@react-navigation/native';

const Typography = (props: TypographyProps) => {
  const {colors} = useTheme();

  const {
    // fonts & sizes
    h1,
    h2,
    h3,
    title,
    subtitle,
    caption,
    small,
    size,
    // styling
    transform,
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    primary,
    secondary,

    black,
    white,
    gray,
    error,
    warning,
    success,
    info,
    style,
    children,
    ...rest
  } = props;

  const textStyles = StyleSheet.flatten([
    {
      fontWeight: Theme.WEIGHTS.regular,
      fontSize: Theme.SIZES.font,
      color: colors.text,
      // fontFamily: Theme.FONTFAMILY.fontFamily,
    },
    h1 && Theme.FONTS.h1,
    h2 && Theme.FONTS.h2,
    h3 && Theme.FONTS.h3,
    title && Theme.FONTS.title,
    subtitle && Theme.FONTS.subtitle,
    caption && Theme.FONTS.caption,
    small && Theme.FONTS.small,
    size && {fontSize: size},
    transform && {textTransform: transform},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && {fontWeight: Theme.WEIGHTS.regular},
    bold && {fontWeight: Theme.WEIGHTS.bold},
    semibold && {fontWeight: Theme.WEIGHTS.semibold},
    medium && {fontWeight: Theme.WEIGHTS.medium},
    light && {fontWeight: Theme.WEIGHTS.light},
    center && styles.center,
    right && styles.right,
    // color shortcuts
    primary && {color: colors.primary},
    secondary && {color: colors.secondary},

    black && {color: colors.black},
    white && {color: colors.white},
    gray && {color: colors.gray},
    error && {color: colors.error},
    warning && {color: colors.warning},
    success && {color: colors.success},
    info && {color: colors.info},
    color && {color},
    style, // rewrite predefined styles
  ]);

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  // fonts & sizes
  h1: false,
  h2: false,
  h3: false,
  title: false,
  subtitle: false,
  caption: false,
  small: false,
  size: null,
  margin: null,
  padding: null,
  // styling
  transform: null,
  regular: false,
  bold: false,
  semibold: false,
  medium: false,
  weight: false,
  light: false,
  center: false,
  right: false,
  spacing: null, // letter-spacing
  height: null, // line-height
  // colors
  color: null,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  error: false,
  warning: false,
  success: false,
  info: false,
  theme: {},
  style: {},
};
export default Typography;

const styles = StyleSheet.create({
  // positioning
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
});
