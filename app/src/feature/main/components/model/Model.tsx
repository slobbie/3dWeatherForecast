/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Gyeongsangnam-do']: THREE.Mesh;
    Ulsan: THREE.Mesh;
    Daegu: THREE.Mesh;
    ['Gyeongsangbuk-do']: THREE.Mesh;
    ['Chungcheongnam-do']: THREE.Mesh;
    ['Gyeonggi-do']: THREE.Mesh;
    Jeju: THREE.Mesh;
    seoul: THREE.Mesh;
    Gangwon: THREE.Mesh;
    ['Chungcheongbuk-do']: THREE.Mesh;
    Daejeon: THREE.Mesh;
    ['Jeollabuk-do']: THREE.Mesh;
    Incheon: THREE.Mesh;
    Gwangju: THREE.Mesh;
    ['Ulleung-gun']: THREE.Mesh;
    Dokdo: THREE.Mesh;
    Busan: THREE.Mesh;
    ['Jeollanam-do']: THREE.Mesh;
  };
  materials: {
    map: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/untitled9.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={() => {
          console.log('정해석 Gyeongsangnam');
        }}
        castShadow
        receiveShadow
        geometry={nodes['Gyeongsangnam-do'].geometry}
        material={nodes['Gyeongsangnam-do'].material}
        scale={5}
      >
        <meshPhysicalMaterial color='hotpink' />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ulsan.geometry}
        material={nodes.Ulsan.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Daegu.geometry}
        material={nodes.Daegu.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Gyeongsangbuk-do'].geometry}
        material={nodes['Gyeongsangbuk-do'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chungcheongnam-do'].geometry}
        material={nodes['Chungcheongnam-do'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Gyeonggi-do'].geometry}
        material={nodes['Gyeonggi-do'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Jeju.geometry}
        material={materials.map}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seoul.geometry}
        material={nodes.seoul.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gangwon.geometry}
        material={nodes.Gangwon.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chungcheongbuk-do'].geometry}
        material={nodes['Chungcheongbuk-do'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Daejeon.geometry}
        material={nodes.Daejeon.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Jeollabuk-do'].geometry}
        material={nodes['Jeollabuk-do'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Incheon.geometry}
        material={nodes.Incheon.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gwangju.geometry}
        material={nodes.Gwangju.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Ulleung-gun'].geometry}
        material={nodes['Ulleung-gun'].material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dokdo.geometry}
        material={nodes.Dokdo.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Busan.geometry}
        material={nodes.Busan.material}
        scale={5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Jeollanam-do'].geometry}
        material={nodes['Jeollanam-do'].material}
        scale={5}
      />
    </group>
  );
}

useGLTF.preload('/untitled9.gltf');