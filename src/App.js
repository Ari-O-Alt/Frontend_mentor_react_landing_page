import './App.scss';
import Header from './components/Header/Header';
import { headerMenuLinks } from './components/data.ts';
import Wrapper from './components/Wrapper/Wrapper';
import PageContent from './components/PageContent/PageContent';

const menuLinks = headerMenuLinks;

const App = () => {
  return (
    <Wrapper>
      <Header menuLinks={menuLinks} />
      <PageContent />
    </Wrapper>
  );
};

export default App;
