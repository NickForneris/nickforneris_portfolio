import { Col, Row } from 'react-bootstrap';
import { copy } from '../Copy/copy';
import html5 from '../Images/html5.png'
import css3 from '../Images/css3.png'
import github from '../Images/github.png'
import javascript from '../Images/javascript.png'
import react from '../Images/react.png'
import bootstrap from '../Images/bootstrap.png'
import workflow from '../Images/workflow.png'

const Skills = () => {

    return (
        <Col id="skills">
            <Row className='rowSmall'>
                <Col className='text-white text-center'>
                <img className='html5' src={html5} alt="html5 logo"/>
                </Col>
                <Col className='text-white text-center'>
                <img className='css3' src={css3} alt="css3 logo"/>
                </Col>
                <Col className='text-white text-center'>
                <img className='javascript' src={javascript} alt="javascript logo"/>
                </Col>
                <Col className='text-white text-center'>
                <img className='react' src={react} alt="react logo"/>
                </Col>
            </Row>
            <Row className='rowSmall'>
                <Col className='text-white text-center'>
                <img className='bootstrap' src={bootstrap} alt="bootstrap logo"/>
                </Col>
                <Col className='text-white text-center'>
                <img className='github' src={github} alt="github logo"/>
                </Col>
                <Col className='text-white text-center'>
                <img className='workflow' src={workflow} alt="workflow logo"/>
                </Col>
            </Row>
        </Col>
    );
}

export default Skills;