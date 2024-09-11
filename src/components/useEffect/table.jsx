

const CustomTable = ({rowData=[]}) =>{
    return(
        <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
        rowData.map(eachData=>{
            return(
                <tr key={eachData}>
                    <td>{eachData.data1}</td>
                    <td>{eachData.data2}</td>
                    <td>{eachData.data3}</td>
                </tr>
            )
        })
      }
    </tbody>
  </table>
    )
}
export default CustomTable