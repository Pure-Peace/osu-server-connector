import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

const Home = () => {
  const {
    i18n: { t },
  } = useContext(AppContext);

  return <div>{t('Hello')}</div>;
};

export default Home;
