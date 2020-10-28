import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import {
  defaultTransitionWithDurationAndDelay,
  defaultTransitionWithDelay,
  defaultVariant,
  showUpVariants,
  defaultTransition,
} from "../api/animations";
import { motion } from "framer-motion";

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
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      transition={{ defaultTransition }}
    >
      <div className={styles.textAndInputWrapper}>
        <motion.h1
          className={styles.cta}
          variants={showUpVariants}
          transition={defaultTransition}
        >
          Encontre as cores de qualquer coisa em um clique
        </motion.h1>
        <motion.div
          className={styles.inputWrapper}
          variants={defaultVariant}
          transition={defaultTransition}
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
        variants={defaultVariant}
        transition={defaultTransition}
      />
    </motion.div>
  );
}
