import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from 'react-router-dom';

import Home from 'components/pages/Home';
import QuestionDetailPage from 'components/pages/QuestionDetailPage';

const App = ({ props }) => (
  <Router>
    <Route
      exact
      path="/"
      component={(routerProps) => <Home {...routerProps} {...props} />}
    ></Route>
    <Route
      path="/questions/:questionID"
      component={(routerProps) => (
        <QuestionDetailPage {...routerProps} {...props} />
      )}
    ></Route>
  </Router>
);

export default App;
