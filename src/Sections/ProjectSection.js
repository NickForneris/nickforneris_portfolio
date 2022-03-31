import { Carousel, Row, Col, Image, Card } from "react-bootstrap"
import optionanalyzer from "../Images/optionanalyzer.png"

const Projects = () => {
    return (
        <Col id="projects">
            <Row className='rowBig'>
                <Carousel indicators={false} controls={false}>
                    <Carousel.Item>
                        <Col className="mx-auto">
                            <a className="cardLink text-center" href="https://github.com/NickForneris/option-analyzer">
                                <Card>
                                <Card.Img variant="top" src={optionanalyzer} />
                                    <Card.Body>
                                        <Card.Text>
                                            React project that utilizes the TD Ameritrade API to retrieve option chains for any stock/ETF and allows for analysis of option strategies including single long and short call/puts, spreads, condors/butterflies, straddles, strangles, guts, etc.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Col>
    )
}

export default Projects