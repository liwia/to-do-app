import React, { Component } from 'react'
import firebase from 'firebase'
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

class Auth extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }

    render() {
        return (
            this.state.user
                ? this.props.children
                : (
                    <div>
                        <SignInForm/>
                        <SignUpForm/>
                    </div>
                )
        )
    }
}

export default Auth