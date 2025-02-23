import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const recipeData = {
  biryani: {
    name: "Chicken Biryani",
    description: "Spicy and flavorful Indian rice dish with chicken.",
    image: "/images/biryani.jpg",
    steps: [
      "Marinate chicken with yogurt, spices, and lemon juice.",
      "Cook basmati rice with whole spices and set aside.",
      "Sauté onions, tomatoes, and marinated chicken.",
      "Layer chicken and rice, cover, and cook on low heat.",
      "Garnish with coriander and serve hot!"
    ]
  },
  butterChicken: {
    name: "Butter Chicken",
    description: "Rich and creamy butter chicken with aromatic spices.",
    image: "/images/butter_chicken.jpg",
    steps: [
      "Marinate chicken with yogurt, spices, and lemon juice.",
      "Cook the chicken in a pan until lightly browned.",
      "Prepare a sauce with butter, tomatoes, and cream.",
      "Simmer the chicken in the sauce until fully cooked.",
      "Serve with naan or rice."
    ]
  },
  pizza: {
    name: "Homemade Pizza",
    description: "Crispy homemade pizza with fresh toppings.",
    image: "/images/pizza.jpg",
    steps: [
      "Prepare pizza dough and let it rise.",
      "Roll out the dough and spread tomato sauce.",
      "Add cheese and your favorite toppings.",
      "Bake in a preheated oven at 220°C (430°F) for 15 minutes.",
      "Slice and enjoy!"
    ]
  },
  chocoLavaCake: {
    name: "Choco Lava Cake",
    description: "Decadent molten chocolate cake with a gooey center.",
    image: "/images/choco_lava.jpg",
    steps: [
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar until fluffy.",
      "Combine with melted chocolate and flour.",
      "Pour into ramekins and bake at 200°C (390°F) for 10 minutes.",
      "Serve warm with ice cream."
    ]
  },
  iceCream: {
    name: "Vanilla Ice Cream",
    description: "Creamy homemade vanilla ice cream.",
    image: "/images/icecream.jpg",
    steps: [
      "Heat milk, sugar, and cream in a saucepan until sugar dissolves.",
      "Whisk egg yolks in a bowl and slowly mix with warm milk mixture.",
      "Return to heat and cook until thickened.",
      "Cool the mixture and add vanilla extract.",
      "Freeze in an ice cream maker and enjoy!"
    ]
  }
};

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <Container className="text-center mt-4"><h2>Recipe Not Found</h2></Container>;
  }

  return (
    <Container className="mt-4 text-center">
      <Card>
        <Card.Img variant="top" src={recipe.image} style={{ maxHeight: "300px", objectFit: "cover" }} />
        <Card.Body>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h3>How to Make:</h3>
          <ol className="text-start">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipeDetail;
