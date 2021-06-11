import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AuctionPage from './pages/AuctionPage/AuctionPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/:artist" component={ArtistPage} />
      <Route path="/auction" component={AuctionPage} />
      <Route path="/payment" component={PaymentPage} />
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
