'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({children}) => {
    const ref = useRef(null);
    const view = useInView(ref, { once: true });
    const control = useAnimation()      
    useEffect(() => {
        if (view) {
            control.start('visible');

        }

    }, [view]);
  return (
    <div ref={ref}>
        <motion.div
    variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
    }}
    initial='hidden'
    animate={control}
    transition={{ duration:0.5, delay: 0.25}}
    
    >
        {children}
      
    </motion.div>
    </div>
  )
}

export default Reveal
