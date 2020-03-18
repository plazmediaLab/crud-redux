import React from 'react';
// React route
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

// REDUX
import { Provider } from 'react-redux';
// STORE
import store from './redux/store';


function App() {
  return (
    <Router>
      
      <Provider store={store}>
        
        <Header 
          title={'CRUD-Redux'}
          btnValue={'Add new product'}
        />

        <div className="container mt-5 font-0">
          <Switch>
            <Route exact path="/" component={() => <Products title='Products list'/>}/>
            <Route exact path="/products/new" component={NewProduct}/>
            <Route exact path="/products/edit/:id" component={EditProduct}/>
          </Switch>
        </div>

      </Provider>

    </Router>
  );
}

export default App;