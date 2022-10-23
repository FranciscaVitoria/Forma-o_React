
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Pagina1 = (props) => {

  const navigate = useNavigate()

  const goToLogOut = () => {
    navigate ("/")
    props.parentCallbackLogOut(false)
    console.log(props)
  };

  return(
    <div style={{textAlign: "center"}}>
      <h1 style={{marginBottom:"100px"}}> Welcome Page1</h1>
      <button className="primary" onClick={goToLogOut}>LogOut</button>
    </div>
  )
}
    
export default Pagina1;



  