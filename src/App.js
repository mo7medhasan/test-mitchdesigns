import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./DataContext";
import Layout from "./components/Layout";
import Home from "./page/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DataProvider>
              <Layout>
                <Home />
              </Layout>
            </DataProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
