const path = require('path');

module.exports = {
    base: '/',
    dest: path.join(path.resolve(__dirname), '../public'),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Response Docs',
            description: 'Documentation for the Lavra Response project.'
        }
    },
    themeConfig: {
        repo: 'lavrahq/response-docs',
        editLinks: true,
        locales: {
            '/': {
                label: 'English',
                selectText: '中文',
                editLinkText: 'Edit this page on GitHub',
                nav: [
                    {
                        text: 'Home',
                        link: '/home'
                    },
                    {
                        text: 'Users',
                        link: '/users/',
                    },
                    {
                        text: 'Admins',
                        link: '/admins',
                    },
                    {
                        text: 'Developers',
                        link: '/developers',
                    },
                    {
                        text: 'Discord',
                        link: 'https://discord.gg/64UMVWc',
                    },
                ],
            },
        },
        sidebar: {
            '/users/': [
                {
                    title: 'Getting started',
                    collapsable: false,
                    children: [
                        'FAQ',
                    ],
                },
                {
                    title: 'Modules',
                    collapsable: false,
                    children: ['tutorials/redirects', 'tutorials/prefetch-and-state-transfer', 'tutorials/third-party', 'tutorials/deploy-with-firebase'],
                },
                {
                    title: 'Tutorials',
                    collapsable: false,
                    children: ['tutorials/redirects', 'tutorials/prefetch-and-state-transfer', 'tutorials/third-party', 'tutorials/deploy-with-firebase'],
                },
            ]
        },
    },
}