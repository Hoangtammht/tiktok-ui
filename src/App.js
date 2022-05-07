import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routers'
import { DefayltLayout } from '~/components/Layout'
import {Fragment} from 'react'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        
                        const Page = route.component;

                        let Layout = DefayltLayout;

                        if(route.layout){
                            Layout = route.layout
                        }else if(route.layout === null){
                            Layout = Fragment
                        }




                        return <Route key={index} path={route.path} element={
                            <Layout>
                                <Page />
                            </Layout>
                        }></Route>
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
