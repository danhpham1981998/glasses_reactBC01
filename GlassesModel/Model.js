import React, { Component } from 'react'
import style from './GlassesModel.module.css'

export default class Model extends Component {

    render() {
        let {arrData} = this.props;
        
        return (
            <div className={`col-3 ${style.modelBox} p-0`}>
                <img className='w-100 h-100' src='./img/model.jpg' />
                <div className={`${style.info}`}>
                    <h3 style={{ color: 'blue' }}>FENDI F8750</h3>
                    <p style={{ color: '#fff' }}>
                        Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
                    </p>
                </div>
                <div className={`${style.vglassesModel}`}>
                    <img className='w-100' src='./img/v1.png' />
                </div>
                {/* {this.renderModel()} */}
            </div>
        )
    }
}
