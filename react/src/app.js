import {Loader} from "./loader-component.js";
import {UserList} from "./userlist-component.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: [], loaded: false};
    }
    componentWillMount(){
        this._fetchUsers();
    }  
    
    _fetchUsers(){       
        window.fetch('https://api.github.com/users')
            .then(function(response) {
                return response.json()
            })
            .then((data) => {
                this.setState({users: data, loaded: true});
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            });             
    }
      
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>GitHub First 100</h1>
                </div>   
                <Loader isLoading={ !this.state.loaded }/>  
                <UserList users={this.state.users} />
            </div>     
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));