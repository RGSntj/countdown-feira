import { CountdownRenderer } from "./components/Countdown";
import "./styles.scss";

import Countdown from "react-countdown";

export function App() {
  // 2024-09-21T09:30:00 <-- dia da feira

  const dataFeira = new Date("2024-09-21T09:30:00"); // pode mudar se quiser testar

  return <Countdown date={dataFeira} renderer={CountdownRenderer} />;
}
