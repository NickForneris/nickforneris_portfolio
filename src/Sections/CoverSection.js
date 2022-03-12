import { useState, useEffect } from 'react';
import { Container, Col, Row, Stack } from 'react-bootstrap';
import { copy } from '../Copy/copy';

const coverCopy = copy.greeting + copy.name + " and I'm your new" + copy.job;

const Cover = () => {

    const [typedCover, setTypedCover] = useState('')
    const [fadeInTag, setFadeInTag] = useState('hide')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypedCover(coverCopy.slice(0, typedCover.length + 1))
        }, 125)
        if (typedCover.length == coverCopy.length) {
            setFadeInTag('fade')
        }
        return () => clearTimeout(timeout)
    }, [typedCover])

    return (
        <Container fluid>
            <Col>
                <Row className='rowCover'>
                    <Col className="col-md-4 mx-auto">
                        <h2 className='blinking-cursor text-white'>{typedCover}</h2>
                        <span className={`${fadeInTag} tag`}>{copy.tag}</span>
                    </Col>
                </Row>
                <Row className='rowCover'>
                    <h2>TEST</h2>
                </Row>
            </Col>
        </Container>
    );
}

export default Cover;