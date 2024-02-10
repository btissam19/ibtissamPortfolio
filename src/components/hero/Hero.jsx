import { motion } from 'framer-motion';
import './hero.scss';
function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IBTISSAM ECH CHAIBI</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer </motion.h1>
          <motion.h3 variants={textVariants}> Cloud & DevOps Enthusiast</motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => window.location.href = '#Skills'}>
              Discover More
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => window.location.href = '#Contact'}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        web Devops Cloud ML AI
      </motion.div>
      <div className="imageContainer">
        <img src="/ibtissam.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
