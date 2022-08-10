import "./App.css";
import { useEffect } from "react";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./container/PageWrapper/PageWrapper";
import Home from "./container/Home/Home";
import Nav from "./container/Nav/Nav";
import Cart from "./container/Cart/Cart";
import ProductPage from "./container/ProductPage/ProductPage";
import ProductList from "./container/ProductList/ProductList";

function App() {
    useEffect(() => {}, []);
    return (
        <div className="App">
            <PageWrapper>
                <BrowserRouter>
                    <Nav />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productlist" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/productlist/:id"
                            element={<ProductPage />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </PageWrapper>
        </div>
    );
}

export default App;
