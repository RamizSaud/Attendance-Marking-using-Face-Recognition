import About_pic from "../img/about-pic.jpg";
import "./About.css";
function About() {
  return (
    <>
      <div className="about">
        <h2 className="about__heading">About Us</h2>
        <div className="line"></div>
        <div className="about-container">
          <div className="info">
            <p className="text">
              An attendance tracking application that uses facial recognition
              technology allows users to mark their attendance simply by taking
              a selfie or facing their device's camera. The app captures an
              image of the user's face and compares it with the pre-existing
              database of images to confirm their identity
            </p>
            <p className="text">
              {" "}
              This technology eliminates the need for traditional
              attendance-taking methods like manual sign-in sheets, which are
              prone to errors and can be time-consuming. Additionally, facial
              recognition technology makes it difficult for someone to falsely
              mark attendance for someone else. The app can be used in various
              settings such as classrooms, workplaces, and events, where
              attendance records need to be accurately tracked.
            </p>
          </div>
          <img src={About_pic} alt="" className="about__img" />
        </div>
      </div>
    </>
  );
}

export default About;
