import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Illustrator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
        <div className="introSocial">
          <a href="https://www.linkedin.com/in/mingzhuwan/" target="_blank" rel="noopener noreferrer" className="introSocialLink"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://github.com/Mingzhu666/mz_project_one" target="_blank" rel="noopener noreferrer" className="introSocialLink"><i className='bx bxl-github' ></i></a>
          <a href="https://www.youtube.com/channel/UClSAVwwl15qFnuz9A2YZzLw" target="_blank" rel="noopener noreferrer" className="introSocialLink"><i className='bx bxl-youtube' ></i></a>
        </div>
        <a download="" href="assets/calendar.pdf" className="introDownload">Download Tiger Calendar</a>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Tiger King</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
