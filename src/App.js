import Bill from './Context/Bill'
import Items from './Context/Items'

function App() {
  return (
    <div  >
<Items name={"pizza"} price={250}/>
<Items name={"pav-bhaji"} price={100}/>
  <Bill/>
    </div>
  );
}

export default App;
