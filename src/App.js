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
			// Add React + Solidity => (Leon, Blockchain dev, React Frontend Dev)
			// Add Vue + Task Manager => (Vuejs dev, interview)
			// Add Code Challenge Angular => (Angular inteview, More body, to profile but more diverse )
			<About />
			<Experience />
			<Certs />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
