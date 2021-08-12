import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);

  useEffect(() => {
    axios('https://api.publicapis.org/categories')
    .then(response => {
      console.log(response.data)
      setAllData(response.data);
      setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error getting fake data: ' + error);
    })
  }, []);

  const handleSearch = (event) =>{
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.search(value) != -1;
    });
    setFilteredData(result);
  }

  const styles = {
    display:'inline',
    width:'30%',
    height:50,
    float:'left',
    padding:5,
    border:'0.5px solid black',
    marginBottom:10,
    marginRight:10
    }

  return (
    <div className="App">
      <div style={{ display: 'flex',justifyContent:'center',marginTop:10 }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
      </div>
      <div style={{padding:10}}>
        {filteredData.map((value,index)=>{
        return(
          <div key={value}>
            <div style={styles}>
              {value}
            </div>
        </div>
        )
        })}
      </div>
    </div>
  );
}

export default App;
