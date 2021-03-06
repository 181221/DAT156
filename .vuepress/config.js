module.exports = {
  title: 'DAT156',
  base: '/DAT156/',
  description: 'Praksis i arbeidslivet for data @ stacc',
  themeConfig: {
    nav: [
      { text: 'Hjem', link: '/' },
      { text: 'GitHub', link: 'https://github.com/181192/DAT156' },
      { text: 'Stacc', link: 'https://stacc.com/' }
    ],
    sidebar: {
      '/': ['/uke6/', '/uke5/', '/uke4/', '/uke3/', '/uke2/', '/uke1/']
    },
    lastUpdated: 'Sist oppdatert',
    serviceWorker: {
      updatePopup: {
        message: 'Nytt innhold tilgjengelig.',
        buttonText: 'Oppdater'
      }
    }
  }
}
