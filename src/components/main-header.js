import * as React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import '../style/main-header.scss';

class MainHeader extends React.PureComponent {
    render() {
        return (
            <div id={'main-header'}>
                {this.props.translate('app.title')}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        translate: getTranslate(state.locale)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeader);
