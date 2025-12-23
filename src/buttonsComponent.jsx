import {useContext} from 'react';
import {AddNowTodoContext} from './contexts/addNowTodoContext.jsx';
import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
export default function ButtonsComponent({combleted,id,text,date,timeFinished,timeNeeded}){
    const {completeTodo, deleteTodo,handleIsEditChange,handleIndexEditChange,setReadyValue,handleDeleteWorningChange,handleSetDeleteWorningId} = useContext(AddNowTodoContext);
    return(
        <div className="todo-item-buttons">
          {timeFinished !== undefined && combleted ?
       <span className='dataContaner' style={{letterSpacing:"1px"}}>(finished  {timeFinished?`at ${timeFinished} day ago `:"today"})</span>
        : null}
          {timeNeeded !== undefined && combleted ?
       <span className='dataContaner' style={{letterSpacing:"1px"}}> time you needed to finish  {timeNeeded} days</span>
        : null}
         <span className='dataContaner'>{date}</span>
      <IconButton aria-label="fingerprint" color="error" onClick={() =>{ handleSetDeleteWorningId(id); handleDeleteWorningChange();}} >
        <RemoveCircleIcon  />
      </IconButton> 
      {combleted === 1 ? null :
      <>    
       <IconButton aria-label="fingerprint" color="primary" onClick={() => {handleIsEditChange(); handleIndexEditChange(id);setReadyValue(text);}} >
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success" onClick={() => completeTodo(id)}>
        <CheckCircleOutlineOutlinedIcon  />
      </IconButton>
      </>     
      }
      </div>
    )
}
