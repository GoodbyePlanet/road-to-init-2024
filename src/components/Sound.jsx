import { PositionalAudio } from '@react-three/drei';
import { PAGES } from '../atoms.js';

const Sound = ({ currentPage }) => {
  const shouldPlayLittleWhoosh = [PAGES.CONTACT, PAGES.CONFERENCE, PAGES.SPEAKERS].includes(currentPage);
  const shouldPlayFastWhoosh = PAGES.HOME === currentPage;

  return (
    <>
      {shouldPlayLittleWhoosh && (
        <PositionalAudio autoplay loop={false} url="/sounds/little-whoosh-2-6301.mp3" distance={2} />
      )}
      {shouldPlayFastWhoosh && <PositionalAudio autoplay loop={false} url="/sounds/less_fast.mp3" distance={1} />}
    </>
  );
};

export default Sound;
