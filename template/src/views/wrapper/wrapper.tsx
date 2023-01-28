import React, {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Spinner from '../../components/common/spinner';

type Props = {
  children?: ReactNode;
};

const Wrapper = (props: Props) => {
  const {children} = props;
  const isSplashLoading = useSelector(
    (state: RootState) => state.appState.isSplashLoading,
  );
  const loading = useSelector((state: RootState) => state.appState.loading);

  const isLoading = isSplashLoading || loading;

  return (
    <>
      {children}
      {isLoading && <Spinner isSplashLoading={isSplashLoading} />}
    </>
  );
};

export default Wrapper;
