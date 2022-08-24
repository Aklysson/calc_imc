import { useState } from "react";
import styles from "./App.module.css";
import Logo from "./assets/powered.png";
import {Calculate , Levels} from './helpers/imc'

function App() {
  const [heightField, setheightField] = useState(0);
  const [weightField, setweightField] = useState(0);

  const handleCalculate = () => {
    if (heightField && weightField) {
    } else {
      alert("Preencha Todos os campos!");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerstyle}>
          <img src={Logo} alt="img" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para indicar o índice de massa corórea ,parâmetro
            adotado pela OMS
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5(em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setheightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 80(em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setweightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className={styles.rightside}>...</div>
      </div>
    </div>
  );
}

export default App;
