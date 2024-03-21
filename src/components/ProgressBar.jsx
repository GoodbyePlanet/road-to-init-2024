import { Html, useProgress } from '@react-three/drei';

const ProgressBar = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="text-center mt-2 text-white font-mono text-2xl">{Math.round(progress)}%</div>
      <div className="w-64 h-8 bg-primary-to relative overflow-hidden rounded-md border-double border-4 border-primary-to">
        <div className="h-full bg-primary-via absolute top-0 left-0" style={{ width: `${progress}%` }}></div>
      </div>
    </Html>
  );
};

export default ProgressBar;
