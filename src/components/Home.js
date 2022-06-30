

// import showAlert from 
import Notes from './Notes';

const Home = (props) => {
  const {showAlert}=props
  return (
    <div>
     
<Notes showAlert={showAlert}/>
        
    </div>
  )
}

export default Home