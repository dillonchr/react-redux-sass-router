import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bundles } from '../bundles';
import '../style/sidebar.scss';

class Sidebar extends React.PureComponent {
    renderLinks() {
        return bundles.map((b, i) => {
            return (
                <li key={i}>
                    <NavLink exact={true} to={b.path} activeClassName={'sidebar-active'}>
                        {b.sidebarTitle}
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <div id={'sidebar'}>
                <ul>
                    {this.renderLinks()}
                </ul>
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
)(Sidebar);
