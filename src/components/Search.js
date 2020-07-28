import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react';
import Gallery from './Gallery';

class Search extends Component{

    state={
        searchText:'',
        apiUrl:'http://www.reddit.com/r/pics/.json?jsonp=',
        callData: {}, 
        thumbnails: []
    }

    componentDidMount= async () =>{  
        let result=await (await axios.get(`${this.state.apiUrl}`)).data.data
        let thumbnailArray=[]
        for(var i=0;i<result.dist;i++){
            if(result.children[i].data.thumbnail!=="self"){
                thumbnailArray.push(result.children[i].data.thumbnail)
            }
            
        }
         this.setState({thumbnails:thumbnailArray,
                        callData:result});

    }

    onTextChange=(text)=>{
            
        this.setState({[text.target.name]:text.target.value});



    }


    render(){
        console.log(this.state.callData)
        return(

          <div style={{
                    color:'white',
                    marginLeft: 100,
                    marginTop:100,
                    fontSize:30}}>   
        <div className="ui label" style={{  
                fontSize:15
        }}>
            Search for an image
        </div>   
        <div className="ui input">
            <input type="text" 
              placeholder="Search..." 
              name="searchText"
              onChange={this.onTextChange}
              value={this.state.searchText}
              />
        </div>

        {/* <Grid>      
                { this.state.thumbnails.map(function(image){
                            return (
                                <Grid.Column>  
                                    <a href="#">
                                     <Image src={image} onClick=
                                     {()=>  history.push({pathname:'/details',state:  }) } />
                                    </a>
                                    
                                </Grid.Column>    )
                        })   
                }
                
        </Grid> */}
        <Gallery ImgData={this.state.callData} Thumbs={this.state.thumbnails}/>
     </div>   
        );
    }
}
export default Search;  
