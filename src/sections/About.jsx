import React, {useState} from 'react'
import Globe from "react-globe.gl"
import Button from "../components/Button.jsx";

const myData = [
    {
        lat:41.83744488707386, lng:-87.62612527499492,
        altitude: 0.6,
        color: '#00ff33',
    },

];


const About = () => {

    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText('austinsitasam@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    const selectCurrentYear = contributions => {
        const currentYear = new Date().getFullYear()

        return contributions.filter(activity => {
            const date = new Date(activity.date);

            return (
                date.getFullYear() === currentYear
            );
        })
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/me-new.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Austin</p>
                            <p className="grid-subtext">With 3+ years of mixed project & work experience in Full-Stack & ML, I have gained skills in Front-end, Back-end, and Machine Learning. Focusing on Software Automation & Building Apps.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2-2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack/Skills</p>
                            <p className="grid-subtext">I specialize on Full-Stack development with Python, C++, React, JS, Azure. I have work experience with creating ML models, Integrating GPT to apps via Langchain, building solutions with PyTorch.</p>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        {/*<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">*/}
                        {/*    <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)"*/}
                        {/*    backgroundImageOpacity={0.5}*/}
                        {/*    showAtmosphere*/}
                        {/*    showGraticules*/}
                        {/*           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"*/}
                        {/*           bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"*/}
                        {/*    // labelsData={[{*/}
                        {/*    //     lat:41.83744488707386, lng:-87.62612527499492,*/}
                        {/*    //     text: "I'm currently here!",*/}
                        {/*    //     color: 'white',*/}
                        {/*    //     labelSize: 99999999,*/}
                        {/*    //     labelDotSize: 99999999*/}
                        {/*    // }]}*/}
                        {/*    // pointsData={myData}*/}
                        {/*    />*/}
                        {/*    <Globe*/}
                        {/*        height={326}*/}
                        {/*        width={326}*/}
                        {/*        backgroundColor="rgba(0, 0, 0, 0)"*/}
                        {/*        backgroundImageOpacity={0.5}*/}
                        {/*        showAtmosphere*/}
                        {/*        showGraticules*/}
                        {/*        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"*/}
                        {/*        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"*/}
                        {/*        labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <img src="assets/map.svg" alt="grid-3"
                                 className="w-full sm:h-[266px] h-fit object-contain"/>
                        </div>

                        <div>
                            <p className="grid-headtext">I can work anywhere in the states! </p>
                            <p className="grid-subtext">I am flexible to work remote or on-site in the states. I am
                                currently in Chicago.
                            </p>
                            <a href="#contact" className="w-fit">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                        <img src="assets/blog.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                            {/*<GithubCalendar username="Austin2GitGub"*/}
                            {/*colorScheme='light'*/}
                            {/*hideColorLegend={false}*/}
                            {/*year="2025"*/}
                            {/*hideMonthLabels={false}*/}
                            {/*hideTodayLabels={false}*/}

                            {/*/>*/}

                        <div>
                            <p className="grid-headtext">Have a look at my Blogs!</p>
                            <p className="grid-subtext-2">My First Blog</p>
                            <p className="grid-subtext">Hey there fellow human! 👋

                                I welcome you to my blog site. It is pretty empty here for now… but soon it’d be filled with my thoughts, and my life........</p>

                            <a href="https://medium.com/@austinsitasam/my-first-blog-e0787db4ba17" target="_blank" className="grid-subtext3">Click me to have a Look!</a>

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        {/*<img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>*/}
                        <p className="grid-headtext">Want to know more about me? Click below to download my Resume!</p>

                        <div className="rounded-3xl w-full sm:h-[106px] h-fit flex justify-center items-center">
                            <a href="/assets/Resume_Austin_Samuel_Software_Engineer.pdf" download="Resume_Austin_Samuel_Software_Developer">
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/d-2.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Download Resume</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
