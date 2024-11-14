import React from "react";
import Header from "./components/Header.tsx";
import "./App.css";
import SidebarAccordion from "./components/SidebarAccordion.tsx";
import Content from "./components/Content.tsx";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header>React Website Development Presentation!</Header>
      <div className="main-content">
        <SidebarAccordion></SidebarAccordion>
        <Content></Content>
      </div>
    </div>
  );
};

export default App;
