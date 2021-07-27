import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				{/* keep actual routes inside Switch */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/services' component={Services} />
					<Route path='/products' component={Products} />
					<Route path='/sign-up' component={SignUp} />
				</Switch>
			</Router>
		</>
	)
}

export default App
