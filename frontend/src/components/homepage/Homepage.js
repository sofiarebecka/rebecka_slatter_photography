import './Homepage.css'
import Navbar from '../navbar/Navbar'

const Homepage = () => {
  return (
    
    <div>
      <Navbar/>
      <div class="main-container">
        <div class="image-loop">
          <img src="image1.png" alt="Image 1"/>
          <img src="image2.png" alt="Image 2"/>
          <img src="image3.png" alt="Image 3"/>
          <img src="image4.png" alt="Image 4"/>
          <img src="image5.png" alt="Image 5"/>
          <img src="image6.png" alt="Image 6"/>
          <img src="image7.png" alt="Image 7"/>
        </div>
      </div>

    </div>
    
  )
}

export default Homepage