import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';

import Nav from './components/Nav';
import Footersection from './components/Footersection';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Nav />
        <App />
        <Footersection />
      </Layout>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
