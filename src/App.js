import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import data from './components/blogData.json'

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
                                            <BlogList {...props} blogs={this.state.blogs}/>
                                        }/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        )
    }
}

export default App
