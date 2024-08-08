export default function AccordionItems({ title, number, curOpen, onOpen, children }) {

  const isOpen = number === curOpen;

  function hundleToogle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={hundleToogle}
    >
      <p className="number">{number < 10 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
