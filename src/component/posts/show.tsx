import * as React from 'react';
import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LibSqlite from '../../lib/LibSqlite';
import { marked } from 'marked';
//
import {
//  Route,
//  Routes,
//  Link,
  useSearchParams,
} from "react-router-dom";
//type
type IPostItem = {
  id: number,
  title : string,
  content : string,
}
//
function Page() {
  const [searchParams] = useSearchParams();
  const [postId, setPostId] = useState(0);
  const [postItem, setPostItem] = useState<IPostItem>({id:0, title:"", content:""});

  useEffect(() => {
    (async() => {
      const id = Number(searchParams.get("id"));
console.log(id);
      //@ts-ignore
      setPostId(id);
      getItem(id);
    })()    
  }, []);
  /**
  * getItem
  * @param
  *
  * @return
  */   
   const getItem = async function(id: number) {
    try {   
      const db = await LibSqlite.getDb();
      const sql = `
      SELECT id, title, content from Post WHERE
      id = ${id};
      `;
      let item = await LibSqlite.select(db, sql);
      item = item[0];
console.log(item);
      if(item.length > 0) {
        let content = item[2];
        if(content === null) {
          return;
        }
        content = marked.parse(content);
        setPostItem({id: id, title: item[1], content: content});
      }
    } catch (e) {
      console.error(e);
      alert("error, getItem");
    }
  }  
  //
console.log(postItem);
  return (
    <>
      <div className="container">
        <Link to={`/`} >
            <button className="btn btn-outline-primary mt-2">Back</button>
        </Link>       
        <div className="card shadow-sm my-2">
            <div className="card-body">
              <h1>{postItem.title}</h1>
              ID: {postId}
            </div>
          </div>       
        <div className="shadow-sm bg-white p-4 mt-2 mb-4">
          <div id="post_item" dangerouslySetInnerHTML={{__html: `${postItem.content}`}}>
          </div>
        </div>
      </div>
      <style>{`
        div#post_item img{
          max-width : 100%;
          height : auto;
        }
        #post_item pre{
          background-color: #EEE;
          padding: 0.5rem;
        }      
      `}</style>      
    </>
  );
}
export default Page;
/*
<h3>Post Show </h3>
ID : {postId}
<hr />
<hr className="my-1" />
<div className="col-sm-12">
  <label>Content:</label>
  <pre>{postItem.content}</pre>
</div>
*/