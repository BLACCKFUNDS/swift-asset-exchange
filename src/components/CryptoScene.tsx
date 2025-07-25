import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";

const FloatingCoin = () => {
  return (
    <mesh rotation={[0, 0, 0]} scale={[1.2, 1.2, 0.3]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial 
        color="#ff8c00" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#ff8c00"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const USDTText = () => {
  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
      >
        USDT
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1}
          roughness={0.1}
        />
      </Text3D>
    </Center>
  );
};

const CryptoScene = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff8c00" />
          
          <group>
            <FloatingCoin />
            <USDTText />
          </group>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CryptoScene;