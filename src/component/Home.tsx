import * as React from 'react';
import { Link } from 'react-router-dom';
import LibSqlite from '../lib/LibSqlite';

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
      const result = await LibSqlite.select(db, "SELECT id, title, content FROM Post;");
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
    );
  }  
}
