module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    container: {
      padding: '2.5rem',
    },
    extend: {
      fontFamily : {
        poppins : ['Poppins']
      },
      fontWeight: {
        reguler: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        // main Color
        'main-color': '#00c100',
        mainColor2: '#0db14b',
        mainColor3: '#3f4040',
        mainColor4: '#ffffff',
        mainColor5: '#f7f8fa',
        mainColor6: '#E5E5E5',
        mainColor7: '#F7F8FA',
      
        // second Color
        secondColor: '#0d21b1',
        secondColor: '#b10d0d',
        secondColor: '#fdb900',
      
        /* SHADE AND TINT */
        Shade1Color: '#003a00',
        Shade1Color1: '#008700',
        Shade1Color2: '#00c100',
        Shade1Color3: '#008700',
        Shade1Color4: '#b3ecb3',
      
        Shade2Color: '#043516',
        Shade2Color1: '#097c35',
        Shade2Color2: '#0db14b',
        Shade2Color3: '#56c881',
        Shade2Color4: '#b6e8c9',
      
        Shade3Color: '#131313',
        Shade3Color1: '#2c2d2d',
        Shade3Color2: '#3f4040',
        Shade3Color3: '#797979',
        Shade3Color4: '#c5c6c6',
      },
    },
  },
  plugins: [],
}
