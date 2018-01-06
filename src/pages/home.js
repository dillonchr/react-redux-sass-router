import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to={'/about'}>About</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
