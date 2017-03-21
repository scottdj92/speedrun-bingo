import App from './app/app';

// import styles
import './app/_main.scss';

App.renderSync({
  $global: {
    data: [
      null
    ]
  }
}).appendTo(document.body);
