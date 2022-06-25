import './index.css';

import * as React from 'react';
import { Suspense, lazy, useState } from 'react';

import { Provider, lightTheme } from '@adobe/react-spectrum';

import { SiteHome } from './routes/SiteHome';

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { componentsMdxPaths } from './config/mdx-registry';
// import { getCompNameFromPath, getCompRelativePath } from './utils/mdx-helper';

// export function App2() {
//   return (
//     // <Provider theme={defaultTheme}>
//     // <Provider theme={darkTheme}>
//     <Provider theme={lightTheme} scale='large'>
//       {/* <Provider theme={lightTheme}> */}
//       <Router>
//         {/* <Header /> */}
//         <Routes>
//           <Route path='/' element={<SiteHome />} />
//           {/* <Route path='docs/*' element={<CompHome />} /> */}
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

export function App() {
  return (
    <div>
      <Provider theme={lightTheme} scale='large'>
        <SiteHome />
      </Provider>
    </div>
  );
}

export default App;
