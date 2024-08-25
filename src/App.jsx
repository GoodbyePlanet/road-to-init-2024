import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene.jsx';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={['#ececec']} />
      {/*<fog attach="fog" args={[BACKGROUND_COLOR, 8, 20]} />*/}
      <Scene />
    </Canvas>
  );
};

export default App;
