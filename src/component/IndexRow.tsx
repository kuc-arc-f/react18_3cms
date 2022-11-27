import { Link } from 'react-router-dom';

//const IndexRow = props => (
const IndexRow = function(props: any) {
  return (
  <div className="row justify-content-center">
    <div className="task_card_box card shadow-lg mb-2">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row">
          <div className="card_col_icon px-md-2 py-2 ">
            <i className="bi bi-clipboard"></i>
          </div>
          <div className="card_col_body  p-md-2">
              <Link to={`/post_show?id=${props.id}`}><h3>{props.title}</h3>
              </Link>  
              ID : {props.id}   
          </div>
          <div className="py-2  py-md-3 px-4 ms-auto text-center">
            <Link to={`/post_show?id=${props.id}`}>
            <a className="btn btn-secondary btnx-orange">show</a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>  
  )
};
export default IndexRow;
/*
{`/post_show?id=${props.id}`}
<Link to={`/posts/${props.id}`}><h3>{props.title}</h3>
*/