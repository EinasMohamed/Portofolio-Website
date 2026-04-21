import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/header-img.svg";

export const Banner = () => {

  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>
                        Welcome to my portfolio
                    </span>
                    <h1>
                        {'Hi! I am Einas'}
                        <span className='wrap'>
                            , a Web Developer
                        </span>
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>   
                    <button onClick={()=> console.log('pressed')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='header-image'></img>
                </Col>
            </Row>
        </Container>
    </section>
  );
}
