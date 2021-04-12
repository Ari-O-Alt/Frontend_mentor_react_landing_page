import React from 'react';
import './Footer.scss';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const { children } = props;
  return <div className={'footerGeneral'}>{children}</div>;
};

export default Footer;
