import * as React from 'react';
import { connect } from 'react-redux';
import '../style/main-header.scss';

class MainHeader extends React.PureComponent {
    render() {
        return (
            <div id={'main-header'}>
                Main Header
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
)(MainHeader);
