import React from 'react';

class GoogleAuth extends React.Component {

    //initialize state
    state = { isSignedIn : null };

   

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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // Arrow function making the context bound to component 
    // This function will be called when user auth status changes
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }


    //Helper methods makes the code cleaner 
    onSignOut = () => {
        this.auth.signOut();
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    renderAuthButton() {

        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn === true){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"></i>Sign Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignIn} className="ui green google button">
                    <i className="google icon"></i>Sign In
                </button>
            );
        }
    }

    render (){
        return <div>{this.renderAuthButton()}</div>;
    };
};

export default GoogleAuth;