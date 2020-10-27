import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchColor } from "../../api/color";

import Card from "../../components/Card";
import Link from "next/link";
import SnackbarProvider from "react-simple-snackbar";

import styles from "../../styles/pages/Color.module.css";
import ArrowLeft from "../../icons/arrow-left";

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
      <div className={styles.container}>
        <div className={styles.goBack}>
          <ArrowLeft />
          <Link href='/'>Voltar</Link>
        </div>
        <h1>
          Cores encontradas para <span>{id}</span>:
        </h1>
        <div className={styles.colorsContainer}>
          {colors &&
            colors.map((color, index) => {
              return <Card color={color.color} key={index} />;
            })}
        </div>
      </div>
    </SnackbarProvider>
  );
}
