import PropTypes from "prop-types";
import {useStore} from "jotai";
import {currentPageAtom} from "../atoms.js";

const Button = ({page}) => {
	const store = useStore();

	return <button
		onClick={() => store.set(currentPageAtom, page)}
		className="pointer-events-auto py-4 px-8 bg-white-400 text-white font-semibold border border-gray-400 rounded shadow cursor-pointer transition-colors duration-500">
		{page.toUpperCase()}
	</button>;
}

Button.propTypes = {
	page: PropTypes.string
}

export default Button;