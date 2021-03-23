interface IArticle{
    id:number
    body:string
    title:string
}

interface ArticleState{
    articles:IArticle[]
}

interface ArticleAction{
    type:string
    article:IArticle
}

type DispatchType = (arg:ArticleAction)=>void