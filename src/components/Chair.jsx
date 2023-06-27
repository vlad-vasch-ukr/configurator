import {useGLTF, useTexture} from '@react-three/drei'
import * as THREE from "three";
import {useCustomization} from "../context/Customization.jsx";

export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/chair.gltf');
  const leatherTexturesProps = useTexture({
      map: './textures/leather/Leather_008_Base Color.jpg',
      normalMap: './textures/leather/Leather_008_Normal.jpg',
      roughnessMap: './textures/leather/Leather_008_Roughness.jpg',
      aoMap: './textures/leather/Leather_008_Ambient Occlusion.jpg',

  });

  const fabricTexturesProps = useTexture({
      map: './textures/fabric/Leather_011_basecolor.jpg',
      normalMap: "./textures/fabric/Leather_011_normal.jpg",
      roughnessMap: "./textures/fabric/Leather_011_roughness.jpg",
      aoMap: "./textures/fabric/Leather_011_ambientOcclusion.jpg",
  });

  const {material, legs, color} = useCustomization();
  const selectedMaterial = material === 'leather' ? leatherTexturesProps : fabricTexturesProps;


  leatherTexturesProps.normalMap.repeat.set(3, 3);
  leatherTexturesProps.roughnessMap.repeat.set(3, 3);
  leatherTexturesProps.aoMap.repeat.set(3, 3);
  leatherTexturesProps.normalMap.wrapS = leatherTexturesProps.normalMap.wrapT =
      THREE.MirroredRepeatWrapping;
  leatherTexturesProps.roughnessMap.wrapS =
      leatherTexturesProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTexturesProps.aoMap.wrapS = leatherTexturesProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  fabricTexturesProps.normalMap.repeat.set(3, 3);
  fabricTexturesProps.roughnessMap.repeat.set(3, 3);
  fabricTexturesProps.aoMap.repeat.set(3, 3);
  fabricTexturesProps.roughnessMap.wrapS = fabricTexturesProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTexturesProps.aoMap.wrapS = fabricTexturesProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
          <meshStandardMaterial {...selectedMaterial} color={color}/>
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
          <meshStandardMaterial {...fabricTexturesProps}/>
      </mesh>
      {
        legs === 'big' ? <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} /> : <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} />
      }

    </group>
  )
}

useGLTF.preload('/chair.gltf')
