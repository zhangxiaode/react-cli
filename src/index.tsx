import {render} from 'mirrorx'
import App from '@/views/app';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import Mirror from '@/store/mirror'

const Page = Mirror(App)
render(
  <Page />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((e: any) => {
  console.log("性能监控")
});
