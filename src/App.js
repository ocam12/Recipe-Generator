import { InputField } from './component/input_field.js';
import './App.css';
import { useEffect, useState} from 'react';
import { MultipleSelect } from './component/multiple-select.js';
import { FormWrapper } from './component/form-wrapper.js';
import { Navbar } from './component/nav.js';
import { RecipeGallery } from './component/recipe-gallery/recipegallery.js';
import { Footer } from './component/footer.js';

 
function App() {
  const [Recipes, setRecipes] = useState([]);
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <FormWrapper setRecipes={setRecipes}>
      </FormWrapper>
      

      <RecipeGallery items={Recipes}></RecipeGallery>
      <Footer></Footer>
    </div>
  );
}

export default App;