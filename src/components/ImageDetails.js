import React, { Component } from 'react';
import history from './../history';

class ImageDetails extends Component{

    constructor(props){
            super()
    }

    render(){
        console.log("Testing in Imagedetials:" + history.location.state.data)
        return(
            <h1>Dunno</h1>

        );
    }
}
export default ImageDetails