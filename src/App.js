import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import data from './components/blogData.json'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
    constructor(){
        super()
        this.state = {
            blogs: []
        }
    }

    componentDidMount(){
        this.setState({ blogs: data.blogs })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" render={ props => 
                                            <ErrorBoundary>
                                                <BlogList {...props} blogs={this.state.blogs}/>
                                            </ErrorBoundary>
                                        }/>
                    <Route path="/contact" render={ props =>
                                            <ErrorBoundary>
                                                <Contact {...props}/>
                                            </ErrorBoundary>
                                            }/>
                </Switch>
            </div>
        )
    }
}

export default App
