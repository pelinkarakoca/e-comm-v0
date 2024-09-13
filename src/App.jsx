import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PageContent from "./layout/PageContent";
import ContactPage from "./pages/ContactPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageContent>
            <HomePage />
          </PageContent>
        </Route>
        <Route path="/shop">
          <PageContent>
            <ShopPage />
          </PageContent>
        </Route>
        <Route path="/contact-us">
          <PageContent>
            <ContactPage />
          </PageContent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
