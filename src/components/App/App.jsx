import Topbar from '../Topbar';
import SpaceWrapper from '../SpaceWrapper';
import Stars from '../Stars';
import Rocket from '../Rocket';
import Platform from '../Platform';
import Text from '../Text';
import { useEffect, useState } from 'react';
import Restart from '../Restart';

const App = () => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);

  useEffect(() => {
    if (isAnimationEnd === false) {
      setTimeout(() => {
        setIsAnimationEnd(true);
      }, 5000);
    }
  }, [isAnimationEnd]);

  const restartAnimation = () => {
    setIsAnimationEnd(false);
  };

  return (
    <>
      <Stars />
      <Topbar />
      <SpaceWrapper>
        {isAnimationEnd ? (
          <>
            <Rocket type="second" />
            <Text />
            <Restart restartAnimation={restartAnimation} />
          </>
        ) : (
          <>
            <Rocket type="first" />
            <Platform />
          </>
        )}
      </SpaceWrapper>
    </>
  );
};

export default App;
