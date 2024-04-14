import { SPEAKERS } from '../speakers.js';
import { useState } from 'react';

const Speakers = () => {
  const [showModal, setShowModal] = useState(false);
  const [speaker, setSpeaker] = useState(null);

  const handleOpenSpeakerInfo = (speakerId) => {
    const speaker = SPEAKERS.find((s) => s.id === speakerId);
    setShowModal(true);
    setSpeaker(speaker);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {showModal && <Modal speaker={speaker} onModalClose={handleCloseModal} />}
      <div className="appears-content-with-mask overflow-scroll h-4/6 w-4/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10">
        <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center font-mono text-white">
          {SPEAKERS.map(({ id, name, image, presentationTopic, presentationDescription }) => {
            return (
              <div
                onClick={() => handleOpenSpeakerInfo(id)}
                key={id}
                className="pointer-events-auto cursor-pointer w-4/5 max-h-[470px] rounded-lg p-6 backdrop-blur-sm bg-white/5 backdrop-brightness-150"
              >
                <figure>
                  <div className="h-48 overflow-hidden flex justify-center">
                    <img src={image} alt="placeholder" className="h-full object-cover invert" />
                  </div>
                  <div className="pt-4 pl-4">
                    <p>{name}</p>
                  </div>
                  <figcaption className="p-4">
                    <p className="text-base mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {presentationTopic}
                    </p>
                    <small className="leading-5 text-gray-500 dark:text-gray-400 line-clamp-4">
                      {presentationDescription}
                    </small>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Modal = ({ speaker, onModalClose }) => {
  console.log('SPEAKER ID', speaker);
  return (
    <>
      <div className="pointer-events-auto rounded-lg p-6 backdrop-blur-sm bg-white/5 backdrop-brightness-150 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative rounded-lg bg-primary-via w-auto my-6 mx-auto max-w-3xl">
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
            <h3 className="text-3xl text-center font-semibold text-white">{speaker.presentationTopic}</h3>
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

export default Speakers;
