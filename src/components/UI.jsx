import {useAtom, useStore} from "jotai";
import {currentPageAtom, PAGES} from "../atoms.js";
import {SOCIAL_MEDIA} from "../socialMedia.jsx";
import {SPEAKERS} from "../speakers.js";

export const UI = () => {
	const [currentPage, _] = useAtom(currentPageAtom);

	const shouldShowButtons = currentPage === PAGES.HOME || currentPage === PAGES.CONFERENCE ||
		currentPage === PAGES.TEAM || currentPage === PAGES.SPEAKERS;
	const isOnPage = (page) => currentPage === page;
	const shouldShowHomeButton = isOnPage(PAGES.CONFERENCE) || isOnPage(PAGES.TEAM) || isOnPage(PAGES.SPEAKERS);

	return (
		<div className="fixed inset-0 pointer-events-none">
			<section
				className={`flex w-full h-full flex-col items-center justify-center duration-500 ${shouldShowButtons ? "" : "opacity-0"}`}>
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
				{isOnPage(PAGES.CONFERENCE) && (
					<div
						className="appears-content absolute left-7 top-56 rounded-lg p-6 w-4/12 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
						<p className="mb-4 text-base text-wrap">
							This can be dedicated section about init conference.
						</p>
						<p className="mb-4 text-base text-wrap">
							Brief history, previous conferences, venue...
						</p>
						<p className="mb-4 text-base text-wrap">
							It doesn't have to be section about conference,
							it can be about something else...
						</p>
					</div>
				)}
				{isOnPage(PAGES.TEAM) && (
					<div
						className="appears-content absolute right-7 top-56 rounded-lg p-6 w-4/12 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
						<p className="mb-4 text-base text-wrap">
							This can be dedicated section about the team of people behind init conf.
						</p>
						<p className="mb-4 text-base text-wrap">
							Brief intro about everyone involved in making INIT possible.
						</p>
					</div>
				)}
				{isOnPage(PAGES.SPEAKERS) && (
					<div
						className="appears-content w-4/5 fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10">
						<div className="grid grid-cols-3 gap-10 place-items-center font-mono text-white">
							{SPEAKERS.map(speaker => {
								return (
									<div
										className="w-4/5 rounded-lg p-6 backdrop-blur-sm bg-white/5 backdrop-brightness-150">
										<figure>
											<div className="h-48 overflow-hidden flex justify-center">
												<img src="placeholder1.png" alt="placeholder" className="h-full object-cover invert"/>
											</div>
											<figcaption className="p-4">
												<p
													className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
													5 Easy Tips That Will Make Your Latte Art Flourish
												</p>
												<small
													className="leading-5 text-gray-500 dark:text-gray-400 line-clamp-4">
													Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the
													world but what are they really? Have you ever wondered the difference between caffé latte vs. flat
													white? Let's see what makes caffé latte and flat white different from each other!
												</small>
											</figcaption>
										</figure>
									</div>
								)
							})}
						</div>
					</div>
				)}
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