import React from 'react';
import './MenuItem.scss';

interface ISubmenuItem {
  title: string;
  link: string;
}

export interface IMenuItemProps {
  menuItemTitle: string;
  subMenuItems?: ISubmenuItem[];
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { menuItemTitle, subMenuItems } = props;

  const [showSubItems, setShowSubItems] = React.useState<boolean>(false);

  const toggleCheckBox = () => {
    setShowSubItems(!showSubItems);
  };
  return (
    <div className={'menuItem'}>
      {menuItemTitle}
      <input type='checkbox' onChange={toggleCheckBox} />
      {subMenuItems &&
        showSubItems &&
        subMenuItems.map((menuItem, index) => {
          return (
            <div key={index}>
              <a href={`${menuItem.link}`}>{menuItem.title}</a>
            </div>
          );
        })}
    </div>
  );
};

export default MenuItem;
