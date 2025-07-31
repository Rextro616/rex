import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { AppProvider } from './context/AppContext.tsx'
import { AppRouter } from './routes/routes.tsx'

function App() {
  return (
     <BrowserRouter>
      <Provider store={store}>
        {/* dentro de loading, incluir un componente o lottie de loading */}
        <PersistGate loading={null} persistor={persistor} >
          <AppProvider>
            <AppRouter/>
          </AppProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
