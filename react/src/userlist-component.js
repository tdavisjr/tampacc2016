import {User} from "./user-component.js";

export class UserList extends React.Component {
    render() {
        return (
            <div>
            {this.props.users.map(user => <User key={user.login} data={user} />)}
            </div>
        );
        
    }
}