import profile from "../assets/pixiv.png";
import "./content.css";
import Footer from "./footer";
export default function Content() {
  return (
    <div className="main-content">
      <img src={profile} className="profile-img"></img>
      <div className="main-describe">
        <div className="info">
          <h1>Laura Smith</h1>
          <h2>Frontend Developer</h2>
          <h3>laurasmith.website</h3>
          <div className="button-panel">
            <div className="button-email">
              <i className="fa fa-solid fa-envelope"></i>
              &nbsp;&nbsp;Email
            </div>
            <div className="button-linkedin">
              <i className="fa fa-solid fa-linkedin"></i>
              &nbsp;&nbsp;LinkedIn
            </div>
          </div>
        </div>
		<div className="describe">
        <h1 className="describe-title">About</h1>
        <p className="describe-content">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1 className="describe-title">Interests</h1>
        <p className="describe-content">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
	  </div>
      <Footer></Footer>
    </div>
  );
}
