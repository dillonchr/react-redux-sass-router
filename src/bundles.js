const HomeTest = {
    path: '/',
    sidebarTitle: 'Home',
    roles: ['ROLE_USER'],
    render: () => import('./pages/home')
};

const AboutTest = {
    path: '/about',
    sidebarTitle: 'About',
    roles: ['ROLE_ABOUT'],
    render: () => import('./pages/about')
};

export const bundles = [HomeTest, AboutTest];
