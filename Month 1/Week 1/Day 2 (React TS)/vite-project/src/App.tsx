import './App.css'
import { SubmitForm } from './components/SubmitForm'

// let userListDefault : { id: number; name: string; email: string }[] = Array.from({ length: 1000 }).map((_, index) => ({
//   id: index + 1,
//   name: `User ${index + 1}`,
//   email: `user${index + 1}@example.com`,
// }));


function App() {

  return (
    <div>
      <SubmitForm/>
      {/* <Dropdown/> */}
      {/* <WindowSize/> */}
      {/* <Password/> */}
      {/* <Notes/> */}
      {/* <UserSearch/> */}
      {/* <MemoComponent userList={userListDefault} /> */}
      {/* <IncDecCounter /> */}
      {/* <ValueTracker /> */}
      {/* <PrimeNumberFinder/> */}
      {/* <PerformanceSearch userList={userListDefault}/> */}
    </div>
  )
}

export default App
