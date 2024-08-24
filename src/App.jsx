import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene.jsx';
import { BACKGROUND_COLOR } from './colors.js';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <Scene />
    </Canvas>
  );
};

export default App;
