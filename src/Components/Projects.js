import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import img4 from "../assets/images/img4.webp"; 
import download from "../assets/images/download.webp"; 
import project1 from "../assets/images/project1.jpg"; 
import colorSharp from "../assets/images/color-sharp.png";
import TrackVisibility from 'react-on-screen'; 
import { ProjectCard } from "./ProjectCard.js";
 
export const Projects = () => { 
 
    const projects = [ 
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: img4, 
        }, 
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: project1, 
        },
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: download, 
        },
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: project1, 
        },
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: download, 
        },
        { 
            title: "Business Startup", 
            description: "Design & Development", 
            imgUrl: img4, 
        },
    ]; 
 
    return ( 
        <section className="project" id="projects"> 
        <Container> 
            <Row> 
                <Col size={12}> 
                    <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}> 
                            <h2>Projects</h2> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p> 
                            <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                                <Nav variant="pills" className="nav-pills mb-5 justify-content center align-items-center" id="pills-tab"> 
                                    <Nav.Item> 
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link> 
                                    </Nav.Item> 
                                    <Nav.Item> 
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link> 
                                    </Nav.Item> 
                                </Nav> 
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                                    <Tab.Pane eventKey="first"> 
                                        <Row> 
                                            { 
                                            projects.map((project, index) => { 
                                                return (
                                                <ProjectCard 
                                                    key={index} 
                                                    {...project} 
                                                    /> 
                                                ) 
                                            })
                                        } 
                                        </Row> 
                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="second"> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p> 
                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="third"> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p> 
                                    </Tab.Pane> 
                                </Tab.Content> 
                            </Tab.Container> 
                        </div>} 
                    </TrackVisibility> 
                </Col> 
            </Row> 
        </Container> 
        <img className="background-image-right" src={colorSharp}></img> 
        </section> 
    ) 
} 