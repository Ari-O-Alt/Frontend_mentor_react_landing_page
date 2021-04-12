import React from 'react';
import './Section.scss';

interface ISectionProps {
  cssClassName?: string[];
}

const Section: React.FC<ISectionProps> = (props) => {
  const { cssClassName, children } = props;

  // we prepare the array of styles we want to pass down
  const arrayOfStyles = cssClassName?.join(' ');

  return <div className={`sectionGeneral ${arrayOfStyles}`}>{children}</div>;
};

export default Section;
