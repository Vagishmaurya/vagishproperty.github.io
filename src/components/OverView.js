import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
function NavTabsExample() {
  return (
    <Card>

      <Card.Header >
        <p className='text-centre'>
        <p class="fs-5">
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
          
            <Nav.Link href="#Overview">Overview</Nav.Link>
            
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Details">Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#Features">Features & Amenities</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#Nearby">Nearby</Nav.Link>
          </Nav.Item>
        </Nav></p></p>
      </Card.Header>
      <Card.Body>
      <section className="Overview" id="Overview">
        <div class="max-width">
            <h2 class="title">Overview</h2>
            <div class="Overview-content">
             <p>
              Property taxes are changed by local government entities , such as KMC, and are due by the owner of the property. The amount of KMC property tax that must be paid may vary.Thus, it depends on the location and a number of other ctiteria. KMC approved the new Unit Area Assessment'(UAA)' mechanism for calculating property taxes in March 2017.
             </p>
                    
                
            </div>
        </div>
    </section>
    <section class="Details" id="Details">
        <div class="max-width">
            <h2 class="title">Details</h2>
             <div class="det-content"> 
             <Card style={{ width: '15rem' }}>
      <Card.Body>
        <img src='bed-icon.jpg' height = "75px" weidth = "150px" alt=''></img>
       <h3>BHK</h3>
       <h5>3 BHK</h5>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='bathroom.png' height = "75px" alt=''></img>
        <h3>Bathroom</h3>
        <h5>2</h5>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='furnishing.png' height = '75px' alt=''></img>
       <h4>Furnishing status</h4>
       <h5>Semi Furnished</h5>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='area.png' height = '50px' alt=''></img>
       <h3>Super Build Area</h3>
       <h6>1400 Sq.ft</h6>
      </Card.Body>
    </Card>
                </div>
                </div>
     </section>
     <section className="Features" id="Features">
        <div class="max-width">
            <h2 class="title">Features</h2>
            <div class="fet-content">
             
               <ul>
                <li>CCTV</li>
                <li>SECUIRITY</li>
                <li>LIFE</li>
               </ul>
             
                    
                
            </div>
        </div>
    </section>

    <section className="Nearby" id="Nearby">
        <div className="max-width">
        {/* <div className="carousel owl-carousel"> */}
            <h2 className="title">Nearby</h2>
            <div className="near-content">
            {/* <div className="card"> */}
            <Card style={{ width: '10rem' }}>
      <Card.Body>
       <img src='park.png' height = '50px' alt=''></img>
       <h3>Park</h3>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Body>
       <img src='school.png' height = '50px' alt=''></img>
       <h3>School</h3>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Body>
       <img src='hospital.jpg' height = '50px' alt=''></img>
       <h3>Hospital</h3>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' , backgroundcolor: 'blueviolet'}}>
      <Card.Body>
       <img src='gym.jpg' height = '50px' alt=''></img>
       <h3>Gym</h3>
      </Card.Body>
    </Card>
                   </div>
                   </div> 
                
            {/* </div> */}
        {/* </div> */}
    </section>
    <section className="Similar" id="Similar">
        <div class="max-width">
            <h2 class="title">Similar Property</h2>
            <div class="si-content">
            <Card style={{ width: '15rem' }}>
      <Card.Body>
        <img src='house.jpg' height = "75px" weidth = "150px" alt=''></img>
       <h5>2 BHK APARTMENT FOR SALE</h5>
       <button type="button" class="btn btn-primary">CONTACT NOW</button>
       <div>

       </div>
       <button type="button" class="btn btn-outline-dark">LEARN MORE</button>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='house.jpg' height = "75px" alt=''></img>
        <h5>2BHK APARTMENT FOR SALE</h5>
        <button type="button" class="btn btn-primary">CONTACT NOW</button>
        <div>

        </div>
        <button type="button" class="btn btn-outline-dark">LEARN MORE</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Body>
       <img src='house.jpg' height = '75px' alt=''></img>
       <h5>2 BHK APARTMENT FOR SALE</h5>
       <div>
       <button type="button" class="btn btn-primary">CONTACT NOW</button>
      
        </div>
       <button type="button" class="btn btn-outline-dark">LEARN MORE</button>
      </Card.Body>
    </Card>
      
                    
                
            </div>
        </div>
    </section>




      </Card.Body>
    </Card>
  );
}

export default NavTabsExample;