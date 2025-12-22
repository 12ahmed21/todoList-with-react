import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from "react";
import { Link } from 'react-router-dom';
export default function NavBar
() {
    return (        
        <div>
            <ButtonGroup variant='text'>
                <Link to='/'>
                    <Button >All</Button>
                </Link>
                <Link to='/active'>
                    <Button>Active</Button>
                </Link>
                <Link to='/completed'>
                    <Button >Completed</Button>
                </Link>
            </ButtonGroup>
        </div>
        )
}