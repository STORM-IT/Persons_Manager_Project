import { createContext } from "react";
import propTypes from 'prop-types';
export default createContext({
    ListPersons:[],
    name:"",
    age:0,
    showList:true,
    add_persons:()=>{},
    delete_person:()=>{},
    edite_person:()=>{},
     show_or_hiden:()=>{},
    clear_input:()=>{},
    set_name_age:()=>{}
});
createContext.propTypes={
name:propTypes.string,
age:propTypes.number
}