import {SPEAKERS} from "../speakers.js";

const Speakers = () => (
	<div
		className="appears-content-with-mask overflow-scroll pointer-events-auto h-4/6 w-4/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10">
		<div
			className="grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center font-mono text-white">
			{SPEAKERS.map(({name, image, presentationTopic, presentationDescription}) => {
				return (
					<div
						className=" w-4/5 rounded-lg p-6 backdrop-blur-sm bg-white/5 backdrop-brightness-150">
						<figure>
							<div className="h-48 overflow-hidden flex justify-center">
								<img src={image} alt="placeholder" className="h-full object-cover invert"/>
							</div>
							<figcaption className="p-4">
								<p
									className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
									{presentationTopic}
								</p>
								<small
									className="leading-5 text-gray-500 dark:text-gray-400 line-clamp-4">{presentationDescription}</small>
							</figcaption>
						</figure>
					</div>
				)
			})}
		</div>
	</div>
);

export default Speakers;