import React,{useState, useEffect} from 'react'
import Cards from './Cards'




class Container extends React.Component {

        state = {
        data:[]
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=ir8rStbc5q2MqEw8LIHiXoFWWAdb6gIMkpTr4Xiu')
        
        .then(response => {
            if (!response.ok) {
              throw Error("Error fetching the pictures")
            }
            return response.json()
          .then(data => {
            this.setState({data: data});
            console.log({data})
          }                    
          )
          .catch(err => {
            throw Error(err.message);
          });
        });
      }            
      render() {
          
          return (
              <div className="container mx-auto border">
                 



                <Cards 
                date={this.state.data.date}  
                img ={this.state.data.url} 
                title={this.state.data.title} 
                desc={this.state.data.explanation}
                />
                
            </div>
        )
    }
}


export default Container
   