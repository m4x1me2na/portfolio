"use client";

import { useRef, useState } from 'react'

import { motion } from 'framer-motion';





export default function Magnetic({    children,
                                     stiffness = 200,
                                     damping = 10,
                                     mass = 0.5,
                                     intensityX = 1,
                                     intensityY = 1,}) {

    const ref = useRef(null);

    const [position, setPosition] = useState({x:0,y:0});



    const handleMouse = (e) => {

        const { clientX, clientY } = e;

        const {height, width, left, top} = ref.current.getBoundingClientRect();

        const middleX = (clientX - (left + width / 2)) * intensityX;
        const middleY = (clientY - (top + height / 2)) * intensityY;

        setPosition({x: middleX, y: middleY})

    }



    const reset = () => {

        setPosition({x:0, y:0})

    }



    const { x, y } = position;

    return (

        <motion.div

            style={{position: "relative"}}

            ref={ref}

            onMouseMove={handleMouse}

            onMouseLeave={reset}

            animate={{x, y}}

            transition={{
                type: "spring",
                stiffness,
                damping,
                mass,
            }}

        >

            {children}

        </motion.div>

    )

}