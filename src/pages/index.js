import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

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
    <div className={styles.container}>
      <div className={styles.textAndInputWrapper}>
        <h1 className={styles.cta}>
          Encontre as cores de qualquer coisa em um clique
        </h1>
        <div className={styles.inputWrapper}>
          <form onSubmit={searchColor}>
            <label htmlFor='color'>Cor base</label>
            <input
              type='text'
              placeholder='Azul queimado'
              id='color'
              onChange={(e) => setColorInput(e.target.value)}
            />
          </form>
          <Link href={`/color/${colorInput}`}>Procurar</Link>
        </div>
      </div>
      <div className={styles.gradientBox}></div>
    </div>
  );
}
