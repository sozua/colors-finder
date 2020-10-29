import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/pages/NotFound.module.css";

export default function NotFoundPage() {
  return (
    <motion.div
      className={styles.errorPageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <span>
        <p>Página não encontrada</p>
        <Link href='/'>Voltar à pagina inicial</Link>
      </span>
    </motion.div>
  );
}
