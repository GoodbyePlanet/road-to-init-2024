import { useAtom } from 'jotai';
import { currentPageAtom, isSceneLoadedAtom, isSoundEnabled, PAGES } from '../atoms.js';
import Button from './Button.jsx';
import SocialMedia from './SocialMedia.jsx';
import Conference from './Conference.jsx';
import Contact from './Contact.jsx';
import Speakers from './Speakers.jsx';
import Gears from './Gears.jsx';
import SoundIcon from './SoundIcon.jsx';

export const UI = () => {
  const [currentPage, _] = useAtom(currentPageAtom);
  const [sceneLoaded, __] = useAtom(isSceneLoadedAtom);
  const [soundEnabled, setIsSoundEnabled] = useAtom(isSoundEnabled);

  const shouldShowButtons =
    currentPage === PAGES.HOME ||
    currentPage === PAGES.CONFERENCE ||
    currentPage === PAGES.CONTACT ||
    currentPage === PAGES.SPEAKERS;
  const isOnPage = (page) => currentPage === page;
  const shouldShowHomeButton = isOnPage(PAGES.CONFERENCE) || isOnPage(PAGES.CONTACT) || isOnPage(PAGES.SPEAKERS);

  const handleSoundEnable = () => setIsSoundEnabled(!soundEnabled);

  return (
    <div className="pointer-events-none fixed inset-0">
      <section
        className={`flex h-full w-full flex-col items-center justify-center duration-500 ${shouldShowButtons ? '' : 'opacity-0'}`}
      >
        <div className="h-[88%]"></div>
        {sceneLoaded && (
          <div className="appears-content">
            {isOnPage(PAGES.HOME) && (
              <div className="flex gap-2">
                <Button page={PAGES.CONFERENCE} />
                <Button page={PAGES.SPEAKERS} />
                <Button page={PAGES.CONTACT} />
              </div>
            )}
            <div className="fixed bottom-7 right-4 flex flex-col gap-4">
              <SocialMedia />
            </div>
            <div className="pointer-events-auto fixed bottom-7 left-9 w-12 cursor-pointer hover:accent-yellow-400">
              <Gears />
            </div>
            <div className="pointer-events-auto fixed bottom-7 left-24 w-12 cursor-pointer hover:accent-yellow-400">
              <SoundIcon onSoundIconClick={handleSoundEnable} />
            </div>
          </div>
        )}
        {shouldShowHomeButton && <Button page={PAGES.HOME} />}
        {isOnPage(PAGES.CONFERENCE) && <Conference />}
        {isOnPage(PAGES.CONTACT) && <Contact />}
        {isOnPage(PAGES.SPEAKERS) && <Speakers />}
      </section>
    </div>
  );
};
