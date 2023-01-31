import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        let{title,description,imgUrl,readUrl}=this.props;
        return (
            <div className='col mx-4'>
                
                <div className="card mx-4 my-2 row-sm-2 ">
                    <img src={!imgUrl?"https://media.istockphoto.com/id/1167361138/vector/globe-earth-vector-logo-template-illustration-design-vector-eps-10.jpg?s=1024x1024&w=is&k=20&c=dxUUdMUuasT5Jp26mj5Ou6EtAhIZ8KL0MUD2Cd_0ljI=":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={readUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
