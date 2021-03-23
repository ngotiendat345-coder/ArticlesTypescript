import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import AddArticle from './components/AddArticle';
import Article from './components/Article';
import { addArticle, removeArticle } from './store/actionCreator';

function App() {
  const article:readonly IArticle[] = useSelector((state:ArticleState)=>state.articles,shallowEqual);
  const dispatch:Dispatch<any> = useDispatch();

  const saveArticle = (article:IArticle)=>{
    dispatch(addArticle(article));
  }
  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle}/>
      {article.map((item:IArticle)=>(<Article article={item} key={item.id} removeArticle={removeArticle}/>))}
    </main>
  );
}

export default App;
