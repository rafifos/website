import { Head } from 'next/head'

import { CTA } from '@components/CTA'
import { Container } from '@components/Container'
import { DarkModeButton } from '@components/DarkModeButton'
import { Footer } from '@components/Footer'
import { Hero } from '@components/Hero'

const Index = (): JSX.Element => (
  <Container height='100vh'>
    <Head>
      <title>Coming soon</title>
    </Head>
    <DarkModeButton />
    <Hero title='Coming soon' />
    <Footer />
    <CTA />
  </Container>
)

export default Index
