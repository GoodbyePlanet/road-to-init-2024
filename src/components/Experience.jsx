import {CameraControls, Environment, Text, useFont} from "@react-three/drei";
import {Horse} from "./Model.jsx";
import {useEffect, useRef} from "react";
import {Color} from "three";
import Ground from "./Ground.jsx";
import {useAtom} from "jotai";
import {currentPageAtom} from "./UI.jsx";

const bloomColor = new Color("#bb92cc");
bloomColor.multiplyScalar(2.9);

const FONT = 'fonts/roboto.ttf';

export const Experience = () => {
	const controls = useRef();
	const fitScreenCamera = useRef();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

	const loadingExperience = async () => {
		controls.current.dolly(-12);
		controls.current.smoothTime = 1.4;
		setTimeout(() => {
			setCurrentPage("home");
		}, 1200);
		fitCamera();
	}

	const fitCamera = async () => {
		controls.current.fitToBox(fitScreenCamera.current, true);
	}

	useEffect(() => {
		loadingExperience();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", fitCamera);
		return () => window.removeEventListener("resize", fitCamera);
	}, []);

	return (
		<>
			<CameraControls makeDefault ref={controls} maxPolarAngle={1.5}/>
			 {/*Mesh bellow is here to allow resize responsiveness*/}
			<mesh ref={fitScreenCamera} position-z={0.9} visible={false}>
				<boxGeometry args={[8, 2, 2]}/>
				<meshBasicMaterial color="yellow" transparent opacity={0.5}/>
			</mesh>
			<Text
				font={FONT}
				position={[-1.5, -0.2, 3]}
				rotation-y={1}
				lineHeight={0.8}
				fontSize={1.2}
				textAlign="center">
				INIT
				<meshBasicMaterial color={bloomColor} toneMapped={false}/>
			</Text>
			<group rotation-y={0} position={[0, -0.8, 0]}>
				<Horse scale={0.015}/>
			</group>
			<Text
				font={FONT}
				position={[1.5, -0.2, 3]}
				rotation-y={-1}
				lineHeight={0.8}
				fontSize={1.2}
				textAlign="center">
				2024
				<meshBasicMaterial color={bloomColor} toneMapped={false}/>
			</Text>
			<Ground/>
			<Environment preset="sunset"/>
		</>
	);
};

useFont.preload(FONT);