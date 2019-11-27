const path = require('path');

module.exports = {
    base: '/',
    dest: path.join(path.resolve(__dirname), '../public'),
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-146592251-2'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Lavra Response',
            description: 'Learn about Response and get started today!'
        }
    },
    themeConfig: {
        repo: 'lavrahq/response',
        docsRepo: 'lavrahq/response-docs',
        editLinks: true,
        locales: {
            '/': {
                label: 'English',
                selectText: '中文',
                editLinkText: 'Help us improve this page!',
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
                        link: '/admins/',
                    },
                    {
                        text: 'Developers',
                        link: '/developers/',
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
                    title: 'The Modules',
                    collapsable: false,
                    children: [],
                },
                {
                    title: 'Tutorials',
                    collapsable: false,
                    children: [],
                },
            ]
        },
    }
}