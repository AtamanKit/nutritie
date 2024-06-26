import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import HeroBg from './components/hero_bg';
import NavBar from './components/navbar';
import { useRef, useEffect, useState } from 'react';
import SupportLent from './components/support';
import Categories from './components/categories';
import Footer from './components/footer';
import Remedies from './components/remedies';
import Brands from './components/brands';
import Products from './components/products';
import ProductDetail from './components/product_detail';
import RemedyDetail from './components/remedy_detail';
import Articles from './components/articles';
import { elementPath, spacePath } from './components/utils';
import BreadProd from './components/bread_prod';
import Search from './components/search';
import SectionTitle from './components/section_title';
import Cart from './components/cart';
import SignSuccess from './components/signin_success';
import ActivationAccount from './components/activation_account';
import ActivationSuccess from './components/activation_success';
import PasswordVerify from './components/password_verify';
import PasswordReset from './components/password_reset';
import PasswordSuccess from './components/password_success';
import Order from './components/order';
import { apiUrl } from './components/utils';
// import OrderConfirmationProba from './components/order_confirmation_proba';

const pathname = elementPath();
const api_nut_app_categories = apiUrl() + '/nut_app/categories/';
const api_nut_app_articlecollections = apiUrl() + '/nut_app/articlecollections/';


function App() {
  useEffect(() => 
    // Establishing the page title
    document.title = title
  )

  // Using useState hook to change the title
  // Depending what submenu we choose
  const [title, setTitle] = useState("Home - PLAFAR.ORG")

  // Make references to different part of page
  // Depending on what submenu is pushed
  const homeApRef = useRef(null);
  const remApRef = useRef(null);
  const catApRef = useRef(null);
  const brandApRef = useRef(null);
  const cartApRef = useRef(null);
  const footApRef = useRef(null);

// Scroll functions. The document will scroll
  // Depending on what menus is pushed
  // Then changing the title
  const homeApFunc = () => {
    homeApRef.current.scrollIntoView();
  };
  const remApFunc = () => {
    remApRef.current.scrollIntoView();
    setTitle("Articole - PLAFAR.ORG");
  };
  const catApFunc = () => {
    catApRef.current.scrollIntoView();
    setTitle("Produse pe categorii")
  };
  const brandApFunc = () => {
    brandApRef.current.scrollIntoView();
    setTitle("Branduri - PLAFAR.ORG")
  };
  const cartApFunc = () => {
    cartApRef.current.scrollIntoView();
    setTitle("Cosul dvs.")
  };
  const footApFunc = () => {
    footApRef.current.scrollIntoView();
    setTitle("Contacte - PLAFAR.ORG")
  };

  // A function to change the title
  // When pages change
  const pgTitle = arg => setTitle(arg);

  return (
    <React.Fragment>
      <NavBar
        navHome={homeApFunc}
        navRem={remApFunc}
        navCat={catApFunc}
        navBrand={brandApFunc}
        navCart={cartApFunc}
        navFoot={footApFunc}
      />

      {/* 
        Depending on what are the url subnames
        different components load
      */}
      {
        pathname.breadcrumb === 'breadcrumb'
            ?   <BreadProd
                    upGreen={`VEDETI ${spacePath(pathname.type)} DIN`}
                    downWhite={`RUBRICA: ${spacePath(pathname.category)}`}
                />
            :   []
      }
      {/* {
        pathname.type === 'proba' && pathname.category === 'proba'
        ? <OrderConfirmationProba />
        : []
      } */}
      {
        pathname.type === 'COMANDA' && pathname.category === 'VINZARI'
        ? <Order />
        : []
      }
      {
        pathname.type === 'REUSITA' && pathname.category === 'PAROLA'
        ? <PasswordSuccess />
        : []
      }
      {
        pathname.type === 'SCHIMBARE' && pathname.category === 'PAROLA'
        ? <PasswordReset />
        : []
      }
      {
        pathname.type === 'VERIFICARE' && pathname.category === 'PAROLA'
        ? <PasswordVerify />
        : []
      }
      {
        pathname.type === 'REUSITA' && pathname.category === 'CONTURI'
        ? <ActivationSuccess />
        : []
      }
      {
        pathname.type === 'ACTIVARE' && pathname.category === 'CONTURI'
        ? <ActivationAccount />
        : []
      }
      {
        pathname.type === 'INREGISTRARE' && pathname.category === 'CONTURI'
        ? <SignSuccess />
        : []
      }
      {
        pathname.type === 'PRODUSE' && pathname.category === 'CAUTATI'
        ? <Search
            table = 'products'
            type = 'PRODUS'
          />
        : []
      }
      {
        pathname.type === 'ARTICOLE' && pathname.category === 'CAUTATI'
        ? <Search 
            table = 'remedies'
            type = 'ARTICOL'
          />
        : []
      }
      {
        pathname.type === 'PRODUSE' && pathname.category !== 'CAUTATI'
        ? <Products 
            navCartProd={cartApFunc}
            pageTitle={pgTitle}
          />
        : []
      }
      {
        pathname.type === 'PRODUS'
        ? <ProductDetail 
            navCartProd={cartApFunc}
            pageTitle={pgTitle}
          />
        : []
      }
      {
        pathname.type === 'ARTICOLE' && pathname.category !== 'CAUTATI'
        ? <Articles
            pageTitle={pgTitle}
          />
        : []
      }
      {
        pathname.type === 'ARTICOL'
        ? <RemedyDetail
            pageTitle={pgTitle}
          />
        : []
      }

      {/*
        The main components of the first page
      */}
      <HeroBg homeRef={homeApRef}/>
      <SupportLent />
      <SectionTitle 
        _ref={catApRef}
        first_title = 'CATEGORII'
        second_title = 'PRODUSE'
        text = 'Accesati una din categorii pentru a vedea produsele'
      />
      <Categories 
        url = {api_nut_app_categories}
        type = 'PRODUSE'
      />
      <SectionTitle 
        // _ref={remApRef}
        first_title = 'RECOMANDARI'
        second_title = 'SI REMEDII'
        text = 'Venim cu unele sfaturi'
      />
      <Remedies />
      <SectionTitle 
        _ref={cartApRef}
        first_title = 'PRODUSE IN'
        second_title = 'COS'
        // text = 'Alegeti unul sau mai multe produse ori excludeti'
      />
      <Cart />
      <SectionTitle 
        _ref={remApRef}
        first_title = 'CATEGORII'
        second_title = 'ARTICOLE'
        text = 'Accesati una din categorii pentru a vedea articolele'
      />
      <Categories 
        url = {api_nut_app_articlecollections}
        type = 'ARTICOLE'
      />
      <SectionTitle 
        _ref={brandApRef}
        first_title = 'BRANDURI'
        // second_title = 'URI'
        text = 'Producatori cu care colaboram'
      />
      <Brands />
      <Footer
        footRef={footApRef} 
        footHome={homeApFunc}
        footRem={remApFunc}
        footCat={catApFunc}
      />
    </React.Fragment>
  );

}

export default App;
