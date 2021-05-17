import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './Notes'
import Support from './Support'
import Header from './Components/Header'
import Papers from './Papers'
import NotFound404 from './Components/NotFound404';
import LoginAdmin from './LoginAdmin';
import Admin from './Admin';
import AdminNavbar from './Components/AdminNavbar';
import AdminPapers from './AdminPapers';
import AddAdmin from './AddAdmin';
import EditDocuments from './EditDocuments';
import AdminsList from './AdminsList';
import EditAdmin from './EditAdmin'
import {Animated} from "react-animated-css";
import Footer from './Components/Footer'
import './style.css'
import Categories from './Categories';

let CollegeApp =() => {
    let url = window.location.href
    url = url.toLowerCase()
    let isAdmin = url.includes('admin') || url.includes('edit')

    return (
        <Router>
            <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={500} isVisible={true}>
                {isAdmin ? <AdminNavbar /> : <Header />}
            </Animated>
            <Switch>
                {/* users */}
                <Route exact path='/college/support' component={Support} />
                <Route exact path='/college/notes' component={Notes} />
                <Route path='/college/' exact component={Papers} />
                <Route path='/college/papers' exact component={Papers} />
                <Route path='/college/papers/year/' component={Categories} />
                
                {/* admins */}
                <Route path='/college/adminlogin' exact component={LoginAdmin} />
                <Route path='/college/addPapers' exact component={Admin} />
                <Route path='/college/adminPapers' exact component={AdminPapers} />
                <Route path='/college/editDocuments' exact component={EditDocuments} />
                <Route path='/college/editAdmin' exact component={EditAdmin} />
                <Route path='/college/addAdmin/' component={AddAdmin} />
                <Route path='/college/adminsList/' component={AdminsList} />
                <Route path='*' component={NotFound404} />
            </Switch>
            {isAdmin ? ' ' : <Footer />}
        </Router>
    );
}

export default CollegeApp;