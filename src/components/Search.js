import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{

    state={
        searchText:'',
        apiUrl:'http://www.reddit.com/r/pics/.json?jsonp=',
        images:[]
    
    }

    onTextChange=(text)=>{

              this.setState({[text.target.name]:text.target.value});
              axios.get(
                  `${this.state.apiUrl}`
              )
              .then(res=>console.log(res.data))
              .catch(err=>console.log(err));
    };


    render(){
        // console.log(this.state );
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
              value={this.state.searchText}
              onChange={this.onTextChange}/>
        </div>

     </div>   
        );
    }
}
export default Search;  