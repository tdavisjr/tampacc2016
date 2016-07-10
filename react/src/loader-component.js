export class Loader extends React.Component {
    render() {
        return (
            <div className={this.props.isLoading ? "" : "hidden" + " row"}>
                <div className="col-md-2 col-md-offset-5 well well-lg bg-info">
                    <span className="glyphicon glyphicon-refresh"></span>
                    Loading...
                </div>
            </div>           
        );
    }
}