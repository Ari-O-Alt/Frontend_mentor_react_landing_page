import React from 'react';
import './Button.scss';
import { ButtonVariantEnum } from '../../resources/Enums';

interface IButtonProps {
  text: string;
  variant: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { text, variant } = props;

  const getButtonVariant = (variant: string): string => {
    if (variant === ButtonVariantEnum.White) {
      return 'buttonWhite';
    }

    return 'buttonTransparent';
  };

  const secondaryStyleClass = getButtonVariant(variant);
  return (
    <button className={`buttonGeneral ${secondaryStyleClass}`}>{text}</button>
  );
};

export default Button;
