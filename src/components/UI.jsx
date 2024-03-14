import { useAtom } from 'jotai';
import { currentPageAtom, PAGES } from '../atoms.js';
import Button from './Button.jsx';
import SocialMedia from './SocialMedia.jsx';
import Conference from './Conference.jsx';
import Team from './Team.jsx';
import Speakers from './Speakers.jsx';

export const UI = () => {
  const [currentPage, _] = useAtom(currentPageAtom);

  const shouldShowButtons =
    currentPage === PAGES.HOME ||
    currentPage === PAGES.CONFERENCE ||
    currentPage === PAGES.TEAM ||
    currentPage === PAGES.SPEAKERS;
  const isOnPage = (page) => currentPage === page;
  const shouldShowHomeButton =
    isOnPage(PAGES.CONFERENCE) ||
    isOnPage(PAGES.TEAM) ||
    isOnPage(PAGES.SPEAKERS);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center duration-500 ${shouldShowButtons ? '' : 'opacity-0'}`}
      >
        <div className="h-[88%]"></div>
        {isOnPage(PAGES.HOME) && (
          <>
            <div className="flex gap-2">
              <Button page={PAGES.CONFERENCE} />
              <Button page={PAGES.SPEAKERS} />
              <Button page={PAGES.TEAM} />
            </div>
            <div className="fixed bottom-7 right-4 flex flex-col gap-4">
              <SocialMedia />
            </div>
          </>
        )}
        {shouldShowHomeButton && <Button page={PAGES.HOME} />}
        {isOnPage(PAGES.CONFERENCE) && <Conference />}
        {isOnPage(PAGES.TEAM) && <Team />}
        {isOnPage(PAGES.SPEAKERS) && <Speakers />}
      </section>
    </div>
  );
};
