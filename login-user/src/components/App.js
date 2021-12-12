import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Dashboard from "./Dashboard"
import Signup from "./Signup"
import Login from "./Login"

function App() {
    const auth = useAuth()
    return (
        <Container className="d-flex align-items-center 
        justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Router>
                    {console.log('asd', auth)}
                    {auth && auth.currentUser && (
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    )}

                    {auth && !auth.currentUser && (
                         <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                        </Switch>
                    )}
                </Router>

            </div>
        </Container>

    );
}

export default App;
