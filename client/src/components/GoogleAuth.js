import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {


    componentDidMount() {
        //gapi variable is avaliable on window scope
        //look at callback seccond argument function
        window.gapi.load('client:auth2', () => {
            //When call init it return a promisse
            window.gapi.client.init({
                clientId: '366855107415-sgikus75r8bb9437e52n3sphdevl32nd.apps.googleusercontent.com',
                scope: 'email'
            }).then( ()=> {//after success
                //figure out if user is signed in
                this.auth = window.gapi.auth2.getAuthInstance();
                
                //Look if is signed 
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // Arrow function making the context bound to component 
    // This function will be called when user auth status changes
    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }


    //Helper methods makes the code cleaner, descriptive functions
    onSignOutClick = () => {
        this.auth.signOut();
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    renderAuthButton() { 
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn === true){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>Sign Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon"></i>Sign In
                </button>
            );
        }
    }

    render (){
        return <div>{this.renderAuthButton()}</div>;
    };
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

//no map state to props, so null
export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);