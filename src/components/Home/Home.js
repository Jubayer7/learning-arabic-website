import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card>
                    <Card.Img width="50" height="50" variant="top" src="https://cdn.shopify.com/s/files/1/0939/6996/products/wcaa.jpg" />
                    <Card.Body>
                        <Card.Title>Lets learn Arabic</Card.Title>
                        <Card.Text>
                            <h5>Price: $300</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col>
                <Card>
                    <Card.Img width="50" height="50" variant="top" src="https://www.islamicity.org/global/images/photo/IC-Articles/Learning_Arabic_calligrapIC__800x600.JPG" />
                    <Card.Body>
                        <Card.Title>Practicl Writing Tips</Card.Title>
                        <Card.Text>
                            <h5>Price: $400</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col>
                <Card>
                    <Card.Img width="50" height="50" variant="top" src="https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2019/08/arabic.jpg" />
                    <Card.Body>
                        <Card.Title>Modern Arabic Learning</Card.Title>
                        <Card.Text>
                            <h5>Price: $600</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col>
                <Card>
                    <Card.Img width="50" height="50" variant="top" src="https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2021/04/Advantages-of-Learning-Arabic-for-Business-1024x382.jpg" />
                    <Card.Body>
                        <Card.Title>Business Arabic Learning</Card.Title>
                        <Card.Text>
                            <h5>Price: $400</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>

        </Row>
    );
};

export default Home;