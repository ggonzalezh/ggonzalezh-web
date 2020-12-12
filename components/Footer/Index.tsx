import { Layout } from 'antd'
import LayoutContainer from './Style'

const Footer = () => {
  const year = new Date().getFullYear()
  const { Footer } = Layout
  return (
    <LayoutContainer>
      <Layout>
        <Footer>
          <div style={{ textAlign: 'center' }}>
            © {year} Guillermo González | All rights reserved
          </div>
        </Footer>
      </Layout>
    </LayoutContainer>
  )
}

export default Footer
