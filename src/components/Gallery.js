import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={
            clicked:false,
            title:"",
            imageUrl:"",
            author:"",
            thumbnail:""
            
            }

        
    } 
 

    handleClick= async (Title,Author,Image,Thumbnail)=>{
        console.log("Image Clicked");
        this.setState({title:Title, author:Author,clicked:true,thumbnail:Thumbnail});
        await this.setState({imageUrl:Image});
        console.log(this.state.imageUrl );

    }
    render(){
        return(
            
        <div>
            {this.state.clicked===false && this.props.ImgData?
            <Grid>   
                    { this.props.ImgData.map((image)=>{
                                return (
                    
                                    <Grid.Column>  
                                        <a href="#">
                                        <Image src={image.item.data.thumbnail} onClick={()=>
                                                        {   console.log(image.item.data.preview.images[0].source.url)
                                                            this.handleClick(image.item.data.title,
                                                                            image.item.data.author,
                                                                            image.item.data.preview.images[0].source.url,
                                                                            image.item.data.thumbnail) } }
                                        /> 
                                        <div className="ui label">{image.item.data.title }</div>
                                    
                                        </a>
                                        
                                    </Grid.Column>    )
                            })   
                    }
             </Grid>:
                    <Grid style={{color:"black"}}>
                        <Grid.Row>
                            <Grid.Column>
                                <br/>
                              <Image src={this.state.imageUrl} alt="Original image cannot be displayed: 403 Forbidden error" />    
                              <br/>
                              <br/>
                              <Image src={this.state.thumbnail} /> 
                              {/* The thumbnail is added because the original image cannot be displayed due to 403 error                                */}
                              <h1>Title:{this.state.title}</h1>
                              <h2>Author:{this.state.author}</h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                                <button class="ui secondary button" onClick={()=>{this.setState({clicked:false})}}>
                                    Go Back
                                </button>
                        </Grid.Row>
                    </Grid>
            }  

        </div>  
        );
    }
}
export default Gallery
