import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Link to={'/'}>Home</Link>
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
)(About);
