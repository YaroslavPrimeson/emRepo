import React from 'react';


const Post = ({title, text}) => {
    return (
        <div className="post">
            <h2 className="post__title">
                {title}
            </h2>
            <p className="post__text">
                {text}
            </p>
        </div>
    );
};

export default Post;
