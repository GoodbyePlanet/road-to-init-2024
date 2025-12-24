import { Html, useProgress } from '@react-three/drei';

const ProgressBar = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="mt-2 text-center font-mono text-2xl text-white">{Math.round(progress)}%</div>
      <div className="relative h-8 w-64 overflow-hidden rounded-md border-4 border-double border-primary-to bg-primary-to">
        <div className="absolute left-0 top-0 h-full bg-primary-via" style={{ width: `${progress}%` }}></div>
      </div>
    </Html>
  );
};

export default ProgressBar;
