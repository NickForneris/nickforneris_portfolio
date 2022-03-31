import { useEffect, useState } from "react"
import { Carousel, Row, Col, ProgressBar, Image } from "react-bootstrap"
import { copy } from "../Copy/copy"


const References = () => {

    const [seconds, setSeconds] = useState(15)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000)
        } else {
            setSeconds(15)
            if (index < Object.values(copy.reviews).length - 1) {
            setIndex(index + 1)
            }else{
                setIndex(0)
            }
        }
    })

return (
    <Col id="references">
        <Row className='rowBig'>
            <Carousel fade indicators={false} controls={false} activeIndex={index}>
                {Object.values(copy.reviews).map((e, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Col className="mx-auto">
                                <Row className='rowBig'>
                                    <Col className="mx-auto col-md-6 text-white">
                                        <h2>What Others Say</h2>
                                        {e}
                                        <Row className="text-end text-white mt-2">
                                        <h6>Next in {seconds}</h6>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                 </Carousel.Item>
                 )})}
            </Carousel>
        </Row>
    </Col>
)
}

export default References