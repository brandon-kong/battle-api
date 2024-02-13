import localFont from 'next/font/local';

const GeneralSans = localFont({
    src: './ttf/GeneralSans-Variable.ttf',
    display: 'swap',
    variable: '--font-general-sans'
})

export { GeneralSans }