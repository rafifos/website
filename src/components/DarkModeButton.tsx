import { Button, useColorMode } from '@chakra-ui/react'

export const DarkModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Button position='fixed' top='1rem' right='1rem' onClick={toggleColorMode}>
      Toggle {isDark ? 'Light' : 'Dark'}
    </Button>
  )
}
