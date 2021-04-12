import React from 'react';
import './MenuDialog.scss';

interface IMenuDialogProps {
  menuItems: string[];
}

const MenuDialog: React.FC<IMenuDialogProps> = (props) => {
  const { menuItems } = props;
  return (
    <div className={'dialogGeneral hideDialog'}>
      {menuItems.map((menuItem, index) => {
        return <div key={index}>{menuItem}</div>;
      })}
    </div>
  );
};

export default MenuDialog;
