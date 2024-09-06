import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PageContent from "./layout/PageContent"; //TODO : Add Support PageCı
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
          <ShopPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
