import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
// import * as motion from "motion/react-client"
import { useState } from 'react';

import { motion, useSpring, useScroll } from "motion/react"


function body() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  
  return (
    <>
      <motion.div

        id="scroll-indicator"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.9, bounce: 0.6 },
        }}
        style={{ scaleX, background: "linear-gradient(to right, #2f9e44, #b2f2bb)", zIndex: 1000, position: "fixed", top: 500, left: 0, right: 50, height: 3 }}
        >
        <Container>
          <h1>LeafCare</h1>
        </Container>
      </motion.div>
      
        
    </>
  );
}

export default body;