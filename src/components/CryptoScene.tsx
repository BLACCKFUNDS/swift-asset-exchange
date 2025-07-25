import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const FloatingCoin = () => {
  return (
    <group>
      {/* Main coin body */}
      <mesh rotation={[0, 0, 0]} scale={[1.2, 1.2, 0.3]} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial 
          color="#ff8c00" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#ff8c00"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Inner circle detail */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[0.8, 0.8, 0.1]} position={[0, 0, 0.15]}>
        <cylinderGeometry args={[1, 1, 0.05, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
      
      {/* Back side detail */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[0.8, 0.8, 0.1]} position={[0, 0, -0.15]}>
        <cylinderGeometry args={[1, 1, 0.05, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
    </group>
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
          
          <FloatingCoin />
          
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