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
        <div className="primary-user-details">

          <div class="hex">
            <div class="hex-background">
            <img src="https://images.freeimages.com/images/large-previews/4d6/chugh-1171409.jpg" alt="Obama" className="user_image1" />
            </div>
          </div>
          
          <h4>President Barrack Obama</h4>
        </div>
        <div classname="secondary-user-details">
          <h6>Skills and Interests</h6>

          <div className="prof-section">
            <h6>Master/Influencer</h6>
              <div class="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

          <div className="prof-section">
            <h6>Proficient</h6>

            <div class="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

          <div className="prof-section">
            <h6>Novice</h6>

            <div class="btn-group d-flex flex-row">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Sony</button>
                <button>Sony</button>
                <button>Apple</button>
                {/* <button>Samsung</button> */}
              </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default User;