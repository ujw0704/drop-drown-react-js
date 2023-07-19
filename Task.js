import React, {useState} from 'react'

function Task() {
    let [task, setTask] = useState('');
    

console.log(task)
    const countries = [
        {
          country: "India",
          code: "IN",
          cities: ["Delhi", "Mumbai", "Chennai"],
        },
        {
          country: "China",
          code: "CN",
          cities: ["Foshan", "Hunan", "Beijing"],
        },
        {
          country: "Australia",
          code: "AU",
          cities: ["Sydney", "Canberra", "Perth"],
        },
        {
          country: "Sri Lanka",
          code: "SL",
          cities: ["Colombo", "Candy", "Jaffna"],
        },
      ]
     
  return (

    <div>
 <select onChange= {e => setTask(e.target.value)} name="" id="countries"  defaultValue={"placeholder"}>
            <option value="placeholder"   id ="country" disabled>Country</option>
            {
                countries.map((val, index) =>{ 
                    return  <option key={index} value={val.code} id ="country" >{val.country}</option> 
                })
                // <option key={index+1}>{val}</option>
            }
        </select>
        <select name="" id="cities" >
            <option  id ="cities" disabled></option>
          

       {
         countries.map((val)=>{
            if(task === val.code){
                return (
                    
                    val.cities.map((citi,ind2)=>{
                        console.log(citi)
                        return  <option  key ={ind2} value={citi} id ="cities">{citi}</option>

                    })
                  )

            }

         })
       }

        </select> 



    </div>
  )
}

export default Task