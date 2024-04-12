const Contact = () => (
  <>
    <div className="appears-content absolute left-7 top-56 rounded-lg p-6 w-4/12 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
      <div className="lg:w-full">
        <p className="uppercase 3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-lg 3xl:mb-12 2xl:mb-5 mb-8 3xl:max-w-[619px] 2xl:max-w-[500px] xl:max-w-[460px]">
          Are you interested in speaking at Init Conference 2024?
          <br />
          Submit your proposal here.
        </p>
        <span className="mb-3 block"></span>
        <a
          target="_blank"
          className="pointer-events-auto cursor-pointer opacity-70 bracket-button py-1 uppercase"
          href="https://sessionize.com/init-2024"
          rel="noreferrer"
        >
          [ Call for Speakers ]
        </a>
      </div>
    </div>
    <div className="appears-content absolute right-7 top-56 rounded-lg p-6 w-4/12 backdrop-blur-sm bg-white/5 backdrop-brightness-150 font-mono text-white">
      <div className="lg:w-full">
        <h2 className="uppercase 3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-lg 3xl:mb-12 2xl:mb-5 mb-8 3xl:max-w-[619px] 2xl:max-w-[500px] xl:max-w-[460px]">
          Do you want to be a sponsor of Init Conference?
          <br />
          You can download our sponsorship packages.
        </h2>
        <a
          target="_blank"
          className="pointer-events-auto cursor-pointer opacity-70 bracket-button py-1 uppercase"
          href="/assets/sponzorski-paketi-2024.pdf"
          download=""
        >
          [ Sponsorship Packages ]
        </a>
        <br />
        <a
          className="pointer-events-auto cursor-pointer opacity-70 bracket-button py-1 uppercase"
          href="mailto:info@initconf.org"
        >
          [ Become a sponsor ]
        </a>
      </div>
    </div>
  </>
);

export default Contact;
