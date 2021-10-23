module.exports = {
  siteName: 'Bugloft Admin',
  copyright: 'Bugloft © 2021',
  logoPath: '/images/logo.png',
  // apiPrefix: '/api/v1',
  apiPrefix: '/api',
  fixedHeader: true,
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en))*\/login/],
    },
  ],

  i18n: {
    languages: [
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
    ],
    defaultLanguage: 'en',
  },
}
