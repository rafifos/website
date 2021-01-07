import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }): JSX.Element => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Heading
      as='h1'
      size='4xl'
      isTruncated
      overflow='visible'
      fontFamily='mono'
    >
      {title}
    </Heading>
  </Flex>
)
