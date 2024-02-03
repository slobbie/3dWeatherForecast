import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
    Roundcube007: THREE.Mesh;
    Roundcube008: THREE.Mesh;
    Roundcube009: THREE.Mesh;
    Roundcube010: THREE.Mesh;
    Roundcube011: THREE.Mesh;
  };
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | 'CurveAction'
  | 'Roundcube.007Action'
  | 'Roundcube.007Action.004'
  | 'Roundcube.007Action.005'
  | 'Roundcube.007Action.006'
  | 'Roundcube.007Action.007';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function SnowModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF('/snow.gltf') as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    // actions['CurveAction']
    //   ?.reset()
    //   .setEffectiveTimeScale(1)
    //   .setEffectiveWeight(1)
    //   .fadeIn(0.5)
    //   .play().loop;
    actions['Roundcube.007Action.004']
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play().loop;

    actions['Roundcube.007Action']
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play().loop;

    actions['Roundcube.007Action.005']
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play().loop;

    actions['Roundcube.007Action.006']
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play().loop;

    actions['Roundcube.007Action.007']
      ?.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play().loop;
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Curve'
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials['Material.002']}
          // rotation={[1.581, -0.006, 0.002]}
          rotation={[0, -0.006, 0.002]}
          userData={{ name: 'Curve' }}
        >
          <mesh
            name='Roundcube007'
            castShadow
            receiveShadow
            geometry={nodes.Roundcube007.geometry}
            material={materials['Material.002']}
            position={[-0.037, 0.002, 0.174]}
            rotation={[-1.581, 0.002, 0.01]}
            scale={-0.019}
            userData={{ name: 'Roundcube.007' }}
          />
          <mesh
            name='Roundcube008'
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008.geometry}
            material={materials['Material.002']}
            position={[-0.138, 0.002, 0.175]}
            rotation={[-1.581, 0.002, 0.01]}
            scale={-0.019}
            userData={{ name: 'Roundcube.008' }}
          />
          <mesh
            name='Roundcube009'
            castShadow
            receiveShadow
            geometry={nodes.Roundcube009.geometry}
            material={materials['Material.002']}
            position={[0.063, 0.002, 0.173]}
            rotation={[-1.581, 0.002, 0.01]}
            scale={-0.019}
            userData={{ name: 'Roundcube.009' }}
          />
          <mesh
            name='Roundcube010'
            castShadow
            receiveShadow
            geometry={nodes.Roundcube010.geometry}
            material={materials['Material.002']}
            position={[-0.085, 0.003, 0.234]}
            rotation={[-1.581, 0.002, 0.01]}
            scale={-0.019}
            userData={{ name: 'Roundcube.010' }}
          />
          <mesh
            name='Roundcube011'
            castShadow
            receiveShadow
            geometry={nodes.Roundcube011.geometry}
            material={materials['Material.002']}
            position={[0.015, 0.002, 0.233]}
            rotation={[-1.581, 0.002, 0.01]}
            scale={-0.019}
            userData={{ name: 'Roundcube.011' }}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/snow.gltf');
