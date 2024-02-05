import React , {useEffect,useState} from 'react'


const UseEffectExample2 = () => {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const [drinksData,setDrinksData] = useState([])
    const [searchData,setSearchData] = useState('')

    console.log(drinksData)
    const fetchDrinksData = async (apiUrl) => {
        
        const response = await fetch(apiUrl)
        const {drinks} = await response.json()
        setDrinksData(drinks)
        
    }
    useEffect(() => {
        const correctUrl = `${URL}${searchData}`
        fetchDrinksData(correctUrl)
    },[searchData])
  return (
    <div style={{textAlign:"center"}}>
      <h1> Welcome to UseState Example 2 </h1>
      <input type='text' id='search' value={searchData} onChange={(e) => setSearchData(e.target.value) } name='search' placeholder='enter a keyword for search '/>
      <hr/>
      
      <ul>
        {drinksData.map((eachItem) => {
            const {idDrink,strDrink,strDrinkThumb} = eachItem
            return (
                <li key={idDrink}>
                    <h1>{strDrink}</h1>
                    <img src={strDrinkThumb} alt={strDrink}/>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default UseEffectExample2
