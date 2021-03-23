import * as actionType from './actionType'

export const addArticle = (article:IArticle)=>{
    const action:ArticleAction = {
        type:actionType.ADD_ARTICLE,
        article
    };
    return simulateHttpRequest(action);
}

export const removeArticle = (article:IArticle)=>{
    console.log(article);
    const action:ArticleAction = {
        type:actionType.REMOVE_ARTICLE,
        article
    };
    return simulateHttpRequest(action);
}

export const simulateHttpRequest=(action:ArticleAction)=>{
    return (dispatch:DispatchType)=>{
        setTimeout(()=>{
            dispatch(action);
        },500)
    }
}