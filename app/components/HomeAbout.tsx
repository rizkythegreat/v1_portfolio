const HomeAbout = () => {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    As a passionate Frontend Web Developer, I specialize in
                    creating top-notch and user-friendly websites. With
                    extensive experience in crafting digital solutions for
                    various businesses, I bring a blend of creativity and
                    technical expertise to the table. My commitment to staying
                    up-to-date with the latest technologies ensures that I
                    deliver websites that not only meet but exceed client
                    expectations.
                </p>
                <p className="mb-4">
                    In the ever-evolving world of web development, I thrive on
                    continuous learning and skill improvement. My goal is to
                    make the web a more engaging and accessible space by
                    combining cutting-edge technologies with a user-centric
                    approach. From concept to execution, I am dedicated to
                    ensuring that every project becomes a seamless and
                    impressive digital experience for users.
                </p>
            </div>
        </section>
    );
};

export default HomeAbout;
