import axios from "axios";
import React from "react";
class SubCategory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Mydata : []
        }
    }
    componentDidMount() { 
        axios.get("https://akashsir.in/myapi/atecom1/api/api-subcategory-list.php")
        .then(res => {
            console.table(res)
            this.setState({Mydata:res.data.sub_category_list})
        })
     }
     render(){
        return(
            <div>
                <table border={2}>
                    {this.state.Mydata.map(value => (
                        <tr>
                            <td>{value.sub_category_id}</td>
                            <td>{value.sub_category_name}</td>
                            <td>{value.category_id}</td>
                            <td>{value.category_name}</td>
                            <td><img src={value.sub_category_image} alt="stylesheet" height={100} width={100}></img></td>
                            
                        </tr>
                    ))}
                </table>
            </div>
        )
     }
}
export default SubCategory