import {useAtom, useStore} from "jotai";
import {currentPageAtom, PAGES} from "../atoms.js";
import {SOCIAL_MEDIA} from "../socialMedia.jsx";

export const UI = () => {
	const [currentPage, _] = useAtom(currentPageAtom);

	const shouldShowButtons = currentPage === PAGES.HOME || currentPage === PAGES.CONFERENCE ||
		currentPage === PAGES.TEAM || currentPage === PAGES.SPEAKERS;
	const isOnPage = (page) => currentPage === page;
	const shouldShowHomeButton = isOnPage(PAGES.CONFERENCE) || isOnPage(PAGES.TEAM) || isOnPage(PAGES.SPEAKERS);

	return (
		<div className="fixed inset-0 pointer-events-none">
			<section
				className={`flex w-full h-full flex-col items-center justify-center
      duration-500 ${shouldShowButtons ? "" : "opacity-0"}`}>
				<div className="h-[88%]"></div>
				{isOnPage(PAGES.HOME) && (
					<>
						<div className="flex gap-2">
							<Button page={PAGES.CONFERENCE}/>
							<Button page={PAGES.SPEAKERS}/>
							<Button page={PAGES.TEAM}/>
						</div>
						<div className="fixed bottom-7 right-4 flex flex-col gap-4">
							{SOCIAL_MEDIA.map(social => {
								return (
									<SocialMedia key={social.company} icon={social.icon} link={social.link}/>
								)
							})}
						</div>
					</>
				)}
				{shouldShowHomeButton && <Button page={PAGES.HOME}/>}
			</section>
		</div>
	);
};

const Button = ({page}) => {
	const store = useStore();

	return <button
		onClick={() => store.set(currentPageAtom, page)}
		className="pointer-events-auto py-4 px-8 bg-white-400 text-white font-semibold border border-gray-400 rounded shadow cursor-pointer transition-colors duration-500">
		{page.toUpperCase()}
	</button>;
}

const SocialMedia = ({icon, link}) => {
	const handleOnClick = () => {
		window.open(link, "_blank");
	}

	return (
		<button
			onClick={handleOnClick}
			className="pointer-events-auto py-2 px-8 bg-white-400 text-white font-semibold cursor-pointer transition-colors duration-500">
			{icon}
		</button>
	);
}