module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'lucxsm',
          name: 'flashlife',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
  packagerConfig: {
    icon: './img/icon' // no file extension required
  },
  rebuildConfig: {
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://ucp.flashrp.de/assets/img/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './img/icon.ico',
        authors: 'l.#2940',
        description: 'FlashLife Launcher',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
