import axios from "axios"
import { useEffect, useState } from "react"
import CustomTable from "./table"





const CustomUseEffectExample = () => {

    const [data, setData] = useState([])

    const [type, setType] = useState("products")


    useEffect(() => {
        fetch(type)
    }, [type])

    const fetch = async () => {


        const { data, status } = await axios.get(`https://fakestoreapi.com/${type}`)

        if (status === 200) {
            setData(data)
        }
    }

    const clickHandler = (each) => {
        setType(each)
    }

    data.map(items => {
        if (type == "products") {
            return {
                data1: items.title,
                data2: items.description,
                data3: items.image
            }
        } else if (type == "users") {
            return {
                data1: items.email,
                data2: items.username,
                data3: items.password
            }
        } else if(type == "password"){
            return{
                data1:items.userId,
                data2:items.date,
                data3:items.products
            }
        }
    })


    return (
        <div>
            {
                ["products", "carts", "users"].map(each => <button key={each} onClick={() => clickHandler(each)}>{each}</button>)
            }
            <h5>{type}</h5>
            <CustomTable rowData={data} />
        </div>
    )

}

export default CustomUseEffectExample