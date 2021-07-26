import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				{/* keep actual routes inside Switch */}
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>
		</>
	)
}

export default App
