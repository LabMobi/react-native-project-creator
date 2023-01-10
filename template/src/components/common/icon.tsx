import React from 'react';
import {IconProps} from '../../utils/types/icon';
import icons from '../../assets/icons';
import {useTheme} from '@react-navigation/native';

const Icon = (props: IconProps) => {
  const {colors} = useTheme();

  const {
    icon,
    color = colors.primary,
    size = 14,
    height = 24,
    width = 24,
    fill,
  } = props;
  const IconComponent = icons[icon];

  return React.createElement(IconComponent, {
    color,
    fill,
    height: height ?? size,
    width: width ?? size,
  });
};

export default Icon;
