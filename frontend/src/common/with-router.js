import {useLocation,useNavigation,useParams} from "react-router-dom"

export const withRouter = (Components)=>{
  function ComponentWithRouterProp(props){
    let location = useLocation();
    let navigation = useNavigation();
    let params = useParams();

    return <Component {...props} router={{location,navigation,params}}/>
  }
  return ComponentWithRouterProp;
}
