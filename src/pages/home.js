import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.translate('home.page_title')}</h1>
                <Link to={'/about'}>{this.props.translate('about.page_title')}</Link>
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
)(Home);
