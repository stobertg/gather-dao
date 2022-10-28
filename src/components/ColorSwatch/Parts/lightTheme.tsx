import React from 'react'
import { Block, BlockItem, Heading, ColorSwatch } from '@components'
import { colors } from '../../../theme/parts'

// -------------- Typescript declarations -------------- //

interface ColorSwatchProps {

}

// ---------- This is the end of declarations ---------- //

export const ColorSwatchesLight = ({}) => {

  return(

    <>
      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Brand" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.indigo600, title: 'indigo', hexCode: colors.indigo600 },
              { color: colors.white200, title: 'warm white', hexCode: colors.white200 },
              { color: colors.white50, title: 'white', hexCode: colors.white50, border: true,  },
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Button" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.blue500, title: 'action', hexCode: colors.blue500 },
              { color: colors.blue600, title: 'hovered', hexCode: colors.blue600 },
              { color: colors.indigo100, title: 'disabled', hexCode: colors.indigo100 },
              { color: colors.red700, title: 'danger', hexCode: colors.red700 },
              { color: colors.white50, title: 'link', hexCode: colors.white50 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Text, Input &amp; Icon" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.indigo600, title: 'primary', hexCode: colors.indigo600 },
              { color: colors.indigo400, title: 'secondary', hexCode: colors.indigo400 },
              { color: colors.indigo200, title: 'disabled', hexCode: colors.indigo200 },
              { color: colors.red700, title: 'negative', hexCode: colors.red700 },
              { color: colors.peach800, title: 'warning', hexCode: colors.peach800 },
              { color: colors.green800, title: 'positive', hexCode: colors.green800 },
              { color: colors.blue500, title: 'link', hexCode: colors.blue500 },
              { color: colors.blue700, title: 'link hover', hexCode: colors.blue700 },
              { color: colors.white50, title: 'light', hexCode: colors.white50 }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Background" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            colorSwatches={[
              { color: colors.white50, title: 'Primary', hexCode: colors.white50 },
              { color: colors.indigo50, title: 'Secondary', hexCode: colors.indigo50 },
              { color: colors.indigo100, title: 'Tertiary', hexCode: colors.indigo100 },
              { color: colors.indigo100, title: 'Stroke/Divider', hexCode: colors.indigo100 },
              { color: colors.indigo700, title: 'Dark', hexCode: colors.indigo700 },
              { color: colors.blue100, title: 'Information', hexCode: colors.blue100, text: true },
              { color: colors.peach200, title: 'Warning', hexCode: colors.peach200, text: true },
              { color: colors.red200, title: 'Negative', hexCode: colors.red200, text: true },
              { color: colors.green200, title: 'Positive', hexCode: colors.green200, text: true }
            ]}
          />
        </BlockItem>
      </Block>

      <Block blockItemSpacing='l0'>
        <BlockItem><Heading bold title="Input" /></BlockItem>
        <BlockItem>
          <ColorSwatch 
            border
            colorSwatches={[
              { color: colors.indigo400, title: 'enabled', hexCode: colors.indigo400, text: true },
              { color: colors.indigo600, title: 'hovered', hexCode: colors.indigo600, text: true },
              { color: colors.indigo200, title: 'disabled', hexCode: colors.indigo200, text: true },
              { color: colors.red700, title: 'negative', hexCode: colors.red700, text: true },
              { color: colors.blue500, title: 'focused', hexCode: colors.blue500, text: true }
            ]}
          />
        </BlockItem>
      </Block>
    </>
    
  )
}
