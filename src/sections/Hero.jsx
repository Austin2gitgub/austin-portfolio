import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import Einstein from "../components/Einstein.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isMobile, isSmall, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Austin <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient text-center">Welcome to my Portfolio</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault position ={[0,0,20]}/>
                    <HeroCamera isMobile={isMobile}>
                    <HackerRoom
                        //scale={0.07}
                        //position={[0,0,0]}
                        //rotation={[0, -Math.PI , 0]}
                        position={sizes.deskPosition}
                        rotation={[3.5,0.1,-3.1]}
                        scale={sizes.deskScale}
                    />
                    </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <PythonLogo position={sizes.cubePosition}/>
                            <Einstein position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10,10,10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam constainerClass="sm:w-fit w-full sm:min-w-96"/>

                </a>
            </div>
        </section>
    )
}
export default Hero
//MAKE SURE TO CHANGE THE PICTURE TO THE OLD ONE AND THEN AFTER FINISH CHANGE TO NEW ONE(AND TRY)
