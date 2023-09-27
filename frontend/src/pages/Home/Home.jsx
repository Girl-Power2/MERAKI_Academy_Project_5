import React from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";


export default function Home() {
    return (
    <div>
        <MDBCarousel showIndicators showControls fade >
          <MDBCarouselItem
            className="h-25 w-75"
            width="15%"
            height="100"
            itemId={1}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>
    
          <MDBCarouselItem
            className="h-50 w-75"
            itemId={2}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>
    
          <MDBCarouselItem
            className="h-50 w-75 "
            itemId={3}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel></div>
  )
}