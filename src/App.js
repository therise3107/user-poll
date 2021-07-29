import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from 'react-router-dom';

import Home from 'components/pages/Home';
import QuestionDetailPage from 'components/pages/QuestionDetailPage';
import Layout from 'components/layouts';

const App = ({ props }) => (
  <Router>
    <Route
      exact
      path="/"
      component={(routerProps) => (
        <Layout>
          <Home {...routerProps} {...props} />
        </Layout>
      )}
    ></Route>
    <Route
      path="/questions/:questionID"
      component={(routerProps) => (
        <Layout>
          <QuestionDetailPage {...routerProps} {...props} />
        </Layout>
      )}
    ></Route>
  </Router>
);

export default App;
