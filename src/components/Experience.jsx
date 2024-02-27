import {CameraControls, Environment, MeshReflectorMaterial, Text} from "@react-three/drei";
import {Horse} from "./Model.jsx";
import {degToRad} from "three/src/math/MathUtils.js";
import {useRef} from "react";
import {Color} from "three";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
	const controls = useRef();
	return (
		<>
			<CameraControls ref={controls}/>
			<Text
				font="fonts/robotoMono.ttf"
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
				font="fonts/robotoMono.ttf"
				position={[1.5, -0.1, 3]}
				rotation-y={-1}
				lineHeight={0.8}
				fontSize={1.2}
				textAlign="center">
				2024
				<meshBasicMaterial color={bloomColor} toneMapped={false}/>
			</Text>
			<mesh position-y={-0.88} rotation-x={-Math.PI / 2}>
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
