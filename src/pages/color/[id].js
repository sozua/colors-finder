import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchColor } from "../../api/color";

import Card from "../../components/Card";
import Link from "next/link";
import SnackbarProvider from "react-simple-snackbar";

import styles from "../../styles/pages/Color.module.css";
import ArrowLeft from "../../icons/arrow-left";
import { motion } from "framer-motion";

const backButtonVariants = {
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

const titleVariants = {
  initial: {
    opacity: 0,
    y: 15,
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

const colorCardsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
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

export default function ColorPage() {
  const [colors, setColors] = useState([]);
  const [pageName, setPagename] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const colorData = searchColor(id);
  const skeletonElements = Array.apply(null, Array(20));

  useEffect(() => {
    async function active() {
      const { colors: colorsData } = await colorData;
      setColors(colorsData);
    }
    if (!pageName && id) setPagename(id);
    if (id) active();
  }, [id]);

  return (
    <SkeletonTheme color='#222' highlightColor='#444'>
      <SnackbarProvider>
        <motion.div
          className={styles.container}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <motion.div className={styles.goBack} variants={backButtonVariants}>
            <ArrowLeft />
            <Link href='/'>Voltar</Link>
          </motion.div>
          <motion.h1 variants={titleVariants}>
            Cores encontradas para <span>{pageName}</span>:
          </motion.h1>
          <div className={styles.colorsContainer}>
            {colors.length > 0
              ? colors.map((color, index) => {
                  return (
                    <motion.span key={index} variants={colorCardsVariants}>
                      <Card color={color.color} />
                    </motion.span>
                  );
                })
              : skeletonElements.map((skeletonElement, index) => {
                  return (
                    <Skeleton
                      key={index}
                      height={400}
                      style={{ borderRadius: 8 }}
                    />
                  );
                })}
          </div>
        </motion.div>
      </SnackbarProvider>
    </SkeletonTheme>
  );
}
