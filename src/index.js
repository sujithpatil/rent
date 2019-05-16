import React , {Component} from 'react';
import ReactDom from "react-dom";
import data from './app.json';
import './app.scss';
import html2canvas from 'html2canvas';

class Rent extends Component {
    
    downloadFile() {

        const input = document.getElementById('rent');
        
        html2canvas(input).then(canvas=>{
            
            const imgData = canvas.toDataURL('image/png');
            const base_image = new Image();
            base_image.src = imgData;

            var link = document.createElement('a');
            link.href = imgData;
            link.download = 'receipt.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        });
    }

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
                   <button className='download' onClick={this.downloadFile}>{data.download}</button>
                </React.Fragment>;
    }
}

ReactDom.render(<Rent/> , document.getElementById('rent'))