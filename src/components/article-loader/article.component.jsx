import './article-loader.styles.scss';
import React from 'react';

export default function Article(props) {
    const { id, title, body } = props.data;
    return (
        <div className="post">
            <small>{id}</small>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}
