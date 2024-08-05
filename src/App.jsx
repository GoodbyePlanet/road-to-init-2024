import { Canvas } from '@react-three/fiber';
import { BACKGROUND_COLOR } from './colors.js';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <fog attach="fog" args={[BACKGROUND_COLOR, 8, 20]} />
    </Canvas>
  );
};

export default App;
