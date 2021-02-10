import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';
import projects from '../projects';

function App() {
  return (
    <div class="container">
      <Nav />
      <Hero />
      <h3 style={{marginTop: "56px"}}>Featured Projects</h3>
      {projects.map((p) => {
        return (
          <Card 
          project={p.title}
          description={p.description}
          />
        );
      })}

    </div>
  );
}

export default App;
