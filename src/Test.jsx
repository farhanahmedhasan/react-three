export default function Test(){
    return(
        <>
            <mesh rotation-y={Math.PI * 0.25} scale={1.1} position-x={2}>
                <sphereGeometry args={[1,32,32]}/>
                {/*<boxGeometry/>*/}
                <meshBasicMaterial color="red" wireframe/>
            </mesh>

            <mesh position={[-2,0,0]} scale={1.1}>
                <sphereGeometry />
                <meshBasicMaterial color="orange"/>
            </mesh>

            <mesh position-y={-2.4} scale={10} rotation-x={ -Math.PI * 0.5}>
                <planeGeometry/>
                <meshBasicMaterial color="greenyellow"/>
            </mesh>

        </>
    )
}