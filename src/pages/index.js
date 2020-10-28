import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/pages/Home.module.css";
import { motion } from "framer-motion";

const ctaTextVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const formAndBoxVariants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function Home() {
  const [colorInput, setColorInput] = useState("");

  const router = useRouter();

  const searchColor = (e) => {
    e.preventDefault();

    router.push({
      pathname: `/color/${colorInput}`,
    });
  };

  return (
    <div className={styles.generalWrapper}>
      <motion.div
        className={styles.container}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className={styles.textAndInputWrapper}>
          <motion.h1 className={styles.cta} variants={ctaTextVariants}>
            Encontre as cores de qualquer coisa em um clique
          </motion.h1>
          <motion.div
            className={styles.inputWrapper}
            variants={formAndBoxVariants}
          >
            <form onSubmit={searchColor}>
              <label htmlFor='color'>Qual cor você procura?</label>
              <input
                type='text'
                placeholder='Pêssego'
                id='color'
                onChange={(e) => setColorInput(e.target.value)}
              />
            </form>
            <Link href={`/color/${colorInput}`}>Procurar</Link>
          </motion.div>
        </div>
        <motion.div
          className={styles.gradientBox}
          variants={formAndBoxVariants}
        />
      </motion.div>
    </div>
  );
}
