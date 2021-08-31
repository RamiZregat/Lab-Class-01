import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component{


  render(){
    return(
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item)=>{
            return(
              <HornedBeasts 
                title={item.title}
                alt={item.keyword}
                description={item.description}
                src={item.image_url}
                function={this.props.ModalFunction}
              />

            );})}
        </Row>

      </>
    );
  }
}

export default Main;
