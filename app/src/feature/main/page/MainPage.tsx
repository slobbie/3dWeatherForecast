import { Canvas } from '@react-three/fiber';
import MapModel from '../components/model/MapModel';
import { OrbitControls } from '@react-three/drei';
import LeftDetailView from '../components/detailView/LeftDetailView';
import RightDetailView from '../components/detailView/RightDetailView';

/**
 * 메인페이지
 */
const MainPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Canvas
          shadows
          camera={{
            position: [0, 30, 2],
            // 화각
            // fov: 75,
            // near: 1,
            // far: 20,
          }}
        >
          <OrbitControls />
          {/* <ambientLight /> */}
          <directionalLight intensity={10} />
          {/* <group> */}
          <ambientLight />
          {/* x ,y ,z 4, 20, 14 */}
          <MapModel scale={1} position={[0, 0, 0]} />
          {/* </group> */}
        </Canvas>
      </div>
      <LeftDetailView />
      <RightDetailView />
    </div>
  );
};

export default MainPage;
