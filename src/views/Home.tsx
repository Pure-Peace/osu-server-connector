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
            <div
              style={{ display: 'flex', alignItems: 'center', padding: '10px' }}
            >
              Pure-Peace
            </div>
            <CardActionButton>Launch</CardActionButton>
          </>
        }
      >
        <div style={{ height: '310px', padding: '15px' }}>Grakjgl;skd</div>
      </Card>
    </div>
  );
};

export default Home;
