import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import routes from './routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={Math.random()} {...route} />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
