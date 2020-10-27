import { useState } from "react";
import colorConvert from "color-convert";

import styles from "../../styles/components/Card.module.css";
import Copy from "../../icons/copy";
import ChangeType from "../../icons/changeType";

export default function Card({ color: originalColor }) {
  const [colorCodeType, setColorCodeType] = useState("hex");
  const [color, setColor] = useState(originalColor);

  function copyColorCode() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        if (colorCodeType === "hex") navigator.clipboard.writeText(color);
        else navigator.clipboard.writeText(`${colorCodeType}(${color})`);
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
