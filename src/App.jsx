import { Suspense } from 'react';
import { Provider } from 'jotai';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene.jsx';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { UI } from './components/UI.jsx';
import Logo from './components/Logo.jsx';
import Loader from './components/Loader.jsx';
import { BACKGROUND_COLOR } from './colors.js';

const App = () => {
  return (
    <Provider>
      <Logo />
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={[BACKGROUND_COLOR]} />
        <fog attach="fog" args={[BACKGROUND_COLOR, 8, 20]} />
        <Suspense fallback={<Loader />}>
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
