const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { Home } from './pages/home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { BookApp } from './apps/Books/BookApp.jsx'
import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { MailApp } from './apps/Mail/pages/MailApp.jsx'
import { MailDetails } from './apps/Mail/pages/MailDetails.jsx'
import { MailAdd } from './apps/Mail/pages/MailAdd.jsx'
export function App() {
    return (
        <Router>
            <AppHeader />
            <main>
                <Switch>
                    <Route component={MailAdd} path="/MailApp/compose" />
                    <Route component={MailDetails} path="/MailApp/:MailId" />

                    <Route component={MailApp} path="/MailApp" />
                    <Route component={BookApp} path="/BookApp" />
                    <Route component={KeepApp} path="/KeepApp" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <AppFooter />
        </Router>
    )
}
