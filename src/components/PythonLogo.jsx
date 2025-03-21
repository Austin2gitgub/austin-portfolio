import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const PythonLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/pythonlogo2.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[15,8,0]} scale={0.4} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.material}
                position={[-0.002, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.501}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['.001']}
                position={[-0.002, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={2.501}
            />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/pythonlogo2.glb')

export default PythonLogo