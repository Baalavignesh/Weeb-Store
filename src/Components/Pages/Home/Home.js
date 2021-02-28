import './Home.css';
import cups from '../../Images/cups.jpg';
import stickers from '../../Images/stickers.jpg';
import poster from '../../Images/poster.jpg';
import Carosol from './Carousel';


function Home() {

  const footerStyle = {
    padding : '5px',
    fontSize : '10px',
  }


    return (
        
              <div className = "main-body">

              
              <div className = "carosol">
                <Carosol />
              </div>
            <div className = "more-information">
              <h1>Get all your favorite Anime and Series Products</h1>
              <div className = "all-tiles">
                <div className = "items-cards-1">
                <img src = {poster} alt="poster" className = "image" /> 
              </div>
              <div className = "items-cards-2">
                <img src = {stickers} alt="sticker" className = "image"/>
              </div>
              <div className = "items-cards-3">
                <img src = {cups} alt="cups" className = "image"/>
              </div>

              <div className = "items-cards-1-text">
                <h1> Poster </h1>
              </div>
              <div className = "items-cards-2-text">
                <h1> Stickers </h1>
              </div>
              <div className = "items-cards-3-text">
                <h1>Cups </h1>
            </div>
              </div>
            </div>
            

            <div className = "footer">
              <div>
                <p> Terms and Condition Applied </p>
              </div>
              <div>
                <p> Contact Us </p>
                <p style = {footerStyle}> 9677117974 </p>
                <p style = {footerStyle}> baalavignesh21@gmail.com </p>
              </div>
              
            </div>
            </div>
    );
  }
  
  export default Home;
  