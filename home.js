import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../app.css";

function Home() {
  return (
    <Container className="text-center mt-4">
      {/* Welcome Section */}
      <Row>
        <Col>
          <h1>Welcome to Recipe World 🍽️</h1>
          <p>Discover and share the best recipes from around the world!</p>
          <Button variant="primary" as={Link} to="/recipes">
            Explore Recipes
          </Button>
        </Col>
      </Row>

      {/* Featured Recipes - First Row */}
      <Row className="mt-5">
        <Col>
          <h2>Featured Recipes</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/biryani.jpg" className="recipe-img" />
            <Card.Body>
              <Card.Title>Chicken Biryani</Card.Title>
              <Card.Text>Spicy and flavorful homemade chicken biryani.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/biryani">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/butter_chicken.jpg" className="recipe-img" />
            <Card.Body>
              <Card.Title>Butter Chicken</Card.Title>
              <Card.Text>Rich and creamy butter chicken with aromatic spices.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/butterChicken">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/pizza.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Homemade Pizza</Card.Title>
              <Card.Text>Crispy homemade pizza with fresh toppings.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/pizza">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Featured Recipes - Second Row */}
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/choco_lava.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Choco Lava Cake</Card.Title>
              <Card.Text>Decadent molten chocolate cake with a gooey center.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/chocoLavaCake">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/icecream.jpg" className="recipe-img"/>
            <Card.Body>
              <Card.Title>Vanilla Ice Cream</Card.Title>
              <Card.Text>Homemade creamy vanilla ice cream.</Card.Text>
              <Button variant="success" as={Link} to="/recipe/iceCream">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
