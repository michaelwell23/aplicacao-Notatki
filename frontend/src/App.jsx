import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/auth';

import { AppRouter } from './routes/app.routes';
import { AuthRouter } from './routes/auth.routes';

function App() {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRouter /> : <AuthRouter />}</BrowserRouter>;
}

export default App;
