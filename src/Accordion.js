import AccordionItems from "./AccordionItems"

export default function Accordion({data}) {
      return <div className="accordion">
            {data.map((el, i) => <AccordionItems title={el.title} text={el.text} number={i}/>)}
      </div>
}