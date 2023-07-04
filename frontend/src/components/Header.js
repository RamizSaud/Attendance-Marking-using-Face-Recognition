import header_pic from "../img/header-pic.png";
import "./Header.css";

function Header() {
  return (
    <>
      <svg
        className="svg"
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 290"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(238, 151, 209, 1)" offset="0%"></stop>
            <stop stop-color="rgba(106, 4, 73, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,145L60,159.5C120,174,240,203,360,217.5C480,232,600,232,720,193.3C840,155,960,77,1080,43.5C1200,10,1320,19,1440,48.3C1560,77,1680,126,1800,135.3C1920,145,2040,116,2160,96.7C2280,77,2400,68,2520,91.8C2640,116,2760,174,2880,178.8C3000,184,3120,135,3240,135.3C3360,135,3480,184,3600,188.5C3720,193,3840,155,3960,120.8C4080,87,4200,58,4320,48.3C4440,39,4560,48,4680,53.2C4800,58,4920,58,5040,48.3C5160,39,5280,19,5400,29C5520,39,5640,77,5760,87C5880,97,6000,77,6120,87C6240,97,6360,135,6480,169.2C6600,203,6720,232,6840,212.7C6960,193,7080,126,7200,87C7320,48,7440,39,7560,33.8C7680,29,7800,29,7920,33.8C8040,39,8160,48,8280,67.7C8400,87,8520,116,8580,130.5L8640,145L8640,290L8580,290C8520,290,8400,290,8280,290C8160,290,8040,290,7920,290C7800,290,7680,290,7560,290C7440,290,7320,290,7200,290C7080,290,6960,290,6840,290C6720,290,6600,290,6480,290C6360,290,6240,290,6120,290C6000,290,5880,290,5760,290C5640,290,5520,290,5400,290C5280,290,5160,290,5040,290C4920,290,4800,290,4680,290C4560,290,4440,290,4320,290C4200,290,4080,290,3960,290C3840,290,3720,290,3600,290C3480,290,3360,290,3240,290C3120,290,3000,290,2880,290C2760,290,2640,290,2520,290C2400,290,2280,290,2160,290C2040,290,1920,290,1800,290C1680,290,1560,290,1440,290C1320,290,1200,290,1080,290C960,290,840,290,720,290C600,290,480,290,360,290C240,290,120,290,60,290L0,290Z"
        ></path>
      </svg>
      <div className="header">
        <div className="header__heading">
          <h1 className="header__heading-text">
            "Unlock the power of facial recognition with just a glance - Your
            face is the key!"
          </h1>
        </div>
        <div className="header__pic">
          <img src={header_pic} alt="Header-pic" className="header__pic-img" />
        </div>
      </div>
    </>
  );
}

export default Header;