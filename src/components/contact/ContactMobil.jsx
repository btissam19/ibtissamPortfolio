import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";
import { motion} from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qjqbocx",
        "template_rvi66yp",
        formRef.current,
        "EH78X_pdl4kMkEESp"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Error sending email. Please try again.");
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>btissamchaibi1912@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hello Casablanca/Taza</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>O610233997</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
        </motion.form>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default Contact;
