import "./css/note_card.css";
import { Link } from "react-router-dom";

function NoteCard(props) {
  const Colors = [
    "#4db6ac",
    "#80cbc4",
    "#b2dfdb",
    "#ff7043",
    "#ff8a65",
    "#ffab91",
    "#7cb342",
    "#9ccc65",
    "#aed581",
    "#fdd835",
    "#ffee58",
    "#fff176",
  ];

  // let color = Colors[Math.floor(Math.random() * Colors.length)];

  let color = Colors[props.index % Colors.length];

  return (
    <Link
      style={{ backgroundColor: color }}
      // style={{
      //   "background-image": `linear-gradient(${Math.floor(
      //     Math.random() * 360
      //   )}deg, ${Colors[Math.floor(Math.random() * Colors.length)]}, ${
      //     Colors[Math.floor(Math.random() * Colors.length)]
      //   })`,
      // }}
      to={`/show_note/${props.id}`}
      className="card-container"
    >
      <div
        className="note-data"
        dangerouslySetInnerHTML={{ __html: props.data }}
      />
    </Link>
  );
}

export default NoteCard;
