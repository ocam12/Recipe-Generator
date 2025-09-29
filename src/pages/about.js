function About() {
    return (
        <div className="about-wrapper">
            <h2>About And The Making Of Recipe Generator</h2>
                <p className="about-text">
                    Made by Oliver Young, Matthew Ridsdale, and Connor McNamee.
                </p>
                <p className="about-text">
                    Recipe Generator was built as a team of three over just two days to both experiment with the
                    <a target="_blank" className="about-link" href="https://spoonacular.com/food-api/docs#Search-Recipes-Complex"> Spoonacular API </a>
                    and demonstrate our ability to create meaningful projects with React.
                    The usage and idea of our website is simple: the user may input their ingredients into a list and
                    accept a selection of preferences (diet, intolerances, cuisine) which will then generate a short list of recipes
                    (at most 10 recipes) to inspire the user based on their input. The recipe cards shown have information including
                    the servings, preparation time, and a link to the cooking instructions.
                </p>
                <p className="about-text">
                    Our goal was to create a useful website in a short space of time, showcasing our ability to collaborate
                    effectively as a team. We were also able to handle calls to the
                        <a target="_blank" className="about-link" href="https://spoonacular.com/food-api/docs#Search-Recipes-Complex"> Spoonacular API </a>
                    and maninpulate the data, presenting the user with relevant information.
                </p>
                <p className="about-text">
                    We do not store any user information. Any information input by the user and fetched from
                        <a target="_blank" className="about-link" href="https://spoonacular.com/food-api/docs#Search-Recipes-Complex"> Spoonacular API </a>
                    is held locally and will naturally be terminated on reloading or exiting the page.
                </p>
        </div>
    );
};

export default About;