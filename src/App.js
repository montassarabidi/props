
import './App.css';
import FullName from './profile/FullName';
import Bio from './profile/Bio';
import HandleName from './profile/HandleName';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <FullName/>
     <Bio/>
     <HandleName/>
    
      <ul class="cards">

    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="mm.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Montassar Abidi</h3>            
            <span class="card__status">Gafsa</span>
          </div>
        </div>
        <p class="card__description">Nostalgie What A Feeling!</p>
      </div>
    </a>      
</ul>

<button class="oo">
<td
  onClick={() =>
    window.open(
      "https://www.youtube.com/"
    )
  }
>
</td>
</button>

      </header>
    </div>
  );
}

export default App;
