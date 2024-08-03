import './App.css'
import React from "react";

const AppCategories = React.lazy(() => import('app_catalog/AppCategories'))

function App() {

    return <>
        <div id="top_menu">
          <div>
              <div className="menu-item">Элемент 1</div>
              <div className="menu-item">Элемент 2</div>
              <div className="menu-item">Элемент 3</div>
              <div className="menu-item">Элемент 4</div>
          </div>
          <div>
              Аккаунт
          </div>
        </div>
        <div>
            <AppCategories/>
        </div>
    </>

}

export default App
