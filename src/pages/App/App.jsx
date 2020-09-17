import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import CatForm from '../CatForm/CatForm';
import CatsList from '../CatsList/CatsList';
import Login from "../Login/Login";
import Users from "../Users/Users";
import authService from "../../services/authService";
import "./App.css";
import * as catAPI from '../../services/cats-api'


class App extends Component {
  state = {
    cats: [],
    user: authService.getUser()
  };


  handleDeleteCat = async id => {
    if (authService.getUser()) {
      await catAPI.deleteOne(id);
      this.setState(state => ({
        cats: state.cats.filter(c => c._id !== id)
      }), () => this.props.history.push('/cats'));
    } else {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const cats = await catAPI.getAll();
    this.setState({ cats })
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddCat = async newCatData => {
    const newCat = await catAPI.create(newCatData);
    newCat.addedBy = { name: this.state.user.name, _id: this.state.user._id }
    console.log('test')
    this.setState(state => ({
      cats: [...state.cats, newCat]
    }), () => this.props.history.push('/cats'));
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/cats/add"
          render={() => 
            <CatForm
            handleAddCat = {this.handleAddCat}
            user={this.state.user}
             />
          }
        />
         <Route exact path='/cats' render={() =>
          <CatsList
            cats={this.state.cats}
            user={this.state.user}
          />
        } />
      </>
    );
  }
}
export default App;
