import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'



export default function Loja() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-12">

                    <Router>
                        <Header />
                    </Router>
                        
                        <h1>Loja</h1>

                    </div>
                </div>
            </div>
        </>
    )
}