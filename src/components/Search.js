import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import Fuse from 'fuse.js'
class Search extends Component{

    state={
        searchText:'',
        apiUrl:'https://www.reddit.com/r/pics/.json?jsonp=',
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
                    marginLeft: 10,
                    marginTop:100,
                    fontSize:15}}>   
             <h1 class="ui header" >
            <img class="ui image" src="https://miro.medium.com/max/720/1*mQz1eSo1ZkL-Rufb5Xfrqw.png"  alt=""/>
                <div class="content" style={{color:'white'}}>
                    Reddit Image Gallery
                </div>
            </h1>
        <div className="ui label" style={{  
                fontSize:13
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
            <p></p>
            
        }
        
     </div>   
        );
    }
}
export default Search;  
