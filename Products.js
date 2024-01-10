import axios from "axios";
import React from "react";
class Prodcuts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Mydata : []
        }
    }
    componentDidMount() { 
        axios.get("https://akashsir.in/myapi/atecom1/api/api-view-product.php")
        .then(res => {
            console.table(res)
            this.setState({
                Mydata : res.data.product_list
            })
        })
     }
     render(){
        return(
            <div>
                <table border={2}>
                    {this.state.Mydata.map(value => (
                        <tr>
                            <td>{value.product_id}</td>
                            <td>{value.product_name}</td>
                            <td>{value.product_price}</td>
                            <td><img src={value.product_image} alt="stylesheet" height={200} width={150}></img></td>
                        </tr>
                    ))}

                </table>
            </div>
        )
     }
}
export default Prodcuts