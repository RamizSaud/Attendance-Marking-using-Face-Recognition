import ClassCard from "./ClassCard";
import "./Class.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Class() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const colors = ["#E55C78", "#824394", "#454A8A"];
    let classes = [];
    axios.get("/class").then((response) => {
      classes = response.data.classes.classes;
      let data = [];
      for (let i = 0; i < classes.length; i++) {
        data.push({ color: colors[i % 3], name: classes[i] });
      }
      setCardData(data);
    });
  }, []);

  const handleLogOut = async () => {
    const response = await axios.get("/logout");
    if (response.data.loggedOut) {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="class-container">
        <h1 className="class__heading">Your Classes</h1>
        <div className="class-list">
          {cardData.map((data) => (
            <ClassCard color={data.color} name={data.name} />
          ))}
        </div>
        <div className="logout_btn" onClick={handleLogOut}>
          Log out
        </div>
      </div>
    </>
  );
}

export default Class;
