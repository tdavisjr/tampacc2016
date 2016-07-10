export class User extends React.Component {
    render() {
        return (
            <div className="col-md-1">
                <div className="center-block">
                    <div>
                        <a href={this.props.data.html_url} target="_blank">
                            <img src={this.props.data.avatar_url} className="img-circle"/>
                        </a>
                    </div>
                    <div>
                        <a href={this.props.data.html_url} target="_blank">{this.props.data.login}</a>
                    </div>        
                </div>
            </div>
        );
        
    }
}