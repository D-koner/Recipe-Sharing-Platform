import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const recipes = [
  { id: "biryani", name: "Chicken Biryani", image: "/images/biryani.jpg", className: "recipe-img" },
  { id: "butterChicken", name: "Butter Chicken", image: "/images/butter_chicken.jpg", className: "recipe-img" },
  { id: "pizza", name: "Homemade Pizza", image: "/images/pizza.jpg", className: "recipe-img" },
  { id: "chocoLavaCake", name: "Choco Lava Cake", image: "/images/choco_lava.jpg", className: "recipe-img" },
  { id: "iceCream", name: "Vanilla Ice Cream", image: "/images/icecream.jpg", className: "recipe-img" },
];

function RecipeList() {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Explore Recipes 🍲</h1>
      <Row className="mt-3">
        {recipes.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.image} className="recipe-img" />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Button variant="success" as={Link} to={`/recipe/${recipe.id}`}>
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeList;
