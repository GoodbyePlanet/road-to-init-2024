import { Suspense } from 'react';
import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { PositionalAudio } from '@react-three/drei';
import { isAtHome, isSoundEnabled, PAGES } from '../atoms.js';

const Sound = ({ currentPage }) => {
  const [soundEnabled] = useAtom(isSoundEnabled);
  const [isAtHomePage] = useAtom(isAtHome);

  const shouldPlayLittleWhoosh = [PAGES.CONTACT, PAGES.CONFERENCE, PAGES.SPEAKERS].includes(currentPage);

  return (
    <Suspense fallback={null}>
      <mesh>
        {soundEnabled && (
          <>
            <PositionalAudio autoplay loop url="/sounds/can39t-run-dark-electronic-10801.mp3" distance={0.6} />
            {shouldPlayLittleWhoosh && (
              <PositionalAudio autoplay loop={false} url="/sounds/little-whoosh-2-6301.mp3" distance={3} />
            )}
            {isAtHomePage && <PositionalAudio autoplay loop={false} url="/sounds/less_fast.mp3" distance={1} />}
          </>
        )}
      </mesh>
    </Suspense>
  );
};

Sound.propTypes = {
  currentPage: PropTypes.oneOf(Object.values(PAGES)).isRequired,
};

export default Sound;
