import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import Constructor from "./components/Constructor/Constructor"
import Footer from "./components/Footer/Footer"
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
      <Provider store={store}>
          <React.Fragment>
              <Header />
              <Slider />
              <Constructor />
              <Footer />
          </React.Fragment>
      </Provider>
  );
}

export default App;
