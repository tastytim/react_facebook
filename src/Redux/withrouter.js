import React from "react";
import { useLocation} from "react-router-dom";




export function withRouter(Child) {
    return ( props ) => {
      const location = useLocation();
      return <Child { ...props } location={ location }/>;
    }
}