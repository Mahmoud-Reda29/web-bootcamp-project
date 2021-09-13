import React, { Component } from 'react'
import Products from './section/Products'
import details from './section/Details'
import {Route} from "react-router-dom"
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact  />
                <Route path="/product/:id" component={details} exact/>
            </section>
        )
    }
}
export default Section
