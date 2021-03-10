module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/resume/'
        : '/',
    pages: {
        index: {
            entry: 'src/main.ts',
            title: 'Elizov Vadim Resume'
        },
    }
}