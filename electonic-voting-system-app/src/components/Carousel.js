

import Carousel from 'react-bootstrap/Carousel'
const Carouselcomponent = (props) => {
    return(
        <Carousel>  
                         <Carousel.Item style={{'height':"500px"}} >  
                         <img style={{'height':"500px"}}  
                         className="d-block w-100"  
                        src={'carousel-img-1.jpg'} alt={"img-1"}  />  
                           <Carousel.Caption>  
                            
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-100"  
                                    src={'carousel-img-2.jpg'}  alt={"img-2"}  />  
                                       <Carousel.Caption>  
                                   
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"500px"}}>  
                                       <img style={{'height':"500px"}}  
                                        className="d-block w-100"  
                                         src={'carousel-img-3.jpg'}  alt={"img-3"}  />  
                                        <Carousel.Caption>  
                                         
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  

    )
}


export default Carouselcomponent;
