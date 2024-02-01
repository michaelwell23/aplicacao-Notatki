import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes/app.routes';
import { Auth } from './routes/auth.routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Router /> */}
      <Auth />
    </BrowserRouter>
  );
}

export default App;
