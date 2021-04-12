// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ButtonVariantEnum } from '../../resources/Enums';
import Button from '../Button/Button';
import './Header.scss';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuDialog from '../MenuDialog/MenuDialog';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { propsMenuItems } from '../data';

interface IHeaderProps {
  menuLinks: string[];
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { menuLinks } = props;
  return (
    <div className={'headerGeneral'}>
      <MenuDialog menuItems={menuLinks} />
      <h2 className={'logo'}>Blogr</h2>

      <div className={'menuIcon'}>
        <HamburgerMenu menuItems={propsMenuItems} />
      </div>

      <h2 className={'headerTitle gridItem'}> A modern publishing platform</h2>
      <h4 className={'headerSubTitle gridItem'}>
        Grow your audience and build your online brand
      </h4>
      <div className={'leftButton'}>
        <Button text={'Start For Free'} variant={ButtonVariantEnum.White} />
      </div>

      <div className={'rightButton'}>
        <Button text={'Learn More'} variant={ButtonVariantEnum.Transparent} />
      </div>
    </div>
  );
};

export default Header;
