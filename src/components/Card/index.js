import { useState } from "react";
import colorConvert from "color-convert";

import styles from "../../styles/components/Card.module.css";
import Copy from "../../icons/copy";
import ChangeType from "../../icons/changeType";

import { useSnackbar } from "react-simple-snackbar";

export default function Card({ color: originalColor }) {
  const [colorCodeType, setColorCodeType] = useState("hex");
  const [color, setColor] = useState(originalColor);

  const snackbarOptions = {
    position: "bottom-center",
    style: {
      background: "#444",
      fontWeight: 600,
      fontFamily: "'HK Grotesk', 'Helvetica', 'Inter', sans-serif",
      color: "var(--text)",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(snackbarOptions);

  function copyColorCode() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        if (colorCodeType === "hex") {
          navigator.clipboard.writeText(color);
          openSnackbar(`"${color}" copiado para sua área de transferência`);
        } else {
          navigator.clipboard.writeText(`${colorCodeType}(${color})`);
          openSnackbar(
            `"${colorCodeType}(${color})" copiado para sua área de transferência`
          );
        }
      }
    });
  }

  const changeColorsByType = {
    hex() {
      const rgbArray = colorConvert.hex.rgb(color);
      setColor(rgbArray);
      setColorCodeType("rgb");
    },
    rgb() {
      const hslArray = colorConvert.rgb.hsl(color);
      setColor(hslArray);
      setColorCodeType("hsl");
    },
    hsl() {
      setColor(`#${colorConvert.hsl.hex(color)}`);
      setColorCodeType("hex");
    },
  };

  function changeColorCodeType() {
    changeColorsByType[colorCodeType]();
  }

  return (
    <div className={styles.container}>
      <div className={styles.colorBox} style={{ backgroundColor: color }} />
      <div className={styles.detailsContainer}>
        <h2 className={styles.colorCode} onClick={copyColorCode}>
          {colorCodeType === "hex" ? `${color}` : `${colorCodeType}(${color})`}
        </h2>
        <div className={styles.buttons}>
          <button onClick={copyColorCode}>
            <Copy />
          </button>
          <button onClick={changeColorCodeType}>
            <ChangeType />
          </button>
        </div>
      </div>
    </div>
  );
}
