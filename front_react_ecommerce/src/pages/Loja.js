import React from 'react'
import Carrossel from '../components/Carrossel'
import Card from '../components/Card'




export default function Loja() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <h1>Loja</h1>
                        <Carrossel />
                        <Card />
                        <Card />
                        <Card />
                        

                    </div>
                </div>
            </div>
        </>
    )
}