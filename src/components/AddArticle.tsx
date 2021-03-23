import React, { FormEvent, useState } from 'react'

type Props = {
    saveArticle: (article: IArticle | any) => void
}

const AddArticle: React.FC<Props> = ({ saveArticle }) => {
    const [article,setArticle] = useState<IArticle | {}>();
    console.log(article);
    const handleArticleData = (e:FormEvent<HTMLInputElement>)=>{
        setArticle({
            ...article,[e.currentTarget.id]:e.currentTarget.value
        })
    }
    const addNewArticle = (e:FormEvent)=>{
        e.preventDefault();
        saveArticle(article);
    }

    return (
        <form className="Add-article">
            <input type="text" id="title" placeholder="Title" onChange={handleArticleData}/>
            <input type="text" id="body" placeholder="Description" onChange={handleArticleData}/>
            <button disabled={article === undefined ? true :false} onClick={addNewArticle}>Add article</button>
        </form>

    )
}

export default AddArticle