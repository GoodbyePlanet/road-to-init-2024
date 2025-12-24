import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Scene from './components/Scene.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import { BACKGROUND_COLOR } from './colors.js';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <fog attach="fog" args={[BACKGROUND_COLOR, 8, 20]} />
      {/*<Suspense fallback={<ProgressBar />}>*/}
        <Scene />
      {/*</Suspense>*/}
      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
