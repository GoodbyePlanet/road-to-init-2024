import PropTypes from 'prop-types';

const Modal = ({ speaker, onModalClose }) => {
  return (
    <>
      <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden rounded-lg bg-white/5 p-6 outline-none backdrop-blur-sm backdrop-brightness-150 focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl rounded-lg bg-primary-dark">
          <div className="relative flex w-full flex-col">
            <div className="flex justify-center p-5">
              <div className="h-48 overflow-hidden">
                <img src={speaker.image} alt="placeholder" className="h-full object-cover invert" />
              </div>
              <button
                onClick={onModalClose}
                type="button"
                className="absolute right-0 top-0 m-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-white hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-primary-to dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="h-3 w-3"
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
            <p className="mb-3 text-center font-semibold text-white">{speaker.name}</p>
            <h3 className="pl-1 pr-1 text-center text-3xl font-semibold text-white">{speaker.presentationTopic}</h3>
            <div className="relative flex-auto p-6 text-white">
              <p className="text-blueGray-500 my-4 text-lg leading-relaxed">{speaker.presentationDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

Modal.propTypes = {
  speaker: PropTypes.object,
  onModalClose: PropTypes.func,
};

export default Modal;
