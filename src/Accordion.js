import AccordionItems from "./AccordionItems";
import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          number={i}
          key={i}
        >
          {el.text}
        </AccordionItems>
      ))}

      <AccordionItems
          curOpen={curOpen}
          onOpen={setCurOpen}
          title="Thinking in React"
          number={22}
          key="Test 1"
        >
          <p>Allows React Developer to:</p>
          <ul>
            <li>
                  Breake up UI into components
            </li>
            <li>
                  Make components reuseable
            </li>
            <li>
                  Place state efficiently
            </li>
          </ul>
      </AccordionItems>
    </div>
  );
}
