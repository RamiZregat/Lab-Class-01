import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VoteNumber: 0,
    };
  }

  incrementVoteNumber = () => {
    this.setState({
      VoteNumber: this.state.VoteNumber + 1,
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.src}
              alt={this.props.alt}
              onClick={this.incrementVoteNumber}
            />
            <Card.Body>
              <Card.Title>Title: {this.props.title}</Card.Title>
              <Card.Text>Description: {this.props.description}</Card.Text>
              <div>Number of Votes ❤️ : {this.state.VoteNumber}</div>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
