import {useEffect, useRef} from "react";
import {CameraControls, Environment, Text, useFont} from "@react-three/drei";
import {Horse} from "./Model.jsx";
import {Color, MathUtils} from "three";
import Ground from "./Ground.jsx";
import {useAtom} from "jotai";
import {currentPageAtom, PAGES} from "../atoms.js";

const whiteBloomColor = new Color("#bb92cc");
whiteBloomColor.multiplyScalar(5);
const reddishBloomColor = new Color("#D3165A");
reddishBloomColor.multiplyScalar(12);

const FONT = 'fonts/roboto.ttf';
const {DEG2RAD} = MathUtils;

export const Experience = () => {
	const controls = useRef();
	const fitScreenCamera = useRef();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

	useEffect(() => {
		const update = async () => {
			if (currentPage === PAGES.CONFERENCE) {
				controls.current.smoothTime = 0.095;
				await controls.current?.dolly(-1, true);
				controls.current.smoothTime = 0.5;
				await controls.current?.rotate(135 * DEG2RAD, 0, true);
			} else if (currentPage === PAGES.HOME) {
				await controls.current?.reset(true);
			} else if (currentPage === PAGES.TEAM) {
				controls.current.smoothTime = 0.095;
				await controls.current?.dolly(-1, true);
				controls.current.smoothTime = 0.5;
				await controls.current?.rotate(-135 * DEG2RAD, 0, true);
			} else if (currentPage === PAGES.SPEAKERS) {
				controls.current.smoothTime = 0.095;
				await controls.current?.dolly(-8, true);
				controls.current.smoothTime = 0.5;
				await controls.current?.truck(0, -2, true)
			}
		}
		update();
	}, [currentPage]);

	const loadingExperience = async () => {
		await controls.current.dolly(-12);
		controls.current.smoothTime = 1.4;
		setTimeout(() => {
			setCurrentPage(PAGES.HOME)
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

	return (<>
		<CameraControls makeDefault ref={controls} maxPolarAngle={1.5}/>
		{/*Mesh bellow is here to allow resize responsiveness*/}
		<mesh ref={fitScreenCamera} position-z={0.9} visible={false}>
			<boxGeometry args={[8, 2, 2]}/>
			<meshBasicMaterial color="yellow" transparent opacity={0.5}/>
		</mesh>
		<group position-x={-2}>
			{"INIT".split("").map((letter, index) => (<Text
				key={index}
				font={FONT}
				position={[index === 3 ? -0.1 : index - 3, 0, -4]}
				rotation-y={0}
				fontSize={1.9}
				textAlign="center">
				{letter}
				<meshBasicMaterial color={index === 1 ? reddishBloomColor : whiteBloomColor} toneMapped={false}/>
			</Text>))}
		</group>
		<group rotation-y={0} position={[0, -0.8, 0]}>
			<Horse scale={0.015}/>
		</group>
		<Text
			font={FONT}
			position={[3.4, 0, -4]}
			rotation-y={0}
			fontSize={1.9}
			letterSpacing={-0.05}
			textAlign="center">
			2024
			<meshBasicMaterial color={whiteBloomColor} toneMapped={false}/>
		</Text>
		<Ground/>
		<Environment preset="sunset"/>
	</>);
};

useFont.preload(FONT);