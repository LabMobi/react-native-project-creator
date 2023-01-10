import icons from '../../assets/icons';

export type IconTypes = keyof typeof icons;

export type IconProps = {
  icon: IconTypes;
  color?: string;
  fill?: string;
  size?: number | string;
  width?: number;
  height?: number;
};
