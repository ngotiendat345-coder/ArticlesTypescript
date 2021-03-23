import * as actionType from './actionType'

const initialState:ArticleState = {
    articles: [
        {
          id: 1,
          title: "post 1",
          body:
            "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
          id: 2,
          title: "post 2",
          body:
            "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
      ],
}

const reducer = (state:ArticleState=initialState,action:ArticleAction):ArticleState=>{
    console.log('zz')
    switch(action.type){
        
        case actionType.ADD_ARTICLE:
            const newArticle = {
                id:Math.random(),
                body:action.article.body,
                title:action.article.title
            }
            return {...state,articles:state.articles.concat(newArticle)};
        case actionType.REMOVE_ARTICLE:
            console.log('zz');
            const updateArticle:IArticle[] = state.articles.filter((item)=>item.id !== action.article.id);
            console.log('update',updateArticle);
            return {...state,articles:updateArticle};
    }
    return state;
}

export default reducer;