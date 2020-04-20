import React from 'react';
import '../css/styles.css'


function Post(props) {
    
    
    return(
        <div class="wrapper">
            <div>
                <img class="avatar" src={props.author.photo} alt='avatar'/>
            </div>
            <div class="main">
                <div class="info-post">
                    <div class="info-acc">
                        <span class="name">{props.author.name}</span>
                        <span class="nickname">{props.author.nickname}</span>
                        <span class="date">{props.date}</span>
                    </div>
                    <div>
                        <i class="fa  fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <span class="content-text">{props.content}</span>
                </div>
                <div class="main-content">
                        <img class="image" src={props.image} alt='content image'/>
                        <div class="footer">
                            <i class="fa fa-comment" aria-hidden="true">
                                <span>482</span>
                            </i>
                            <i class="fa fa-retweet" aria-hidden="true">
                                <span>146</span>
                            </i>
                            <i class="fa fa-heart-o " aria-hidden="true">
                                <span>887</span>
                            </i>
                            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Post;