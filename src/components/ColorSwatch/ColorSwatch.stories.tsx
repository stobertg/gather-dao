import React from 'react'
import { SiteContainer, ColorSwatch } from '@components'
import { colors } from '../../theme/parts'

const story = {
  title: 'atoms/ColorSwatch',
  component: ColorSwatch,
  argTypes: {},
}
export default story

export const Primary = () => (
  <SiteContainer>
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
  </SiteContainer>
)

