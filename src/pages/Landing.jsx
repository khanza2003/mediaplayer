import React from 'react'
import { Link } from 'react-router-dom'
import lamdingimg from '../assets/bgimage.png'
import feature1 from '../assets/images1.jpeg'
import feature2 from '../assets/image2.webp'
import feature3 from '../assets/images3.jpeg'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-item-center'>
        <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
            <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col-lg'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' src={lamdingimg} alt="landing" />
        </div>
      </div>
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'> <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop feature.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className='my-5 row align-item-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span style={{fontSize:'25px',fontWeight:'bolder'}}>Managing Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi laborum, ex accusamus aliquid quisquam nesciunt sint, quam a provident eos veritatis </p>
          <p style={{textAlign:'justify'}}><span style={{fontSize:'25px',fontWeight:'bolder'}}>Categorise Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat a! Numquam inventore aperiam, alias magnam impedit dolorum ipsum obcaecati id temporibus.</p>
          <p style={{textAlign:'justify'}}><span style={{fontSize:'25px',fontWeight:'bolder'}}>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus quod ea dolore odit, unde ullam aut natus perspiciatis sequi dicta aperiam maxime? Quia nisi ea voluptatem, optio molestiae hic.</p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/AB2ACJ22fhY" title="Snehithane Cover (Alaipayuthe) - Masala Coffee  -" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing