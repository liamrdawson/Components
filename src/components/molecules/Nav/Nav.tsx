/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Text } from '../../atoms'
import { ITheme, defaultTheme } from '../../../themes'
import { baseNav, baseUl, baseLink, dynamicStyle } from './Nav.styles'

export interface NavProps {
  pages: Array<PageObject>
}

export interface PageObject {
  pathName: string
  pageName: string
}

export const Nav: React.FC<NavProps> = (props) => {
  const { pages } = props
  // const theme: ITheme = useTheme()
  const theme: ITheme = defaultTheme
  return (
    <nav css={baseNav}>
      <ul css={baseUl(theme)}>
        {pages.map((page: PageObject) => (
          <li key={pages.indexOf(page)}>
            <a css={baseLink} href={page.pathName}>
              <span css={baseLink}>
                <Text
                  additionalStyles={dynamicStyle(defaultTheme)}
                  element="p"
                  fontWeight="light"
                  fontSize="medium"
                >
                  {page.pageName}
                </Text>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
