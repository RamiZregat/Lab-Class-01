import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data.json';

class Main extends React.Component{
  render(){
    return(
      <>
        <Row xs={1} md={3} className="g-4">
          {data.map((item)=>{
            return(
              <HornedBeasts
                title={item.title}
                alt={item.keyword}
                description={item.description}
                src={item.image_url}
              />

            );})}
        </Row>

      </>
    );
  }
}

export default Main;
