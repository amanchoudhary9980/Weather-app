import { useState } from "react";

const Nav = () => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <nav>
        <ul>
          <li>
           <a href="" onClick={()=>setIndex(0)}>Today</a>
          </li>
          <li>
           <a href="" onClick={()=>setIndex(1)}>Tommorow</a>
          </li>
          <li>
           <a href="" onClick={()=>setIndex(2)}>21</a>
          </li>
          <li>
          <a href="" onClick={()=>setIndex(3)}>22</a>
          </li>
          <li>
           <a href="" onClick={()=>setIndex(4)}>23</a>
          </li>
          <li>
           <a href="" onClick={()=>setIndex(5)}>24</a>
          </li>
          <li>
           <a href="" onClick={()=>setIndex(6)}>25</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
