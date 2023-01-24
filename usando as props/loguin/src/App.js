import Loguin from "./componets/loguin/Loguin";
import Evento from "./componets/Btn";
function App() {
  return (
    <div >
      <h3>Faça seu Loguin</h3>
      <Loguin label="Loguin: "/>
      <Loguin label="Senha: "/>
      <Evento/>
      
    </div>
  );
}

export default App;
