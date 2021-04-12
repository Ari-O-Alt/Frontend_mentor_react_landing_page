import React from 'react';
import './Wrapper.scss';

interface IWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<IWrapperProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Wrapper;
