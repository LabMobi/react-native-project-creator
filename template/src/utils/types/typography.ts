import {CustomThemeColorType} from './theme';
import {ReactNode} from 'react';
import {TextTransform} from '../enums/typography';

export type TypographyProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  title?: boolean;
  subtitle?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: number;

  transform?: TextTransform;
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  weight?: number;
  light?: boolean;
  center?: boolean;
  right?: boolean;
  spacing?: number;
  height?: number;

  color: keyof CustomThemeColorType;
  primary?: boolean;
  secondary?: boolean;

  black?: boolean;
  white?: boolean;
  gray?: boolean;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  info?: boolean;
  style?: any;
  numberOfLines?: number;
  children: ReactNode;
};
