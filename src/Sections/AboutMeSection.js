import { Col, Row } from 'react-bootstrap';
import { copy } from '../Copy/copy';
import myPhoto from '../Images/myphoto.jpg'

const About = () => {

    return (
        <Col id="about">
            <Row className='rowBig'>
                <Col className="col-md-5">
                    <div>
                    <img className='myPhoto mb-2' src={myPhoto} alt="A photo of Nick Forneris"/>
                        <h2 className='text-white about'>About Me</h2>
                        <span className='text'>{copy.about}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default About;