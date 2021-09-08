
const Online = () => <h1>Online</h1>
const Offline = () => <h1>Offline</h1>

const Status = (props) => {
  const { isOnline } = props;
  // option1
  // if(isOnline) {
  //   return <Online />
  // }

  // return <Offline />

  //option2
  // return isOnline ? <Online /> : <Offline />

  //option3
  console.log({isOnline})
  return <>
    {isOnline === true && <Online />}
    {isOnline === false && <Offline />}
    {isOnline === undefined && <h1>loading...</h1>}
  </>

}

export default Status;

// export default function Status (props) {
//   const { isOnline } = props;
//   // option1
//   if(isOnline) {
//     return <Online />
//   }

//   return <Offline />

//   //option2
//   // return isOnline ? <Online /> : <Offline />>

//   //option3
//   // return <>
//   //   {isOnline && <Online />}
//   //   {!isOnline && <Offline />}
//   // </>

// }
