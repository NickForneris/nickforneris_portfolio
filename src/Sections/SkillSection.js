import { Col, Row } from 'react-bootstrap';
import html5 from '../Images/html5.png'
import css3 from '../Images/css3.png'
import github from '../Images/github.png'
import javascript from '../Images/javascript.png'
import react from '../Images/react.png'
import bootstrap from '../Images/bootstrap.png'

const Skills = () => {

    return (
        <Col id="skills">
        <Row className="rowFill text-white text-center">
        </Row>
            <Row className='rowSmall'>
            <h3 className='text-white text-center'>SKILLS</h3>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={html5} alt="html5 logo"/></a>
                </Col>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={css3} alt="css3 logo"/></a>
                </Col>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={javascript} alt="javascript logo"/></a>
                </Col>
            </Row>
            <Row className='rowSmall'>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={react} alt="react logo"/></a>
                </Col>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={bootstrap} alt="bootstrap logo"/></a>
                </Col>
                <Col className='text-white text-center zoom'>
                <a><img className='skillBadge' src={github} alt="github logo"/></a>
                </Col>
            </Row>
            <Row className="rowFill"></Row>
            <Row className="rowFill"></Row>
        </Col>
    );
}

export default Skills;