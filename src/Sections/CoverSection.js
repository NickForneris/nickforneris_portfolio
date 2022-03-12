import React, { useState, useEffect } from 'react';
import { Col, Row, Button} from 'react-bootstrap';
import { copy } from '../Copy/copy';

const coverCopy = copy.greeting + copy.name + " and I'm your new" + copy.job;

const Cover = () => {

    const [typedCover, setTypedCover] = useState('')
    const [fadeInTag, setFadeInTag] = useState('hide')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypedCover(coverCopy.slice(0, typedCover.length + 1))
        }, 100)
        if (typedCover.length == coverCopy.length) {
            setFadeInTag('fadeIn')
        }
        return () => clearTimeout(timeout)
    }, [typedCover])

    return (
        <Col id='top' className="mx-auto">
            <Row className='rowBig'>
                <Col className="col-md-5">
                    <div>
                        <h2 className='blinking-cursor text-white'>{typedCover}</h2>
                        <span className={`${fadeInTag} text`}>{copy.tag}</span>
                    </div>
                    <div className={`${fadeInTag} mt-3`}><Button variant='light'>RESUME</Button></div>
                </Col>
            </Row>
        </Col>
    );
}

export default Cover;