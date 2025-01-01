import { memo, Suspense, useEffect, useRef } from 'react';
import { CameraControls, Environment, Stars, Text, useFont } from '@react-three/drei';
import { useAtom } from 'jotai';
import { Color, MathUtils } from 'three';
import Horse from './Model.jsx';
import Ground from './Ground.jsx';
import ProgressBar from './ProgressBar.jsx';
import { BLUE_BLOOM_COLOR, REDDISH_BLOOM_COLOR, WHITE_BLOOM_COLOR, YELLOW_BLOOM_COLOR } from '../colors.js';
import { currentPageAtom, isSceneLoadedAtom, PAGES } from '../atoms.js';
import { gsap } from 'gsap';
import dawn from '../assets/dawn.exr.js';
import Sound from './Sound.jsx';

const whiteBloomColor = new Color(WHITE_BLOOM_COLOR);
whiteBloomColor.multiplyScalar(5);
const reddishBloomColor = new Color(REDDISH_BLOOM_COLOR);
reddishBloomColor.multiplyScalar(12);
const yellowBloomColor = new Color(YELLOW_BLOOM_COLOR);
yellowBloomColor.multiplyScalar(5);
const blueBloomColor = new Color(BLUE_BLOOM_COLOR);
blueBloomColor.multiplyScalar(5);

const FONT = 'fonts/roboto-webfont.ttf';
const { DEG2RAD } = MathUtils;

const Scene = () => {
  const controls = useRef();
  const fitScreenCamera = useRef();
  const [currentPage, _] = useAtom(currentPageAtom);
  const [__, setSceneLoaded] = useAtom(isSceneLoadedAtom);

  const setCameraSmoothTime = (time) => (controls.current.smoothTime = time);
  const setCameraDolly = async (distance, enableTransition) =>
    await controls.current?.dolly(distance, enableTransition);
  const setCameraRotation = async (azimuthAngle, polarAngle, enableTransition) =>
    await controls.current?.rotate(azimuthAngle, polarAngle, enableTransition);
  const resetCameraToInitialPosition = async (enableTransition) => await controls.current?.reset(enableTransition);
  const setCameraTruck = async (x, y, enableTransition) => await controls.current?.truck(x, y, enableTransition);
  const setCameraRestThreshold = (time) => (controls.current.restThreshold = time);
  const fitSceneToView = (camera) => controls.current.fitToBox(camera, true, { paddingTop: 0 });

  useEffect(() => {
    const updateCameraPosition = async () => {
      switch (currentPage) {
        case PAGES.CONFERENCE:
          setCameraSmoothTime(0.095);
          setCameraDolly(-3, true);
          setCameraSmoothTime(0.2);
          gsap
            .to(controls.current, {
              polarAngle: controls.current.polarAngle + -0.4,
              azimuthAngle: 135 * DEG2RAD,
              duration: 2,
              ease: 'expo.inOut',
            })
            .play(0);
          break;
        case PAGES.CONTACT:
          setCameraSmoothTime(0.095);
          setCameraDolly(-3, true);
          setCameraSmoothTime(0.2);
          gsap
            .to(controls.current, {
              polarAngle: controls.current.polarAngle + -0.4,
              azimuthAngle: -135 * DEG2RAD,
              duration: 2,
              ease: 'expo.inOut',
              paused: true,
            })
            .play(0);
          break;
        case PAGES.SPEAKERS:
          setCameraRestThreshold(0.5);
          setCameraSmoothTime(0.095);
          await setCameraDolly(-10, true);
          setCameraSmoothTime(0.5);
          await setCameraTruck(0, -4, true);
          break;
        case PAGES.HOME:
          await resetCameraToInitialPosition(true);
          break;
        default:
          return;
      }
    };

    updateCameraPosition();
  }, [currentPage]);

  useEffect(() => {
    loadingExperience();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', fitCamera);
    return () => window.removeEventListener('resize', fitCamera);
  }, [currentPage]);

  const loadingExperience = async () => {
    await setCameraDolly(-15);
    setCameraSmoothTime(1.4);
    setTimeout(() => {
      setSceneLoaded(true);
    }, 2000);
    await fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === PAGES.HOME) {
      fitSceneToView(fitScreenCamera.current);
    }
  };

  return (
    <>
      <CameraControls makeDefault ref={controls} maxPolarAngle={1.6} minDistance={5} maxDistance={20} />
      <Sound currentPage={currentPage} />
      {/*Mesh bellow is here to allow resize responsiveness*/}
      <mesh ref={fitScreenCamera} position-z={0.9} visible={false}>
        <boxGeometry args={[9, 2, 2]} />
        <meshBasicMaterial color="yellow" transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={<ProgressBar />}>
        <group position-x={-8.5} position-y={1.2}>
          <Text
            font={FONT}
            position={[3.4, 0, -4]}
            rotation-y={0}
            fontSize={0.5}
            letterSpacing={-0.05}
            textAlign="center"
          >
            SAY
            <meshBasicMaterial color={yellowBloomColor} toneMapped={false} />
          </Text>
        </group>
        <group position-x={-6.3} position-y={1.2}>
          <Text
            font={FONT}
            position={[3.4, 0, -4]}
            rotation-y={0}
            fontSize={0.5}
            letterSpacing={-0.05}
            textAlign="center"
          >
            HELLO WORLD
            <meshBasicMaterial color={whiteBloomColor} toneMapped={false} />
          </Text>
        </group>
        <group position-x={-2}>
          {'INIT'.split('').map((letter, index) => (
            <Text
              key={index}
              font={FONT}
              position={[index === 3 ? -0.1 : index - 3, 0, -4]}
              rotation-y={0}
              fontSize={1.9}
              textAlign="center"
            >
              {letter}
              <meshBasicMaterial color={index === 1 ? reddishBloomColor : whiteBloomColor} toneMapped={false} />
            </Text>
          ))}
        </group>
        <group position-x={0} position-y={1.2}>
          <Text
            font={FONT}
            position={[3.4, 0, -4]}
            rotation-y={0}
            fontSize={0.5}
            letterSpacing={-0.05}
            textAlign="center"
          >
            IN PERSON
            <meshBasicMaterial color={blueBloomColor} toneMapped={false} />
          </Text>
        </group>
        <Suspense fallback={null}>
          <group rotation-y={0} position={[0, -0.8, 0]}>
            <Horse scale={0.015} />
          </group>
        </Suspense>
        <Text
          font={FONT}
          position={[3.4, 0, -4]}
          rotation-y={0}
          fontSize={1.9}
          letterSpacing={-0.05}
          textAlign="center"
        >
          2025
          <meshBasicMaterial color={whiteBloomColor} toneMapped={false} />
        </Text>
        <Ground />
        <group position-y={0.8}>
          <Stars radius={100} depth={20} count={3000} factor={3} saturation={0} fade speed={1} />
        </group>
      </Suspense>
      <Environment files={dawn} />
    </>
  );
};

useFont.preload(FONT);

export default memo(Scene);
