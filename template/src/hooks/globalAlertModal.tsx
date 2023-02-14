import React, {createRef, useImperativeHandle, useRef, useState} from 'react';
import AlertModal from '../components/common/alertModal/alertModal';
import {
  AlertModalProps,
  AlertModalRefType,
} from '../components/common/alertModal';

export const globalAlertModalRef = createRef<GlobalAlertModalRefType>();
export type GlobalAlertModalRefType = {
  show: (props: AlertModalProps) => void;
  hide: () => void;
};
export const GlobalAlertModal = React.forwardRef(
  (props, ref: React.Ref<GlobalAlertModalRefType>) => {
    const [modalProps, setModalProps] = useState({} as AlertModalProps);

    const AlertModalRef = useRef<AlertModalRefType>(null);

    const handleShow = (showProps: AlertModalProps) => {
      setModalProps(showProps);
      AlertModalRef.current?.show();
    };

    const handleHide = () => {
      AlertModalRef.current?.hide();
    };

    useImperativeHandle(ref, () => ({
      show: handleShow,
      hide: handleHide,
    }));

    return <AlertModal ref={AlertModalRef} {...modalProps} />;
  },
);
