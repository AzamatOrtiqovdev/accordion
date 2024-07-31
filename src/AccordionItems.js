import { useState } from "react";

export default function AccordionItems({ title, text, number }) {
  const [isOpen, setIsOPen] = useState(false);

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => setIsOPen(!isOpen)}>
      <p className="number">{number < 10 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
