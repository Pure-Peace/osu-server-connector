import { useContext } from 'react';
import Card, { CardAction, CardActionButton } from '../components/Card';
import { AppContext } from '../contexts/appContext';

const Home = () => {
  const {
    i18n: { t },
  } = useContext(AppContext);

  return (
    <div>
      <Card
        action={
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {t('Hello')}
            </div>
            <CardActionButton>Action</CardActionButton>
          </>
        }
      >
        <div style={{ height: '330px' }}>d</div>
      </Card>
    </div>
  );
};

export default Home;
