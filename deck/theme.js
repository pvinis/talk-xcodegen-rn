import { accent, background, text } from './colors'


const font = 'Iosevka Web'

export const myTheme = {
    fonts: {
        heading: font,
        body: font,
    },
    colors: {
        text,
        background,
		accent,
    },
    styles: {
        root: {
            fontWeight: 300, // light
        },
        h1: {
            color: accent,
            fontWeight: 700, // bold
        },
        h2: {
            color: accent,
            fontWeight: 300, // light
            marginTop: 0,
        },
        h3: {
            fontWeight: 300, // light
            marginTop: 0,
        },
        h4: {
            fontWeight: 300, // light
            marginTop: 0,
        },
        inlineCode: {
            color: accent,
			fontFamily: font,
        },
        code: {
            color: accent,
            fontSize: '30px',
        },
        a: {
            color: accent,
        },
        p: {
            textAlign: 'center',
		},
    },
}
