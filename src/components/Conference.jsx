const Conference = () => (
  <>
    <div className="appears-content absolute left-7 top-56 rounded-lg p-6 w-4/12 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
      <p className="uppercase 3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-lg 3xl:mb-12 2xl:mb-5 mb-8 3xl:max-w-[619px] 2xl:max-w-[500px] xl:max-w-[460px]">
        LETS MEET ON SEPTEMBER 2024 BANSKI DVOR / BANJA LUKA
      </p>
      <p className="uppercase mt-2 mb-5">[ BUY TICKETS ]</p>
      <p className="uppercase mt-2 mb-2">History</p>
      <p className="mb-4 text-base text-wrap">
        INIT was started in 2019 as a non-profit technology conference focused on development of a successful community
        of professionals in the field of software development.
      </p>
      <p className="mb-4 text-base text-wrap">
        The first INIT gathered more than 500 participants and 19 lecturers, encountering a fantastic reception in IT to
        the community. Now we proudly continue our mission: to create an environment which supports, inspires and
        spreads knowledge among IT professionals of all profiles, helping them build world-class skills.
      </p>
    </div>
    <div className="appears-content text-center absolute right-7 top-56 rounded-lg p-6 w-1/5 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
      <p className="mb-4 text-base text-wrap font-extrabold">POWERED BY</p>
      <a
        href="https://sessionize.com"
        target="_blank"
        className="mb-4 pointer-events-auto cursor-pointer text-base text-wrap"
      >
        [ SESSIONIZE.COM ]
      </a>
      <br />
      <a
        href="https://dzobs.com"
        target="_blank"
        className="mb-4 pointer-events-auto cursor-pointer text-base text-wrap"
      >
        [ DZOBS.COM ]
      </a>

      <p className="mb-4 mt-4 text-base text-wrap font-extrabold">GALLERY</p>
      <a
        href="https://www.flickr.com/photos/195738908@N05/sets/72177720299447854/"
        target="_blank"
        className="mb-4 pointer-events-auto cursor-pointer text-base text-wrap"
      >
        [ INIT 2019 ]
      </a>
      <br />
      <a
        href="https://www.flickr.com/photos/195738908@N05/albums/72177720302433321/"
        target="_blank"
        className="mb-4 pointer-events-auto cursor-pointer text-base text-wrap"
      >
        [ INIT 2022 ]
      </a>
    </div>
  </>
);
export default Conference;
