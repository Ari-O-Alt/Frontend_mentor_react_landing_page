import React from 'react';
import './PageContent.scss';
import illustrationEditorMobile from '../../resources/images/illustration-editor-mobile.svg';
// import illustrationPhones from '../../resources/images/illustration-phones.svg';
import illustrationLaptopMobile from '../../resources/images/illustration-laptop-mobile.svg';
// import illustrationCircles from '../../resources/images/bg-pattern-circles.svg';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import LinksList from '../LinksList/LinksList';
import { footerLinksLists } from '../../resources/data/LinksLists';

interface IPageContentProps {
  // children: React.ReactNode | React.ReactNode[];
}

const PageContent: React.FC<IPageContentProps> = (props) => {
  // const { children } = props;
  return (
    <div>
      <Section>
        <h4 className={'title'}>Designed for the future</h4>
        <img
          className={'sectionImage'}
          alt='text-editor-illustration'
          src={illustrationEditorMobile}
        />
      </Section>
      <Section>
        <h4 className={'title'}>Introducing an extensible editor</h4>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </Section>
      <Section>
        <h4 className={'title'}>Robust content management</h4>
        <p className={'extraMargin'}>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </Section>

      {/* <Section cssClassName={['overlay']}>
        <img
          className={'sectionImage'}
          alt='two-phones-illustration'
          src={illustrationPhones}
        />
      </Section>
      <Section>
        <img
          className={'sectionImage'}
          alt='three-circles-illustration'
          src={illustrationCircles}
        />
      </Section> */}

      <div className={'combinedImages'}></div>

      <Section cssClassName={['darkBgColor']}>
        <h4 className={'title'}>State of the Art Infrastructure</h4>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </Section>
      <Section>
        <img
          className={'sectionImage'}
          alt='laptop-illustration'
          src={illustrationLaptopMobile}
        />
      </Section>
      <Section>
        <h4 className={'title'}>Free, open, simple</h4>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </Section>
      <Section>
        <h4 className={'title'}>Powerful tooling</h4>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </Section>
      <Footer>
        <h2 className={'footerTitle'}>Blogr</h2>
        {footerLinksLists.map((footerLinksList, index) => {
          return <LinksList key={index} footerLinksList={footerLinksList} />;
        })}
      </Footer>
    </div>
  );
};

export default PageContent;
