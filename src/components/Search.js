import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react';
import Gallery from './Gallery';
import Fuse from 'fuse.js'
class Search extends Component{

    state={
        searchText:'',
        apiUrl:'http://www.reddit.com/r/pics/.json?jsonp=',
        callData: {}, 
        arrived:false
    }


    onTextChange=async (text)=>{

        let temp={}
        this.setState({[text.target.name]:text.target.value});
        let result= (await axios.get(`${this.state.apiUrl}`)).data.data

            const options = {
                includeScore: true,
                keys: ['data.title']
            }
            const fuse = new Fuse(result.children, options)
            const output = fuse.search(this.state.searchText)
            temp=output
            this.setState({callData:temp,arrived:true})

        }

    render(){
        
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

        {
            this.state.arrived?
            <Gallery ImgData={this.state.callData}/>
            : 
            <p>Loading...</p>
            
        }
        
     </div>   
        );
    }
}
export default Search;  
