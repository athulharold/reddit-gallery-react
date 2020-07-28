import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class Gallery extends Component{

    constructor(props){
            super()
            this.state={
                clicked:false,
                imgSelected:{}
            }
    }
    temp=0;
    handleClick(image){
        this.setState({clicked:true, imgSelected:image});
    }
    render(){
    
        return(
        <div>
            {this.state.clicked===false?
            <Grid>   
            { this.props.Thumbs.map(function(image){
                        return (
                            <Grid.Column>  
                                <a href="#">
                                 <Image src={image} 
                                 
                                />
                                </a>
                                
                            </Grid.Column>    )
                    })   
            }
        </Grid>:
        <div>
        <Image src={this.state.imgSelected} />
        </div>
                }  

        </div>  
        );
    }
}
export default Gallery