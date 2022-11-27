import * as React from 'react';
import { Link } from 'react-router-dom';
import LibSqlite from '../lib/LibSqlite';
import TopHeadBox from './TopHeadBox';
import IndexRow from './IndexRow';
const INFO_TEXT =  "SQLite3 WASM JS + React, CMS sample";
const SYS_NAME : string | undefined = process.env.REACT_APP_SYS_NAME;

interface IProps {
}
interface IState {
  items: any[],
}
//
export default class Page extends React.Component<IProps, IState> {  
  /**
  * constructor
  * @param
  *
  * @return
  */    
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: []
    };
  }
  /**
  * componentDidMount
  * @param
  *
  * @return
  */    
  async componentDidMount() {
    try {   
      console.log("post.start"); 
      this.getList();
    } catch (e) {
      console.error(e);
    } 
  }
  /**
  * getList
  * @param
  *
  * @return
  */     
  async getList() {
    try {   
      const db = await LibSqlite.getDb();
      const sql = `
      SELECT id, title, content FROM Post ORDER BY id DESC;
      `;
      const result = await LibSqlite.select(db, sql);
      if(result === null) {
        return;
      }
      console.log(result);
      const items: any[] = [];
      result.forEach(function (item: any){
        let row = {id: 0, title: "", content: ""};
        console.log(item);
        if(item.length > 0) {
          row.id = item[0];
          row.title = item[1];
          row.content = item[2];
        }
        items.push(row);
      });
      console.log(items);
      this.setState({items: items});
    } catch (e) {
      console.error(e);
      alert("error, getList");
    }
  }  
  /**
  * render
  * @param
  *
  */
  render() {
//console.log(this.state.items);
    return (
    <div className="body_main_wrap">
      <TopHeadBox site_name={SYS_NAME} info_text={INFO_TEXT} />
      {/* post */}
      <div className="body_wrap card shadow-sm mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow-sm my-2">
              <h5 className="card-header myblog_color_accent">Post</h5>
              </div>
              {/*
              <span className="badge_post badge pt-2 pb-0  rounded myblog_bgcolor_accent px-3">
                <h5 className="py-0" >Posts</h5>
              </span>   
              */}
              <div id="post_items_box" className="card-body mt-0 mb-4 pt-0">
                <div id="div_news">
                </div>
                <div className="posts_items_row my-3">
                  {this.state.items.map((item, index) => {
    console.log(item );
                  return (<IndexRow key={index}
                    id={item.id} save_id={item.id} title={item.title}
                    date="" category_name="" />       
                  )
    //return("");
    /*
    let createdAt = LibCommon.converDatetimeString(item.createdAt);
                    let categoryName = LibPost.getCategoryName(categoryItems, item.categoryId);
    */
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>{/* container_end */}
      </div>
      <style>{`
        .body_wrap{ position:relative; }
        .page_post{
          position:absolute; top:-15px; left:10px;  border: 2px solid var(--bs-orange); 
        }
        .card_col_body{ text-align: left; width: 100%;}
        .card_col_icon{ font-size: 2.4rem; }
        .task_card_box{ width : 95%;}
      `}</style>      
    </div>
    );
  }  
}

/*
        .badge_post{
        position:absolute; top:-15px; left:10px; 
        }    

                <PagingBox page="1" paginateDisp={paginateDisp} />
      <div className="container py-4">
        <h3>Post</h3>
        <hr />
        { this.state.items.map((item: any, index: number) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <Link to={`/post_show?id=${item.id}`}
              className="btn btn-sm btn-outline-primary mx-2">Show
            </Link>
            <hr />
          </div>
          )        
        )}
      </div>

*/