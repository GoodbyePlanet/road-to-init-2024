import PropTypes from 'prop-types';
import { useStore } from 'jotai';
import { currentPageAtom } from '../atoms.js';

const Button = ({ page }) => {
  const store = useStore();

  return (
    <button
      onClick={() => store.set(currentPageAtom, page)}
      className="bg-white-400 pointer-events-auto cursor-pointer rounded border border-gray-400 px-8 py-4 font-semibold text-white shadow transition-colors duration-500"
    >
      {page.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  page: PropTypes.string,
};

export default Button;
