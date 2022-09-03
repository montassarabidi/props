
import './App.css';
import FullName from './profile/FullName';
import Bio from './profile/Bio';
import HandleName from './profile/HandleName';
function App() {
  const open = (x) => alert(`Thank You for subscribe`);
  return (
    <div className="App">
      <header className="App-header">
     <FullName>
     <ul class="cards">
<h3>
     <a href="" class="Card">
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
        
       </div>
     </a>  
     </h3>    
 </ul>
 </FullName>
     <Bio>
     <div>
     <p class="card__description">Nostalgie What A Feeling!</p>
     </div>
     </Bio>
     <HandleName  open={open}>
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
</HandleName>
    
     



      </header>
    </div>
  );
}

export default App;
