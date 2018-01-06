import React from 'react';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bundles } from './bundles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BundleComponent from './components/bundle';
import MainHeader from './components/main-header';

const SidebarWithRouter = withRouter(Sidebar);

class App extends React.PureComponent {
    renderBundle() {
        return bundles.map((b, i) => {
            const comp = (props) => (
                <BundleComponent load={b.render}>
                    {(Page) => <Page {...props}/>}
                </BundleComponent>
            );

            return <Route key={i} exact={true} path={b.path} component={comp}/>;
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <SidebarWithRouter/>
                    <div id={'main-content'}>
                        <MainHeader/>
                        {this.renderBundle()}
                    </div>
                </div>
            </Router>
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
)(App);
