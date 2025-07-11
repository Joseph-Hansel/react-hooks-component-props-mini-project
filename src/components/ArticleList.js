import Article from "./Article.js"

function ArticleList ({posts}){
    return (
        <main>
            {posts.map((post, index) => {
                return(
                    <Article 
                        key = {index}
                        title = {post.title}
                        date = {post.date}
                        preview = {post.preview}
                    />
                )
            })}
        </main>
    );
};

export default ArticleList;