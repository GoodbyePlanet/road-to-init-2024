import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import {UI} from "./components/UI.jsx";
import Logo from "./components/Logo.jsx";

const App = () => {
	return (
		<>
			<Logo/>
			<Canvas shadows camera={{position: [0, 0, 8], fov: 42}}>
				<color attach="background" args={["#361D4A"]}/>
				<fog attach="fog" args={["#361D4A", 8, 20]}/>
				<Suspense>
					<Experience/>
				</Suspense>
				<EffectComposer>
					<Bloom mipmapBlur intensity={1.2}/>
				</EffectComposer>
			</Canvas>
			<UI/>
		</>
	);
}

export default App;
