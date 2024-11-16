import {useState,useEffect}from 'react';

const Information = () => {
  const [fetchData,setFetchData] = useState([])
  useEffect(()=>{
  const fetchingData = async ()=>{
  try{
    const responce = await fetch('https://jsonplaceholder.typicode.com/users'); 
    if(!responce.ok){
      throw new Error(`Http error: status${responce.status}`)
    }
    let data = await responce.json();
    setFetchData(data)

  }catch(err){

  }
  }
  fetchingData()
  },[])
  console.log(fetchData)
  return (
    <div>Information</div>
  )
}

export default Information