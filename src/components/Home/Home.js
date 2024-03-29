import '../.././styles/fonts.css';
import Header from '.././Header/Header.js';
import Introduction from '.././Introduction/Introduction.js';
import Description from '.././Description/Description.js';
import Files from '.././Files/Files.js';
import Projects from '.././Projects/Projects.js';
import Footer from '.././Footer/Footer.js';

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Description />
      <Files />
      <Projects />
      <div style={{ height: "1000px" }}> </div>
      <Footer />
    </div>
  );
}

export default Home;
