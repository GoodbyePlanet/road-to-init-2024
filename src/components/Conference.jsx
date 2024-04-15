const Conference = () => (
  <>
    <div className="appears-content absolute left-7 top-56 w-4/12 rounded-lg bg-white/5 p-6 font-mono text-white backdrop-blur-sm backdrop-brightness-150">
      <p className="3xl:text-[32px] 3xl:mb-12 3xl:max-w-[619px] mb-8 text-lg uppercase xl:max-w-[460px] xl:text-[22px] 2xl:mb-5 2xl:max-w-[500px] 2xl:text-[28px]">
        LETS MEET ON SEPTEMBER 2024 BANSKI DVOR / BANJA LUKA
      </p>
      <p className="mb-5 mt-2 uppercase">[ BUY TICKETS ]</p>
      <p className="mb-2 mt-2 uppercase">History</p>
      <p className="mb-4 text-wrap text-base">
        INIT was started in 2019 as a non-profit technology conference focused on development of a successful community
        of professionals in the field of software development.
      </p>
      <p className="mb-4 text-wrap text-base">
        The first INIT gathered more than 500 participants and 19 lecturers, encountering a fantastic reception in IT to
        the community. Now we proudly continue our mission: to create an environment which supports, inspires and
        spreads knowledge among IT professionals of all profiles, helping them build world-class skills.
      </p>
    </div>
    <div className="appears-content absolute right-7 top-56 w-1/5 rounded-lg bg-white/5 p-6 text-center font-mono text-white backdrop-blur-sm backdrop-brightness-150">
      <p className="mb-4 text-wrap text-base font-extrabold">POWERED BY</p>
      <a
        href="https://sessionize.com"
        target="_blank"
        className="pointer-events-auto mb-4 cursor-pointer text-wrap text-base"
      >
        [ SESSIONIZE.COM ]
      </a>
      <br />
      <a
        href="https://dzobs.com"
        target="_blank"
        className="pointer-events-auto mb-4 cursor-pointer text-wrap text-base"
      >
        [ DZOBS.COM ]
      </a>

      <p className="mb-4 mt-4 text-wrap text-base font-extrabold">GALLERY</p>
      <a
        href="https://www.flickr.com/photos/195738908@N05/sets/72177720299447854/"
        target="_blank"
        className="pointer-events-auto mb-4 cursor-pointer text-wrap text-base"
      >
        [ INIT 2019 ]
      </a>
      <br />
      <a
        href="https://www.flickr.com/photos/195738908@N05/albums/72177720302433321/"
        target="_blank"
        className="pointer-events-auto mb-4 cursor-pointer text-wrap text-base"
      >
        [ INIT 2022 ]
      </a>
    </div>
  </>
);
export default Conference;
