
import './App.scss';
//import { CheckTime } from './components/CheckTime'
//import { Screen } from './components/Screen/Screen';
import { SelectAMovie } from './components/SelectAMovie/SelectAAMovie';
//import { NumberOfTickets } from './components/NumberOfTickets/NumberOfTickets';

export const App = () => {
  return (
    <>
    <div className='App'>
      <p> select a movie </p>
      <SelectAMovie />
    </div>
    </>
  )
}

