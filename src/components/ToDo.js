import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddItem from '../containers/AddItem';

export default class ToDo extends Component {
    constructor(){
        super();
        this.state = []
    }
    render() {
        return (
            <div>
                <br></br>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <AddItem></AddItem>
            </div>
        )
    }
}



