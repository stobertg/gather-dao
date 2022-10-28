import React from 'react'
import { Block, BlockItem, Heading, ColorSwatch } from '@components'
import { colors } from '../../theme/parts'

// -------------- Typescript declarations -------------- //

interface ColorSwatchProps {

}

// ---------- This is the end of declarations ---------- //

export const ColorSwatchList = () => {

  return(

    <>
      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Indigo" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.indigo50, title: 'indigo50', hexCode: colors.indigo50 },
              { color: colors.indigo100, title: 'indigo100', hexCode: colors.indigo100 },
              { color: colors.indigo200, title: 'indigo200', hexCode: colors.indigo200 },
              { color: colors.indigo300, title: 'indigo300', hexCode: colors.indigo300 },
              { color: colors.indigo400, title: 'indigo400', hexCode: colors.indigo400 },
              { color: colors.indigo500, title: 'indigo500', hexCode: colors.indigo500 },
              { color: colors.indigo600, title: 'indigo600', hexCode: colors.indigo600 },
              { color: colors.indigo700, title: 'indigo700', hexCode: colors.indigo700 },
              { color: colors.indigo800, title: 'indigo800', hexCode: colors.indigo800 },
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Gray" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.gray50, title: 'gray50', hexCode: colors.gray50 },
              { color: colors.gray100, title: 'gray100', hexCode: colors.gray100 },
              { color: colors.gray200, title: 'gray200', hexCode: colors.gray200 },
              { color: colors.gray300, title: 'gray300', hexCode: colors.gray300 },
              { color: colors.gray400, title: 'gray400', hexCode: colors.gray400 },
              { color: colors.gray500, title: 'gray500', hexCode: colors.gray500 },
              { color: colors.gray600, title: 'gray600', hexCode: colors.gray600 },
              { color: colors.gray700, title: 'gray700', hexCode: colors.gray700 },
              { color: colors.gray800, title: 'gray800', hexCode: colors.gray800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Blue" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.blue50, title: 'blue50', hexCode: colors.blue50 },
              { color: colors.blue100, title: 'blue100', hexCode: colors.blue100 },
              { color: colors.blue200, title: 'blue200', hexCode: colors.blue200 },
              { color: colors.blue300, title: 'blue300', hexCode: colors.blue300 },
              { color: colors.blue400, title: 'blue400', hexCode: colors.blue400 },
              { color: colors.blue500, title: 'blue500', hexCode: colors.blue500 },
              { color: colors.blue600, title: 'blue600', hexCode: colors.blue600 },
              { color: colors.blue700, title: 'blue700', hexCode: colors.blue700 },
              { color: colors.blue800, title: 'blue800', hexCode: colors.blue800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Light Blue" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.lightBlue50, title: 'light blue50', hexCode: colors.lightBlue50 },
              { color: colors.lightBlue100, title: 'light blue100', hexCode: colors.lightBlue100 },
              { color: colors.lightBlue200, title: 'light blue200', hexCode: colors.lightBlue200 },
              { color: colors.lightBlue300, title: 'light blue300', hexCode: colors.lightBlue300 },
              { color: colors.lightBlue400, title: 'light blue400', hexCode: colors.lightBlue400 },
              { color: colors.lightBlue500, title: 'light blue500', hexCode: colors.lightBlue500 },
              { color: colors.lightBlue600, title: 'light blue600', hexCode: colors.lightBlue600 },
              { color: colors.lightBlue700, title: 'light blue700', hexCode: colors.lightBlue700 },
              { color: colors.lightBlue800, title: 'light blue800', hexCode: colors.lightBlue800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Cyan" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.cyan50, title: 'cyan50', hexCode: colors.cyan50 },
              { color: colors.cyan100, title: 'cyan100', hexCode: colors.cyan100 },
              { color: colors.cyan200, title: 'cyan200', hexCode: colors.cyan200 },
              { color: colors.cyan300, title: 'cyan300', hexCode: colors.cyan300 },
              { color: colors.cyan400, title: 'cyan400', hexCode: colors.cyan400 },
              { color: colors.cyan500, title: 'cyan500', hexCode: colors.cyan500 },
              { color: colors.cyan600, title: 'cyan600', hexCode: colors.cyan600 },
              { color: colors.cyan700, title: 'cyan700', hexCode: colors.cyan700 },
              { color: colors.cyan800, title: 'cyan800', hexCode: colors.cyan800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Green" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.green50, title: 'green50', hexCode: colors.green50 },
              { color: colors.green100, title: 'green100', hexCode: colors.green100 },
              { color: colors.green200, title: 'green200', hexCode: colors.green200 },
              { color: colors.green300, title: 'green300', hexCode: colors.green300 },
              { color: colors.green400, title: 'green400', hexCode: colors.green400 },
              { color: colors.green500, title: 'green500', hexCode: colors.green500 },
              { color: colors.green600, title: 'green600', hexCode: colors.green600 },
              { color: colors.green700, title: 'green700', hexCode: colors.green700 },
              { color: colors.green800, title: 'green800', hexCode: colors.green800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Yellow" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.yellow50, title: 'yellow50', hexCode: colors.yellow50 },
              { color: colors.yellow100, title: 'yellow100', hexCode: colors.yellow100 },
              { color: colors.yellow200, title: 'yellow200', hexCode: colors.yellow200 },
              { color: colors.yellow300, title: 'yellow300', hexCode: colors.yellow300 },
              { color: colors.yellow400, title: 'yellow400', hexCode: colors.yellow400 },
              { color: colors.yellow500, title: 'yellow500', hexCode: colors.yellow500 },
              { color: colors.yellow600, title: 'yellow600', hexCode: colors.yellow600 },
              { color: colors.yellow700, title: 'yellow700', hexCode: colors.yellow700 },
              { color: colors.yellow800, title: 'yellow800', hexCode: colors.yellow800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Peach" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.peach50, title: 'peach50', hexCode: colors.peach50 },
              { color: colors.peach100, title: 'peach100', hexCode: colors.peach100 },
              { color: colors.peach200, title: 'peach200', hexCode: colors.peach200 },
              { color: colors.peach300, title: 'peach300', hexCode: colors.peach300 },
              { color: colors.peach400, title: 'peach400', hexCode: colors.peach400 },
              { color: colors.peach500, title: 'peach500', hexCode: colors.peach500 },
              { color: colors.peach600, title: 'peach600', hexCode: colors.peach600 },
              { color: colors.peach700, title: 'peach700', hexCode: colors.peach700 },
              { color: colors.peach800, title: 'peach800', hexCode: colors.peach800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Red" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.red50, title: 'red50', hexCode: colors.red50 },
              { color: colors.red100, title: 'red100', hexCode: colors.red100 },
              { color: colors.red200, title: 'red200', hexCode: colors.red200 },
              { color: colors.red300, title: 'red300', hexCode: colors.red300 },
              { color: colors.red400, title: 'red400', hexCode: colors.red400 },
              { color: colors.red500, title: 'red500', hexCode: colors.red500 },
              { color: colors.red600, title: 'red600', hexCode: colors.red600 },
              { color: colors.red700, title: 'red700', hexCode: colors.red700 },
              { color: colors.red800, title: 'red800', hexCode: colors.red800 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Pink" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.pink50, title: 'pink50', hexCode: colors.pink50 },
              { color: colors.pink100, title: 'pink100', hexCode: colors.pink100 },
              { color: colors.pink200, title: 'pink200', hexCode: colors.pink200 },
              { color: colors.pink300, title: 'pink300', hexCode: colors.pink300 },
              { color: colors.pink400, title: 'pink400', hexCode: colors.pink400 },
              { color: colors.pink500, title: 'pink500', hexCode: colors.pink500 },
              { color: colors.pink600, title: 'pink600', hexCode: colors.pink600 },
              { color: colors.pink700, title: 'pink700', hexCode: colors.pink700 },
              { color: colors.pink800, title: 'pink800', hexCode: colors.pink800 }
            ]}
          />
        </BlockItem>
      </Block>
    </>
    
  )
}
