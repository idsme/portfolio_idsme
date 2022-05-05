// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';
import Certs from './components/Certificates';

function App() {
	return (
		<div className="App">
			<Header />
			<Projects />
			<About />
			<Experience />
			<Certs />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
