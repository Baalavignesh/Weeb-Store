import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import c1 from '../../Images/c1.png';
import c2 from '../../Images/c2.jpg';
import c3 from '../../Images/c3.jpg';

function caro() {
    return(
        <Carousel showArrows={true} className = "carosol" infiniteLoop={true} showThumbs= {false} showStatus= {false} autoPlay={true} stopOnHover={true}>
                  <div>
                      <img src= {c1} alt = "c1"/>   
                  </div>
                  <div>
                      <img src={c2} alt = "c2" className = "image"/>
                  </div>
                  <div>
                      <img src={c3} alt = "c3" className = "image"/>
                  </div>
              </Carousel>
    );
}

export default caro;