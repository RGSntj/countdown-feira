import "./styles.scss";

export function CountdownRenderer({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) {
  if (completed) {
    return (
      <div className="container-completed-hours">
        <h1 className="hour-completed">Estamos acontecendo!! 🎉</h1>
        <p>
          Prepare-se para uma experiência incrível, porque o evento está apenas
          começando! 🚀🎊
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container-data">
        <div>
          {/* Se o dia for menor q 9 ele adiciona o 0 na frente, o mesmo segue para os demais.
            ? = true
            : = false

            if (days > 9) {
              return days
            } 
            else {
              return `${0}${days}`
            }
          */}
          <span>{days > 9 ? days : "0" + days}</span> <p>DIAS</p>
        </div>
        <div className="line" />
      </div>
      <div className="container-data">
        <div>
          <span>{hours > 9 ? hours : "0" + hours}</span>
          <p>HORAS</p>
        </div>
        <div className="line" />
      </div>
      <div className="container-data">
        <div>
          <span>{minutes > 9 ? minutes : "0" + minutes}</span>
          <p>minutos</p>
        </div>
        <div className="line" />
      </div>
      <div className="container-data">
        <div>
          <span>{seconds > 9 ? seconds : "0" + seconds}</span>
          <p>SEGUNDOS</p>
        </div>
      </div>
    </div>
  );
}
