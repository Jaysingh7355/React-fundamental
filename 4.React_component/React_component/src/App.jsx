import './App.css';
import DogTile from "./DogTile";
function App() {
  return (
    <>
      <section className="Puppy">
        
        <DogTile Text = "Puppy 1" img = "https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"/>
        <DogTile Text = "Puppy 2" img = "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"/>
        <DogTile Text = "Puppy 3"  img = "https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*"/>
        <DogTile Text = "Puppy 4" img = "https://static.theprint.in/wp-content/uploads/2022/11/Feature-Image-53.png"/>
         
      </section>
    </>
  );
}

export default App;
