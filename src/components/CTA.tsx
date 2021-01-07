import { Link as ChakraLink } from '@chakra-ui/react'
import { Container } from './Container'

export const CTA = (): JSX.Element => (
  <Container
    flexDirection='row'
    position='fixed'
    bottom='0'
    width='100%'
    py={2}
  >
    <ChakraLink
      isExternal
      textDecoration='none'
      href='https://github.com/rafifos/website'
      mx={2}
    >
      GitHub
    </ChakraLink>
  </Container>
)
