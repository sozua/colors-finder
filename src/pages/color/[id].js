import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchColor } from "../../api/color";

import Card from "../../components/Card";
import Link from "next/link";
import SnackbarProvider from "react-simple-snackbar";

import styles from "../../styles/pages/Color.module.css";
import ArrowLeft from "../../icons/arrow-left";
import { motion } from "framer-motion";
import {
  defaultTransitionWithDurationAndDelay,
  defaultVariant,
} from "../../api/animations";

export default function ColorPage() {
  const [colors, setColors] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const colorData = searchColor(id);

  useEffect(() => {
    async function active() {
      const { colors: colorsData } = await colorData;
      setColors(colorsData);
    }
    if (id) active();
  }, [id]);

  return (
    <SnackbarProvider>
      <motion.div
        className={styles.container}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <div className={styles.goBack}>
          <ArrowLeft />
          <Link href='/'>Voltar</Link>
        </div>
        <motion.h1
          variants={defaultVariant}
          transition={defaultTransitionWithDurationAndDelay(4)}
        >
          Cores encontradas para <span>{id}</span>:
        </motion.h1>
        <motion.div
          className={styles.colorsContainer}
          variants={defaultVariant}
          transition={defaultTransitionWithDurationAndDelay(0.2)}
        >
          {colors ? (
            colors.map((color, index) => {
              return <Card color={color.color} key={index} />;
            })
          ) : (
            <h1>Carregando</h1>
          )}
        </motion.div>
      </motion.div>
    </SnackbarProvider>
  );
}
