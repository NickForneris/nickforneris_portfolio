import { Carousel, Row, Col, Image } from "react-bootstrap"
import { copy } from "../Copy/copy"


const References = () => {
    return (
        <Col id="references">
            <Row className='rowBig'>
                <Carousel fade indicators={false} controls={false}>
                  {Object.values(copy.reviews).map((e,i) => {
                    <Row className="text-white">Kind Words</Row>
                      return (
                    <Carousel.Item interval={10000} key={i}>
                        <Col className="mx-auto">
                        <h2 className="text-white text-center">What Others Say ...</h2>
                            <Row className='rowSmall'>
                                <Col className="mx-auto col-md-6 text-white">
                                {e}
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                      )} 
                  )}
                </Carousel>
            </Row>
        </Col>
    )
}

export default References