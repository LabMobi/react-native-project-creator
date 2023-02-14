import {ReactNode} from 'react';
import AlertModal from './alertModal';

export type AlertModalRefType = {
  show: () => void;
  hide: () => void;
};
export type Option = {
  icon: () => ReactNode;
  name: string;
  onPress: () => void;
};

export type ActionButton = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export type AlertModalProps = {
  title: string;
  description: string;
  options?: Option[];
  actionButton1: ActionButton;
  actionButton2?: ActionButton;
};

export {AlertModal};
