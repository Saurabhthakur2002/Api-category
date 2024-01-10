import axios from "axios";
import React from "react";

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Mydata : []
        }
    }
    
    componentDidMount() { 
      axios.get("https://akashsir.in/myapi/atecom1/api/api-view-category.php")
      .then(res => {
        console.table(res)
        this.setState({
            Mydata : res.data.category_list
        })
      })  
     }
     render(){
        return(
            <div>
                <table border={2}>
                    {this.state.Mydata.map(value => (
                        <tr>
                            <td>{value.category_id}</td>
                            <td>{value.category_name}</td>
                            <td><img src={value.category_image} alt="stylesheet" height={200} width={200}></img></td>
                        </tr>
                    ))}
                </table>
            </div>
        )
     }
}
export default Category;