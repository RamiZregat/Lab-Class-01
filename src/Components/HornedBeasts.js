import React from 'react'

class HornedBeasts extends React.Component{
    render(){
        return(
            <>
            <h2>Title: {this.props.title}</h2>
            <img src={this.props.src} alt={this.props.alt}></img>
            <p>Description: {this.props.description}</p>
            </>
        )
    }
}
export default HornedBeasts;