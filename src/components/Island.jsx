import React from "react";
import { useGLTF, useTexture, Text3D, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Island(props) {
  const { nodes } = useGLTF("/islandscene.glb");
  const bakedTexture = useTexture("baked.jpg");
  bakedTexture.flipY = false; // Ensure the texture is not flipped

  return (
    <group {...props} dispose={null}>
      <Text3D
        position={[-2.065, 13.686, -3.665]}
        rotation={[-0.001, -0.009, 0.038]}
        font={"./font.json"}
        scale={0.31}
        letterSpacing={0.0001}
      >
        Deniz'S
      </Text3D>
      <Text3D
        position={[-2.617, 13.037, -3.834]}
        rotation={[-0.001, -0.009, 0.038]}
        font={"./code-font.json"}
        size={0.32}
        scale={0.067}
        letterSpacing={0.0001}
        height={0.1}
      >
        {`.\n.>>>\n.\n.\n.\n.\n.\n.Data\n Analyst\n\n.Creative\n Developer \n.\n.\n.\n.\n\n.>>>>>>>\n.`}
        <meshStandardMaterial color={"purple"} />
      </Text3D>
    

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        position={[-1.285, 12.412, -3.889]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.zemin.geometry}
        position={[-0.927, 11.291, -3.901]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior.geometry}
        position={[-1.2, 12.046, -4.51]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container001.geometry}
        position={[-1.742, 13.233, -3.667]}
        rotation={[1.794, -1.532, 0.224]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["lamp-outer"].geometry}
        position={[-1.901, 12.385, -3.14]}
        rotation={[-3.138, 0.131, 3.103]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container.geometry}
        position={[-0.447, 11.999, -4.671]}
        rotation={[-0.001, -0.009, -1.532]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cable.geometry}
        position={[-0.652, 12.629, -4.073]}
        rotation={[-0.001, -0.009, -1.532]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sign.geometry}
        position={[-2.443, 12.667, -3.904]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window.geometry}
        position={[-0.388, 13.091, -4.364]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.seat.geometry}
        position={[-0.633, 11.636, -3.121]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barbeque.geometry}
        position={[-1.49, 11.861, -4.567]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doner.geometry}
        position={[-0.809, 12.168, -4.557]}
        rotation={[1.794, -1.532, 1.795]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stick.geometry}
        position={[-1.349, 11.827, -4.536]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coins.geometry}
        position={[-1.093, 11.993, -3.636]}
        rotation={[-0.021, 0.041, 0.084]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        position={[-1.343, 11.826, -4.568]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill.geometry}
        position={[-1.598, 11.82, -4.551]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["grilled-meat"].geometry}
        position={[-1.584, 11.831, -4.579]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["doner-fire"].geometry}
        position={[-0.632, 12.103, -4.551]}
        rotation={[1.794, -1.532, 1.795]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["doner-station"].geometry}
        position={[-0.677, 12.088, -4.552]}
        rotation={[1.794, -1.532, 1.795]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bilboard.geometry}
        position={[-1.261, 13.856, -3.675]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["bilboard-fences"].geometry}
        position={[-1.278, 13.841, -3.747]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.air001.geometry}
        position={[-0.947, 13.38, -4.71]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rooftop.geometry}
        position={[-1.607, 13.51, -4.67]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.air.geometry}
        position={[-0.701, 13.389, -4.707]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cross.geometry}
        position={[-1.281, 13.767, -4.965]}
        rotation={[1.569, 0.038, 0.009]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["roof-1"].geometry}
        position={[-1.245, 12.855, -3.522]}
        rotation={[1.886, 0.039, 1.566]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.firfir.geometry}
        position={[-1.233, 12.523, -3.683]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        position={[1.485, 12.966, -3.201]}
        rotation={[-0.011, 0.035, -0.062]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001.geometry}
        position={[0.75, 12.944, -4.51]}
        rotation={[-0.016, 0.033, 0.065]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stones.geometry}
        position={[-0.549, 11.303, -3.748]}
        rotation={[0, 0, 0.05]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-log"].geometry}
        position={[1.327, 11.372, -3.121]}
        rotation={[0, 0, -0.12]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-log001"].geometry}
        position={[0.794, 11.343, -4.43]}
        rotation={[0, 0, 0.006]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["lamp-inside"].geometry}
        position={[-1.9, 12.358, -3.14]}
        rotation={[-3.138, 0.131, 3.103]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel.geometry}
        position={[-2.473, 12.67, -3.878]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window001.geometry}
        position={[-0.389, 13.182, -4.365]}
        rotation={[-0.001, -0.009, 0.038]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.island.geometry}
        position={[0.084, 7.936, -3.339]}
        rotation={[0, 0, 0.05]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground.geometry}
        position={[0.084, 7.936, -3.339]}
        rotation={[0, 0, 0.05]}
      >
        <meshStandardMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/islandscene.glb");

export default Island;
