import React from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FilteredData: "all",
    };
  }

  FilterFunction = (e) => {
    this.setState({
      FilteredData: e.target.value,
    });
  };

  render() {
    let FilteredArray = this.props.data.map((item) => {
      if (`${item.horns}` === this.state.FilteredData) {
        return (
          <HornedBeasts
            title={item.title}
            alt={item.keyword}
            description={item.description}
            src={item.image_url}
            function={this.props.ModalFunction}
          />
        );
      } else if (this.state.FilteredData === "all") {
        return (
          <HornedBeasts
            title={item.title}
            alt={item.keyword}
            description={item.description}
            src={item.image_url}
            function={this.props.ModalFunction}
          />
        );
      }
    });
    return (
      <>
        <Form.Control
          as="select"
          aria-label="Default select example"
          name="HornNumber"
          onChange={(e) => {
            this.FilterFunction(e);
          }}
        >
          <option value="all">Choose the horn number</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Wow!</option>
        </Form.Control>
        <Row xs={1} md={3} className="g-4">
          {FilteredArray}
          {/* {this.props.data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                alt={item.keyword}
                description={item.description}
                src={item.image_url}
                function={this.props.ModalFunction}
              />
            );
          })} */}
        </Row>
      </>
    );
  }
}

export default Main;
