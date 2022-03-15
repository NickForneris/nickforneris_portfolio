import { Carousel, Row, Col, Image } from "react-bootstrap"
import optionanalyzer from "../Images/optionanalyzer.png"

const Projects = () => {
    return (
        <Col id="projects">
            <Row className='rowBig'>
                <Carousel>
                    <Carousel.Item>
                        <Col className="mx-auto">
                        <Row>

                            <a href="https://github.com/NickForneris/option-analyzer" className="text-center">
                                <Image
                                    src={optionanalyzer}
                                    alt="Logo for Option Analyzer Project"
                                    fluid
                                />
                            </a>
                        </Row>
                            <Row className='rowSmall'>
                                <Col className="mx-auto">
                                    <Carousel.Caption className='text-white'>
                                        React project that utilizes the TD Ameritrade API to retrieve option chains for any stock/ETF and allows for analysis of option strategies including single long and short call/puts, spreads, condors/butterflies, straddles, strangles, guts, etc.
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Col>
    )
}

export default Projects