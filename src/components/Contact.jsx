const Contact = () => (
  <>
    <div className="appears-content absolute left-7 top-56 w-4/12 rounded-lg bg-white/5 p-6 font-mono text-white backdrop-blur-sm backdrop-brightness-150">
      <div className="lg:w-full">
        <p className="3xl:text-[32px] 3xl:mb-12 3xl:max-w-[619px] mb-8 text-lg uppercase xl:max-w-[460px] xl:text-[22px] 2xl:mb-5 2xl:max-w-[500px] 2xl:text-[28px]">
          Are you interested in speaking at Init Conference 2024?
          <br />
          Submit your proposal here.
        </p>
        <span className="mb-3 block"></span>
        <a
          target="_blank"
          className="bracket-button pointer-events-auto cursor-pointer py-1 uppercase opacity-70"
          href="https://sessionize.com/init-2024"
          rel="noreferrer"
        >
          [ Call for Speakers ]
        </a>
      </div>
    </div>
    <div className="appears-content absolute right-7 top-56 w-4/12 rounded-lg bg-white/5 p-6 font-mono text-white backdrop-blur-sm backdrop-brightness-150">
      <div className="lg:w-full">
        <h2 className="3xl:text-[32px] 3xl:mb-12 3xl:max-w-[619px] mb-8 text-lg uppercase xl:max-w-[460px] xl:text-[22px] 2xl:mb-5 2xl:max-w-[500px] 2xl:text-[28px]">
          Do you want to be a sponsor of Init Conference?
          <br />
          You can download our sponsorship packages.
        </h2>
        <a
          target="_blank"
          className="bracket-button pointer-events-auto cursor-pointer py-1 uppercase opacity-70"
          href="/assets/sponzorski-paketi-2024.pdf"
          download=""
        >
          [ Sponsorship Packages ]
        </a>
        <br />
        <a
          className="bracket-button pointer-events-auto cursor-pointer py-1 uppercase opacity-70"
          href="mailto:info@initconf.org"
        >
          [ Become a sponsor ]
        </a>
      </div>
    </div>
  </>
);

export default Contact;
