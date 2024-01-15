import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useMemo, useRef, useState } from 'react';
import {
  IMapModelArray,
  mapModelArray,
} from '../../../../common/constants/3dMap';
import LeftDetailView from '../detailView/LeftDetailView';
import RightDetailView from '../detailView/RightDetailView';
// import { useThree } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    ['Gyeongsangnam-do']: THREE.Mesh;
    ['Ulsan']: THREE.Mesh;
    ['Daegu']: THREE.Mesh;
    ['Gyeongsangbuk-do']: THREE.Mesh;
    ['Chungcheongnam-do']: THREE.Mesh;
    ['Gyeonggi-do']: THREE.Mesh;
    ['Jeju']: THREE.Mesh;
    ['seoul']: THREE.Mesh;
    ['Gangwon']: THREE.Mesh;
    ['Chungcheongbuk-do']: THREE.Mesh;
    ['Daejeon']: THREE.Mesh;
    ['Jeollabuk-do']: THREE.Mesh;
    ['Gwangju']: THREE.Mesh;
    ['Ulleung-gun']: THREE.Mesh;
    ['Dokdo']: THREE.Mesh;
    ['Busan']: THREE.Mesh;
    ['Jeollanam-do']: THREE.Mesh;
    ['Incheon']: THREE.Mesh;
  };
  materials: {
    map: THREE.MeshStandardMaterial;
  };
};

/**
 * 3D map 모델링
 * @returns 3D 모델링 엘리먼트
 */
const MapModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes } = useGLTF('/3dMap.gltf') as GLTFResult;
  // const { camera } = useThree();
  /** 스케일 메모 */
  const scale = useMemo(() => {
    return (num: number) => {
      return num;
    };
  }, []);

  const selectedMesh = useRef<THREE.Mesh | null>(null);

  const [activeCity, setActiveCity] = useState<number | null>(null);

  const handleMeshClick = (
    nodeName: keyof GLTFResult['nodes'],
    pIndex: number
  ) => {
    if (pIndex === activeCity) {
      setActiveCity(null);
    }
    // const selectedNode = nodes[nodeName];
    setActiveCity(pIndex);
    props.onClick;
  };

  /** 엑티브 컬러 스타일 */
  const activeColor = useMemo(() => {
    return (pIndex: number, pColor: string) => {
      return activeCity === pIndex ? '#6bbf59' : pColor;
    };
  }, [activeCity]);

  /** 3D map 모델 */
  const renderMapModel = (mapArray: IMapModelArray[]) => {
    return (
      <>
        {mapArray.map((item, index) => {
          const nodeName = item.name as keyof GLTFResult['nodes'];
          const position: THREE.Vector3 = new THREE.Vector3(...item.position);
          return (
            <mesh
              ref={selectedMesh}
              key={index}
              castShadow
              receiveShadow
              onClick={() => handleMeshClick(nodeName, index)}
              geometry={nodes[nodeName].geometry}
              material={nodes[nodeName].material}
              position={position}
              scale={scale(5)}
            >
              <meshPhysicalMaterial color={activeColor(index, item.color)} />
            </mesh>
          );
        })}
      </>
    );
  };

  return (
    <group {...props} dispose={null}>
      {renderMapModel(mapModelArray)}
    </group>
  );
};

export default MapModel;

useGLTF.preload('/3dMap.gltf');
