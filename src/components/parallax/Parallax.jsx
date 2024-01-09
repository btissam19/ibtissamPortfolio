import React from 'react'
import { motion } from 'framer-motion';
import './Parallax.scss'
function Parallax({text ,type}) {
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
            repeatType:"mirror",
            duration: 20,
          },
        },
      };
    return (
        <div className="parallex">
          <div className="wrapper">
            <motion.div
              className="textContainer"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h1 variants={textVariants}>
              {text}
              </motion.h1>
              <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>
                  Descover More
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
           {type}
          </motion.div>
          {/* <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ef8ba2" stroke="#ef8ba2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ef8ba2;} </style> <g> <path class="st0" d="M283.92,374.523c-3.227-1.207-6.742-2.87-10.316-4.839l-59.776,82.622l-4.251-54.124h-31.765l-4.257,54.133 l-59.774-82.631c-3.677,2.06-7.225,3.747-10.323,4.839C72.164,385.542-4.734,417.233,0.229,476.594 c1.192,14.245,79.52,29.028,193.462,29.028c113.937,0,192.274-14.782,193.466-29.028 C392.12,417.175,315.023,386.155,283.92,374.523z"></path> <path class="st0" d="M123.113,251.946c4.35,24.652,11.663,46.399,21.3,57.111c0,12.847,0,22.22,0,29.722 c0,0.753-0.132,1.546-0.352,2.366l33.751,16.254v23.841h31.765v-23.848l33.73-16.238c-0.211-0.819-0.339-1.614-0.339-2.374 c0-7.503,0-16.876,0-29.722c9.637-10.712,16.95-32.46,21.301-57.111c10.15-3.623,15.948-9.422,23.191-34.792 c7.71-27.025-11.593-26.107-11.593-26.107c15.613-51.676-4.938-100.242-39.359-96.677c-23.742-41.534-103.254,9.488-128.178,5.931 c0,14.244,5.931,24.924,5.931,24.924c-8.66,16.445-5.319,49.236-2.878,65.822c-1.414-0.025-18.868,0.157-11.465,26.107 C107.164,242.524,112.963,248.323,123.113,251.946z"></path> <path class="st0" d="M503.687,61.893c-7.999-16.685-21.135-30.524-37.382-40.228c-16.263-9.695-35.686-15.271-56.54-15.287 c-27.765,0.016-53.062,9.918-71.658,26.322c-9.293,8.206-16.924,18.066-22.24,29.193c-5.327,11.109-8.318,23.492-8.318,36.464 c-0.008,16.528,4.877,32.08,13.24,45.324c7.144,11.324,16.805,21.011,28.2,28.588l-17.161,42.866l12.392-1.53 c42.812-5.353,83.793-21.376,103.257-29.788c18.492-6.601,34.454-17.885,45.944-32.543c11.564-14.758,18.592-33.098,18.579-52.918 C512.013,85.386,509.005,73.003,503.687,61.893z M482.675,140.777c-9.62,12.301-23.497,22.244-39.926,28.018l-0.223,0.066 l-0.224,0.1c-16.842,7.312-50.911,20.589-87.126,26.893l12.276-30.624l-6.026-3.449c-12.16-6.948-22.116-16.412-28.97-27.273 c-6.861-10.895-10.626-23.121-10.637-36.15c0-10.232,2.328-19.953,6.63-28.953c6.439-13.475,17.421-25.263,31.517-33.676 c14.1-8.412,31.264-13.409,49.798-13.401c24.751-0.008,46.998,8.884,62.827,22.873c7.908,6.99,14.212,15.221,18.505,24.204 c4.297,9,6.626,18.72,6.634,28.953C497.723,113.941,492.312,128.451,482.675,140.777z"></path> <path class="st0" d="M369.454,88.207c-6.129,0-11.098,5.559-11.098,12.391c0,6.849,4.968,12.4,11.098,12.4 c6.13,0,11.105-5.551,11.105-12.4C380.559,93.766,375.583,88.207,369.454,88.207z"></path> <path class="st0" d="M412.275,88.207c-6.134,0-11.109,5.559-11.109,12.391c0,6.849,4.976,12.4,11.109,12.4 c6.13,0,11.101-5.551,11.101-12.4C423.376,93.766,418.405,88.207,412.275,88.207z"></path> <path class="st0" d="M455.083,88.207c-6.129,0-11.102,5.559-11.102,12.391c0,6.849,4.972,12.4,11.102,12.4 c6.138,0,11.109-5.551,11.109-12.4C466.193,93.766,461.221,88.207,455.083,88.207z"></path> </g> </g></svg>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" cx="11.9" cy="20.1" r="5.8"></circle> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="3.9" y1="23.4" x2="6.6" y2="22.3"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="17.2" y1="17.9" x2="19.9" y2="16.8"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="8.6" y1="12.1" x2="9.7" y2="14.8"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="14.1" y1="25.4" x2="15.2" y2="28.1"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="3.9" y1="16.8" x2="6.6" y2="17.9"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="17.2" y1="22.3" x2="19.9" y2="23.4"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="15.2" y1="12.1" x2="14.1" y2="14.8"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="9.7" y1="25.4" x2="8.6" y2="28.1"></line> <circle fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" cx="22.5" cy="9.5" r="4.7"></circle> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="17.5" y1="14.5" x2="19.2" y2="12.8"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="25.8" y1="6.2" x2="27.4" y2="4.6"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="17.5" y1="4.6" x2="19.2" y2="6.2"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="25.8" y1="12.8" x2="27.4" y2="14.5"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="15.5" y1="9.5" x2="17.8" y2="9.5"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="27.2" y1="9.5" x2="29.5" y2="9.5"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="22.5" y1="2.5" x2="22.5" y2="4.8"></line> <line fill="none" stroke="#ef8ba2" stroke-width="2" stroke-miterlimit="10" x1="22.5" y1="14.2" x2="22.5" y2="16.5"></line> </g></svg>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none;stroke:#ef8ba2;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="a" d="M42.79,12.72,21.55,41.78,3.79,28.79l4.87-6.66,11.1,8.12L36.13,7.85l3.3124,2.45.3419.2226L20.6168,36.0561,8.93,27.6263"></path></g></svg> */}
        </div>
      );
}

export default Parallax
