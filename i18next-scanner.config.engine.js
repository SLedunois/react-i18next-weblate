module.exports = {
    options: {
        debug: true,
        // read strings from functions: IllegalMoveError('KEY') or t('KEY')
        func: {
            list: ['t'],
            extensions: ['.js'],
        },

        trans: false,

        // Create and update files `en.json`, `fr.json`, `es.json`
        lngs: ['en', 'fr'],

        ns: [
            // The namespace I use
            'translation',
        ],

        defaultLng: 'en',
        defaultNs: 'translation',

        // Put a blank string as initial translation
        // (useful for Weblate be marked as 'not yet translated', see later)
        defaultValue: (lng, ns, key) => '',

        // Location of translation files
        resource: {
            loadPath: 'src/i18n/{{lng}}.json',
            savePath: 'src/i18n/{{lng}}.json',
            jsonIndent: 4,
        },

        nsSeparator: ':',
        keySeparator: '.',
    },
};