import React, { Component } from 'react'
import style from './GlassesModel.module.css'

export default class GlassesModel extends Component {
        
    arrProduct = [
        {
            id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
        {
            id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    ];

    state = {
        imgSrc: './glassesImage/v1.png',
        info: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
        title: 'FENDI F8750'  
    }

    changeGlasses = (id) => {
        const newGlasses = this.arrProduct.find(item => item.id === id)
        let {url,desc,name} = newGlasses;
        this.setState({
            imgSrc: url,
            info: desc,
            title: name 
        })
        console.log(this.state.imgSrc)
    }

    renderGlassesList = () => {

        const arrList =  this.arrProduct.map((item,index) => {
            // this.setState({
            //     imgSrc: `./glassesImage/g${item.id}.jpg`,
            // })
            return <div key={index} className='col-2 d-flex align-items-center' style={{cursor:'pointer'}} onClick={() => {
                this.changeGlasses(item.id)
            }}>
                <img className='w-100' src={`./glassesImage/g${item.id}.jpg`}/>
            </div>
        });
        return arrList
    }

    render() {
        return (
            <div className='body' style={{backgroundImage:'url(./glassesImage/background.jpg)',minHeight:'700px'}}>
                <div className='header text-center'>
                    <div className={`${style.overplay}`}>
                    <h2 style={{color:'#fff',padding:'15px'}}>TRY GLASSES APP ONLINE</h2>
                    </div>
                </div>
                <div className='content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row justify-content-around'>
                                    <div className={`col-3 ${style.modelBox} p-0`}>
                                        <img className='w-100 h-100' src='./glassesImage/model.jpg' />
                                        <div className={`${style.info}`}>
                                            <h3 style={{ color: 'blue' }}>{this.state.title}</h3>
                                            <p style={{ color: '#fff' }}>
                                                {this.state.info}
                                            </p>
                                        </div>
                                        <div className={`${style.vglassesModel}`}>
                                            <img className='w-100' src={this.state.imgSrc} />
                                        </div>
                                        {/* {this.renderModel()} */}
                                    </div>
                                    <div className='col-3 p-0'>
                                        <img className='w-100 h-100' src='./glassesImage/model.jpg'/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 pt-4'>
                                <div className='row' style={{background:'#fff',border:'1px solid black'}}>
                                    {this.renderGlassesList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
