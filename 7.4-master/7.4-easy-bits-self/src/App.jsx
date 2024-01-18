import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotification } from "./atoms";

function App() {
  
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
      
    </>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotify = useRecoilValue(totalNotification);
  return <div>
    <button>Home</button>
        <button>My network({networkCount >= 100? '99+':networkCount})</button>
        <button>Jobs({jobsCount})</button>
        <button>Messaging({messageCount})</button>
        <button>Notifications({notificationCount})</button>
        <button>Me({totalNotify})</button>
  </div>
}

export default App
