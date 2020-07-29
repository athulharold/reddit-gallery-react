import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import "./Gallery.css";

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={
            clicked:false,
            title:"",
            imageUrl:"",
            author:"",
            thumbnail:"",
            
            }

        
    } 
 

    handleClick= async (Title,Author,Image,Thumbnail)=>{
        console.log("Image Clicked");
        await this.setState({title:Title, author:Author,clicked:true,thumbnail:Thumbnail,imageUrl:Image});
        console.log(this.state.imageUrl );

    }
    render(){
        return(
            
        <div>
            {this.state.clicked===false && this.props.ImgData?
            <Grid >   
                    <br/>
                    <br/>
                    { this.props.ImgData.map((image)=>{
                                return (
                    
                                    <Grid.Column>  
                                        <br/>
                                        <br/>
                                        <a href="#">
                                        <Image src={image.item.data.thumbnail} onClick={()=>
                                                        {  
                                                            if(image.item.data.thumbnail){
                                                                this.handleClick(image.item.data.title,
                                                                    image.item.data.author,
                                                                    image.item.data.url,
                                                                    image.item.data.thumbnail,
                                                                    )
                                                            }
                                                            
                        } }
                                        /> 
                                        <div className="ui label">{image.item.data.title }</div>
                                    
                                        </a>
                                        
                                    </Grid.Column>    )
                            })   
                    }
             </Grid>:
                    <Grid style={{color:"white", backgroundColor: "black"}}>
                        <Grid.Row >
                            <Grid.Column>
                                <br/>
                              {/* <Image src={this.state.imageUrl} alt="Original image cannot be displayed: 403 Forbidden error" />     */}
                              <img class="ui centered image large" src={this.state.imageUrl} alt=""/> 
                              {/* The thumbnail is added because the original image cannot be displayed due to 403 error                                */}
                              <Grid>
                                  <Grid.Row>
                                      <Grid.Column>
                                             <br/>
                                             <br/>
                                             <h2>{this.state.title}</h2>
                                             <h3>Author: {this.state.author}</h3>
                                    
                                      </Grid.Column>
                                  </Grid.Row>
                             </Grid>  
                             <br/>
                             <br/>
                             <button className="ui secondary button" onClick={()=>{this.setState({clicked:false})}}>
                                    Go Back
                                </button>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            }  

        </div>  
        );
    }
}
export default Gallery
