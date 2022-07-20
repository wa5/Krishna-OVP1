import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
const Blogo:React.FC=()=>{
    let navigate = useNavigate();
    return (<>
    <Button variant="contained" color="error" onClick={()=>{navigate('/')}} startIcon={<OndemandVideoIcon/>}>
    Video PlatForm
      </Button>
    </>)
}
export default Blogo