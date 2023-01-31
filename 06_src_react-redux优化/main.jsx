import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./redux/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // 使用provider简化组件传store步骤
    <Provider store={store}>
        <App />
    </Provider>,
)

// 使用了react-redux就不需要再手动检测数据的变化了
/*store.subscribe(() => {
    root.render(
        <App />,
    )
})*/
