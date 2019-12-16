import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Search from "./Componnents/Search/Search";
import ContactList from "./Componnents/ContactList/ContactList";
import NotFound from "./Componnents/NotFound/NotFound";
import MainMenu from "./Componnents/MainMenu/MainMenu";

class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Jack Sparrow",
        description: "Captain Jack Sparrow",
        avatar: 32,
        gender: "men",
        favorite: false
      },
      {
        id: 2,
        name: "Terminator",
        description: "Test ",
        avatar: 54,
        gender: "men",
        favorite: true
      },
      {
        id: 3,
        name: "Camilla Terry",
        description: "Super girl",
        avatar: 87,
        gender: "women",
        favorite: true
      },
      {
        id: 4,
        name: "Jasica Spinner",
        description: "Super girl2",
        avatar: 17,
        gender: "women",
        favorite: true
      },
      {
        id: 5,
        name: "Rodney Scinner",
        description: "Inisible man",
        avatar: 8,
        gender: "men",
        favorite: false
      }
    ]
  };

  onBtnFavorite = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const newFavorite = this.state.List.slice();
    newFavorite[index].favorite = !newFavorite[index].favorite;
    this.setState(() => {
      return {
        favorite: !this.newFavorite
      };
    });
  };

  onDelete = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    console.log("index => ", index);

    let newArr = [];
    let counter = 0;
    for (let i = 0; i < this.state.List.length; i++) {
      if (i !== index) {
        newArr[counter] = this.state.List[i];
        counter++;
      }
    }

    this.setState(() => {
      return {
        List: newArr
      };
    });
  };

  render() {
    return (
      <div className="container bootstrap snippet">
        <Router>
          <MainMenu></MainMenu>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <ContactList
                  ContactList={this.state.List}
                  onBtnFavorite={this.onBtnFavorite}
                  onDelete={this.onDelete}
                />
              )}
            ></Route>
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
