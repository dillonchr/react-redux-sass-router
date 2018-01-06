import React from 'react';
import { connect } from 'react-redux';

class Bundle extends React.Component {
    state = {
        mod: null
    };

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props) {
        this.setState({mod: null});

        props
            .load()
            .then(mod => this.setState({mod: mod.default ? mod.default : mod}));
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
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
)(Bundle);
