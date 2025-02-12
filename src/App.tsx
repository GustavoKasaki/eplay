import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import RoutesDom from './routes'
import { store } from './store'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesDom />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
