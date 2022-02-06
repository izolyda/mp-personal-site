import React, { useState, useEffect } from 'react';
import Pagination from './pagination.component';
import Article from './article.component';

const url = 'https://jsonplaceholder.typicode.com/posts';

const ArticleLoaderComponent = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;

    return <div>
        {posts.length > 0 ? (
            <Pagination
                data={posts}
                RenderComponent={Article}
                title="Posts"
                pageLimit={3}
                dataLimit={4}
            />
        ) : (
            <h1>No Posts to display</h1>
        )}
    </div>;
}

export default ArticleLoaderComponent;