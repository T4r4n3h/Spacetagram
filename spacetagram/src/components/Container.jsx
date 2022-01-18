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

// copyright: "Lucy Yunxi Hu"
// date: "2022-01-18"
// explanation: "This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean."
// hdurl: "https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg"
// media_type: "image"
// service_version: "v1"
// title: "From Orion to the Southern Cross"
// url: "http
   