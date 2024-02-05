import Expertise from "../Expertise/Expertise";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Taylor Williams</h1>

      <div className="bio">
        <h3>Software Engineer</h3>
        <h2>Full Stack Developer & Front End App Developer</h2>
      </div>

      <Expertise />
    </div>
  );
}

export default Home;
