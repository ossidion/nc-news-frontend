function About() {
  return (
    <section className="static-page">
      <h2>About This Project</h2>
      <p>
        This project is a Reddit-style news app built using the PERN stack (PostgreSQL, Express, React, Node).
        It fetches live data from a custom backend API and demonstrates routing, user interaction, and conditional rendering.
      </p>
      <p>
        Features include article voting, commenting, topic filtering, optimistic UI updates, and responsive design.
        Built as part of the Northcoders bootcamp, it reflects my full-stack development capabilities.
      </p>

      <h2>Next steps</h2>
      
      <p>
        The app is currently signed in as jessjelly and therefore, users can only post and delete comments made by this username. Next steps in this project will be to incorporate authentication using JWT tokens which will be varified by the backend api.
      </p>
      <p>
        If you are interested in the backened api, it can be found <a href="https://backend-nc-news-app.onrender.com/api" target="_blank">here</a>! 
      </p>

      <p>Moving further beyond the MVP, I plan to introduce a dark mode toggle and expand the API to allow users to create their own articles which will be saved in the database.</p>
    </section>
  );
}

export default About;
