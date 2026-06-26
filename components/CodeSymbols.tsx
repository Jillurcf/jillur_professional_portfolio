import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";


export function CodeSymbols() {

    const group = useRef<Group>(null);


    const symbols = [
        "</>",
        "{}",
        "JS",
        "TS",
        "RN",
        "API",
        "CSS",
        "npm",
        "⚛"
    ];


    const positions = Array.from(
        { length: 25 },
        () => [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
        ]
    );
// useFrame from react-three

    useFrame(({ clock }) => {

        if (group.current) {

            group.current.rotation.y =
                clock.elapsedTime * 0.05;


            group.current.children.forEach(
                (child, index) => {

                    child.position.y +=
                        Math.sin(
                            clock.elapsedTime + index
                        ) * 0.0008;

                }
            );

        }

    });


    return (

        <group ref={group}>

            {
                positions.map(
                    (position, index) => (

                        <Text
                            key={index}
                            position={
                                position as [
                                    number,
                                    number,
                                    number
                                ]
                            }
                            fontSize={0.18}
                            color="#22c55e"
                            material-transparent
                            material-opacity={0.8}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {symbols[index % symbols.length]}
                        </Text>

                    )
                )
            }

        </group>

    );

}