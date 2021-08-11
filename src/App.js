import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './request'
import {useEffect,useState} from 'react'
import Table from './Table';
import { Button } from 'react-bootstrap';

function App() {
  const [data,setData] = useState([{id:Number,email:String,first_name:String,last_name:String,avatar:String}]);
  const [meta,setMeta] = useState({pages:Number,total:Number,current:Number});
  useEffect(() => {
    axios.get('?page=1').then((response) => {setData(response.data.data);
      setMeta({pages:response.data.total_pages,total:response.data.total,current:response.data.page});
      })
  }, [])
  function goToPage(page) {
    axios.get(`?page=${page}`).then((response) => {setData(response.data.data);
      setMeta({pages:response.data.total_pages,total:response.data.total,current:response.data.page});
      })
  }

  function next() {
    if(meta.current===meta.pages)
    return;
    goToPage(meta.current+1);
  }

  function prev() {
    if(meta.current===1)
    return;
    goToPage(meta.current-1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Table info={data} />
        <div className="paginate">
          <Button className="navigate" id="last-page"  onClick={prev}>Previous</Button>
          <Button className="navigate" id="next-page" text="Next" onClick={next}>Next</Button>
          
        </div>
        
      </header>
                    
    </div>
  );
}

export default App;
