import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./Components/Data.json";
import SelectedBeast from "./Components/SelectedBeast ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalForm: {},
      handleshow: false,
    };
  }
  handleCloseFunction = () => {
    this.setState({
      handleshow: false,
    });
  };

  ModalFunction = (Title) => {
    let ModalArray = data.find((item) => {
      if (item.title === Title) {
        console.log(item);
        return item;
      }
    });
    this.setState({
      ModalForm: ModalArray,
      handleshow: true,
    });
    console.log(this.state.ModalForm);
  };
  render() {
    console.log(this.state.handleshow);
    return (
      <>
        <SelectedBeast
          handleshow={this.state.handleshow}
          title={this.state.ModalForm.title}
          alt={this.state.ModalForm.keyword}
          description={this.state.ModalForm.description}
          src={this.state.ModalForm.image_url}
          handleClose={this.handleCloseFunction}
        />
        <Header />
        <Main data={data} ModalFunction={this.ModalFunction} />
        <Footer />
      </>
    );
  }
}

export default App;
