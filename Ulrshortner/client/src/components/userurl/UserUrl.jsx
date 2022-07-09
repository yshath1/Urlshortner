import "./userurl.css";

import {Link}  from 'react-router-dom';

function UserUrl({url}) {




  return (
    <div >
  <div className="short-url">
  <ul>
  <li  ><Link to={`?${url._id}`}>{url.shortId}</Link> 
  </li></ul></div>
    </div>
  )
}

export default UserUrl