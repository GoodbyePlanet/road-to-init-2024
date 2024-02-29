import {CameraControls, Environment, MeshReflectorMaterial, Text, useFont} from "@react-three/drei";
import {Horse} from "./Model.jsx";
import {useEffect, useRef} from "react";
import {Color} from "three";

const bloomColor = new Color("#bb92cc");
bloomColor.multiplyScalar(2.9);

const FONT = 'fonts/roboto.ttf';

export const Experience = () => {
	const controls = useRef();
	const fitScreenCamera = useRef();

	const loadingExperience = async () => {
		controls.current.dolly(-11);
		controls.current.smoothTime = 1.4;
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
	}, [])

	return (
		<>
			<CameraControls ref={controls}/>
			<mesh ref={fitScreenCamera} position-z={0.9} visible={false}>
				<boxGeometry args={[8, 2, 2]}/>
				<meshBasicMaterial color="yellow" transparent opacity={0.5}/>
			</mesh>
			<Text
				font={FONT}
				position={[-1.5, -0.1, 3]}
				rotation-y={1}
				lineHeight={0.8}
				fontSize={1.2}
				textAlign="center">
				INIT
				<meshBasicMaterial color={bloomColor} toneMapped={false}/>
			</Text>
			<group rotation-y={0} position={[0, -0.9, 0]}>
				<Horse scale={0.015}/>
			</group>
			<Text
				font={FONT}
				position={[1.5, -0.1, 3]}
				rotation-y={-1}
				lineHeight={0.8}
				fontSize={1.2}
				textAlign="center">
				2024
				<meshBasicMaterial color={bloomColor} toneMapped={false}/>
			</Text>
			<mesh position-y={-0.78} rotation-x={-Math.PI / 2}>
				<planeGeometry args={[100, 100]}/>
				<MeshReflectorMaterial
					blur={[100, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={10}
					roughness={1}
					depthScale={1}
					opacity={0.5}
					transparent
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#333"
					metalness={0.5}
					mirror={0}
				/>
			</mesh>
			<Environment preset="sunset"/>
		</>
	);
};

useFont.preload(FONT);