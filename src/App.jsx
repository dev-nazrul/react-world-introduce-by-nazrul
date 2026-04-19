import Countries from './Countries';
import { Suspense } from 'react';
import './App.css'
const countriPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json ());

function App() {
  return (
    <>
    <div>
      <h1>My full faith only allah</h1>
      {/* <Suspense fallback={<h1>Counries introduce is comming......</h1>}>
       <Countries countriPromise={countriPromise}>  </Countries>
      </Suspense> */}
    </div>
    </>
  )
}

export default App
