import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HamburgerMenu.scss';
import MenuItem, { IMenuItemProps } from './MenuItem/MenuItem';

interface IHamburgerMenuProps {
  menuItems: IMenuItemProps[];
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = (props) => {
  const [isIconClicked, setIsIconClicked] = React.useState<boolean>(false);

  const { menuItems } = props;

  const toggleIconState = () => {
    setIsIconClicked(!isIconClicked);
  };

  return (
    <div>
      {isIconClicked ? (
        <FontAwesomeIcon
          icon={faTimes}
          size={'1x'}
          className={'hamburgerMenuIcon'}
          onClick={toggleIconState}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size={'1x'}
          className={'hamburgerMenuIcon'}
          onClick={toggleIconState}
        />
      )}
      {menuItems.map((menuItem, index) => {
        return (
          <MenuItem
            key={index}
            menuItemTitle={menuItem.menuItemTitle}
            subMenuItems={menuItem.subMenuItems}
          />
        );
      })}
    </div>
  );
};

export default HamburgerMenu;
