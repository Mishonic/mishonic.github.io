import React, { PureComponent } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lake from '../assets/Lake.jpeg';
import bridge from '../assets/Bridge.jpeg';
import sunset from '../assets/Sunset.jpeg';

class CarouselBox extends PureComponent {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ bridge }  
                        alt="Bridge"                  
                    />
                    <Carousel.Caption>
                        <h3 className="">Bridge</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ lake }  
                        alt="Lake"                  
                    />
                    <Carousel.Caption>
                        <h3>Lake</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ sunset }  
                        alt="sunset"                  
                    />
                    <Carousel.Caption>
                        <h3>Sunset</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselBox