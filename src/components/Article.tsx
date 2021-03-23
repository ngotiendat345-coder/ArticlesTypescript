import React, { useCallback } from 'react'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}

const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch:Dispatch<any> = useDispatch()
    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
      )
    return (
      <div className="Article">
        <div>
          <h1>{article.title}</h1>
          <p>
            {article.body}
          </p>
          <button onClick={()=>{
             // console.log(article);
              deleteArticle(article)
          }}/>
        </div>
      </div>
    );
}

export default Article;