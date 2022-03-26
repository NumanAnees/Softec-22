import React,{useState} from 'react'
import card from '../Data/card';
import './../css/Home.css'

const Home = () => {
    const [cardDat, setCardData] = useState(card);
    const  [query,setQuery] = useState("");

    //cards
    const CardAdv = () => {
    return card.filter((i)=>i.Specialization.toUpperCase().includes(query)).map((l, i) => (
        <div  key={i} className='col-md-4'>
        <div  style={{"padding":"1rem"}}>
        <div className="card" style={{"width":"18rem"}}>
            <img className="card-img-top" src={l.image} style={{"padding":"0.1rem 1rem"}} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{l.name}</h5>
                <p className="card-text">Doctor Name: {l.Doc}</p>
                <p className="card-text">Speciality: {l.Specialization}</p>

                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <div className='text-center'>
                <a href="#" className="btn btn-primary">Book Appointment</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    ))
}

  return (
      <>
      <div className='container'>
            <div className="row">
                <div className="col-md-12 mt-5 mb-2">
                    <h1 className="font-weight-bold text-center heading-awesome m-nav text-span5">Find Your<span className='text-span'> Doctor</span> Here</h1>
                    <br />
                </div>
            </div>
            </div>
      <div className='container marg-2'>
            <div className='row d-flex justify-content-center'>
              <input type="text" className='form-inp' placeholder='Search your favourite food here...' onChange={e=>setQuery(e.target.value.toUpperCase())}  />
            </div>
            </div>
      <div className="container">
        <div className="row">
             {CardAdv()}
        </div>
      </div>
       
    </>
  )
}

export default Home