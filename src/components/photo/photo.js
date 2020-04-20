import React, {Component} from 'react';
import './styles.css';

class PhotoBox extends Component{
    render(){
        return(
            <div className='photo-box'>
                <img src='https://designtalk.club/wp-content/uploads/2018/04/Photography-Inspiration-Chasing-The-Ice-in-Greenland-1.jpg' />
                <img src='https://bm.img.com.ua/img/prikol/images/large/9/3/241139.jpg' />
                <img src='https://sigma-foto.by/image/data/!14/rybalka-foto-001.jpg' />
                <img src='https://telegraf.com.ua/files/2019/07/tree-736885_960_720.jpg' />
                <img src='https://i.pinimg.com/originals/3c/31/2f/3c312fa2867bd51b75e6a14c91a7fcb5.jpg' />
                <img src='https://i.pinimg.com/originals/dd/bc/22/ddbc22c9a0167afffc99d941e057d18e.jpg' />
            </div>
        )
    };
}

export default PhotoBox;