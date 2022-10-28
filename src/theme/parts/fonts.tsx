
// For the typeface used in all Forma products, which is Labil Grotesk
// https://www.kometa.xyz/typefaces/labil-grotesk/

export const Typeface = [
  {
    fontFamily: 'Satoshi-Black',
    src: 'local("Satoshi-Black"), url("/fonts/Satoshi-Black.woff2")',
  },
  {
    fontFamily: 'Satoshi-Bold',
    src: 'local("Satoshi-Bold"), url("/fonts/Satoshi-Bold.woff2")',
  },
  {
    fontFamily: 'Satoshi-Italic',
    src: 'local("Satoshi-Italic"), url("/fonts/Satoshi-Italic.woff2")',
  },
  {
    fontFamily: 'Satoshi-Regular',
    src: 'local("Satoshi-Regular"), url("/fonts/Satoshi-Regular.woff2")',
  },
  {
    fontFamily: 'Source-Serif-4',
    src: 'local("Source-Serif-4"), url("/fonts/SourceSerif4.ttf")',
  },
  {
    fontFamily: 'code',
    src: 'local("Labil-Regular-Italic"), url("/fonts/SourceCodePro-Regular.ttf")',
  }
]

export const fonts = {
  sansSerif: 'Satoshi-Regular',
  sansSerifItalic: 'Satoshi-Italic',
  sansSerifBold: 'Satoshi-Bold',
  sansSerifHeavy: 'Satoshi-Black',
  serif: 'Source-Serif-4',
  code: 'code'
}

export const fontSizes = {
  s0: '0.75rem', // 12px
  s1: '0.875rem', // 14px
  s2: '1.0625rem', // 17px
  s3: '1.375rem', // 22px
  s4: '1.5rem', // 24px
  s5: '1.75rem', // 28px
  s6: '2rem', // 32px
  s7: '2.25rem', // 36px
  s8: '2.75rem', // 44px
  s9: '3.5rem', // 56px
  s10: '4rem' // 64px
}