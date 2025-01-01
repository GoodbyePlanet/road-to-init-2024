import { SPEAKERS } from '../speakers.js';
import { useState } from 'react';
import Modal from './Modal.jsx';

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
      <div className="appears-content-with-mask fixed left-1/2 top-1/2 z-10 h-4/6 w-4/5 -translate-x-1/2 -translate-y-1/2 transform overflow-scroll rounded-lg">
        <div className="grid grid-cols-3 place-items-center gap-10 font-mono text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map(({ id, name, image, presentationTopic, presentationDescription }) => {
            return (
              <div
                onClick={() => handleOpenSpeakerInfo(id)}
                key={id}
                className="pointer-events-auto max-h-[470px] w-4/5 cursor-pointer rounded-lg bg-white/5 p-6 backdrop-blur-sm backdrop-brightness-150"
              >
                <figure>
                  <div className="flex h-48 justify-center overflow-hidden">
                    <img src={image} alt="placeholder" className="h-full object-cover invert" />
                  </div>
                  <div className="pl-4 pt-4">
                    <p>{name}</p>
                  </div>
                  <figcaption className="p-4">
                    <p className="mb-4 text-base font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {presentationTopic}
                    </p>
                    <small className="line-clamp-4 leading-5 text-gray-500 dark:text-gray-400">
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

export default Speakers;
