import { Suspense } from 'react';
import { Provider } from 'jotai';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene.jsx';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { UI } from './components/UI.jsx';
import { BACKGROUND_COLOR } from './colors.js';
import ProgressBar from './components/ProgressBar.jsx';

const App = () => {
  return (
    <Provider>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={[BACKGROUND_COLOR]} />
        <fog attach="fog" args={[BACKGROUND_COLOR, 8, 20]} />
        <Suspense fallback={<ProgressBar />}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </Provider>
  );
};

export default App;
