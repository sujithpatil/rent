import React , {Component} from 'react';
import ReactDom from "react-dom";
import data from './app.json';
import './app.scss';

class Rent extends Component {
    
    render() {        
        const markUp = <div className='rent-container'>
                            <h2 className='title'>{data.rent}</h2>
                            <div className='receipt'>
                                <span className='rent_label'>{data.id}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                            </div>
                            <div className='date'>
                                <span className='date_label'>{data.date}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                            </div>
                            <div className='content'>
                                <span>{data.tenant}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                                <span>{data.of}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                            </div>
                            <div className='month-content'>
                                <span>{data.for}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                            </div>
                            <div className='owner'>
                                <span>{data.owner}</span>
                                <p className='rent_id edit' contentEditable='true'></p>
                            </div>
                            <div className='sign'>
                                <span>{data.signature}</span>                               
                            </div>
                        </div>;
        return <React.Fragment>
                   {markUp}
                   <button className='download'>{data.download}</button>
                </React.Fragment>
        ;
    }
}

ReactDom.render(<Rent/> , document.getElementById('rent'))