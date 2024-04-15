import PropTypes from 'prop-types';

const Modal = ({ speaker, onModalClose }) => {
  return (
    <>
      <div className="pointer-events-auto rounded-lg p-6 backdrop-blur-sm bg-white/5 backdrop-brightness-150 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative rounded-lg bg-primary-dark w-auto my-6 mx-auto max-w-3xl">
          <div className="relative flex flex-col w-full">
            <div className="flex justify-center p-5">
              <div className="h-48 overflow-hidden">
                <img src={speaker.image} alt="placeholder" className="h-full object-cover invert" />
              </div>
              <button
                onClick={onModalClose}
                type="button"
                className="absolute right-0 top-0 m-3 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-primary-to dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center mb-3 font-semibold text-white">{speaker.name}</p>
            <h3 className="text-3xl pl-1 pr-1 text-center font-semibold text-white">{speaker.presentationTopic}</h3>
            <div className="relative p-6 flex-auto text-white">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">{speaker.presentationDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

Modal.propTypes = {
  speaker: PropTypes.object,
  onModalClose: PropTypes.func,
};

export default Modal;
