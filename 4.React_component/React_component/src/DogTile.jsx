import "./DogTile.css";
import DogDescription from "./DogDescription";

function DogTile(props) {
  //console.log(props);
  //const imgurl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500I"
  const stylecss = { fontSize: "20px", color: "red" };
  return (
    <div className="first">
      <img src={props.img} />
      <h3 style={stylecss}>{props.Text} </h3>
      <DogDescription />
    </div>
  );
}

export default DogTile;
