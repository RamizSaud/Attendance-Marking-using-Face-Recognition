import "./ClassCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
function ClassCard(props) {
  const handleRecording = async () => {
    const data = {
      fileName: props.name,
    };
    const response = await axios.post("/recording", data);
    console.log(response.data);
  };

  return (
    <>
      <div className="card-container" style={{ backgroundColor: props.color }}>
        <h2 className="card__heading">{props.name}</h2>
        <div className="button-container">
          <div className="card-attendance btn">
            <Link to={"/attendance"} state={{ name: props.name }}>
              Attendance File
            </Link>
          </div>
          <div className="card-recording btn" onClick={handleRecording}>
            Start Recording
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassCard;
