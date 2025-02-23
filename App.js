import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import RecipeList from "./components/RecipeList.js";
import RecipeDetail from "./pages/RecipeDetails.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;