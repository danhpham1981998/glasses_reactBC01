import React, { Component } from 'react'


export default class GlassesList extends Component {

    changeGlasses = (id) => {
        let {arrData} = this.props;
        console.log(this.arrData.find(item => item.id === id))
        // return this.arrData.find(item => item.id === id)
    }

    renderGlassesList = () => {
        let arrImg = [];
        for(let i=1;i<9;i++){
            let contentImg = 
            <div key={i} className='col-2 d-flex align-items-center' style={{cursor:'pointer'}} onClick={() => {
                this.changeGlasses(i)
            }}>
                <img className='w-100' src={`./img/g${i}.jpg`}/>
            </div>;
            arrImg.push(contentImg);
        }
        return arrImg;
    }

    render() {
        return (
                <div className='row' style={{background:'#fff',border:'1px solid black'}}>
                    {this.renderGlassesList()}
                </div>
                
        )
    }
}
