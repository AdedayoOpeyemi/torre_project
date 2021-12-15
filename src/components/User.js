import React, {useEffect, useState } from 'react';

function User() {
  const [userData, setUserData] = useState(null);

  // const fetchUserData = () => async () => {
  //   const res = await fetch('https://bio.torre.co/api/bios/oyelesiopeyemi');
  //   const data = await res.json();
  //   setUser(data)
  // };
//   var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };



  // useEffect(() => {
  //   async function fetchUserData() {
  //    fetch("https://bio.torre.co/api/bios/oyelesiopeyemi", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .then(result => setUser(result))
  //     .catch(error => console.log('error', error));
  //     // setUser(data)
  //   }
  //   fetchUserData();
  // },[user]);
  
  // useEffect(() => {
  //   const fetchUserData = () => async () => {
  //     const res = await fetch('https://bio.torre.co/api/bios/oyelesiopeyemi');
  //     const data = await res.json();
  //     setUser(data)
  //   };

  //   fetchUserData();
  // },[user])

  useEffect(() => {
    async function fetchUserData () {
      const res = await fetch('/api/bios/oyelesiopeyemi');
      const data = await res.json();
      console.log(data)
      // console.log(data.person)
      setUserData(data)
      console.log(userData)
      return null
    };

    fetchUserData();
  }, [])


  return (
    <div>
      <div className="d-flex flex-column">
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default User;