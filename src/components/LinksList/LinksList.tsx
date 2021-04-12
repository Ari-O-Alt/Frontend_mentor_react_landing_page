import React from 'react';
import './LinksList.scss';

export interface ILink {
  text: string;
  anchor: string;
}

export interface ILinksListData {
  /**
   * @links even if we have just one link, it must be into an array
   */
  links: ILink[];
  title?: string;
}

export interface ILinksListPops {
  footerLinksList: ILinksListData;
}

const LinksList: React.FC<ILinksListPops> = (props) => {
  const { footerLinksList: footerData } = props;
  return (
    <div className={'linksListGeneral'}>
      <h4>{footerData.title}</h4>
      <ul className={'list'}>
        {footerData.links.map((link, index) => {
          return (
            <li className={'listItem'} key={index}>
              <a className={'link'} href={link.anchor}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksList;
