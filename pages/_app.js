import '../styles/globals.css'

import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'





const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-80",
  delay: 100, 
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


function MyApp({ Component, pageProps }) {
  

  return <Component {...pageProps} />
}

export default MyApp
