import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from '../Pages/Admin/index'
import Shop from '../Pages/Shop'
import Page from "../Pages/PagesEmeli";
import NotFound from '../components/NotFound'

export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Page} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/shop" component={Shop} />

                {/*<Redirect exact from='*' to='/' />*/}
                <Route component={NotFound} />
            </Switch>
        </>
    );
}
