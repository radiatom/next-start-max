import { experimental_extendTheme as createTheme } from '@mui/material/styles'

import { avatar } from '@/packages/material-ui/theme/components/avatar'
import { badge } from '@/packages/material-ui/theme/components/badge'
import { colorSchema } from '@/packages/material-ui/theme/components/color-schema'
import { dialog } from '@/packages/material-ui/theme/components/dialog'
import { drawer } from '@/packages/material-ui/theme/components/drawer'
import { pagination } from '@/packages/material-ui/theme/components/pagination'
import { tooltip } from '@/packages/material-ui/theme/components/tooltip'

import { button } from './components/button'
import { input } from './components/input'
import { menu } from './components/menu'
import { select } from './components/select'

// theme
const Theme = createTheme({
  ...colorSchema,
  typography: {
    fontFamily: 'inherit',
    fontSize: 22.4,
  },
  components: {
    ...button,
    ...input,
    ...select,
    ...menu,
    ...dialog,
    ...pagination,
    ...tooltip,
    ...avatar,
    ...drawer,
    ...badge,
  },
})

export default Theme
