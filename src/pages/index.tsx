import { Container } from '../components/Container'
import { CTA } from '../components/CTA'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'

const Index = (): JSX.Element => (
  <Container height='100vh'>
    <DarkModeSwitch />
    <Hero title='Coming soon' />
    <Footer />
    <CTA />
  </Container>
)

export default Index
