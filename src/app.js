import layer from './components/layer/layer.js';
import './css/common.css';

const App = function() {
    const a = new Set();
    a.add(111)
    a.add(222)
    const NUM = 11112;
    alert(a.size)
    console.log(layer);
}
new App();