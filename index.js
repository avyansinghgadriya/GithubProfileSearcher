//---------------------------------- First Approach ------------------------------------.//


// let select = document.getElementById("submit");

// select.addEventListener("click", async function (event) {
//   event.preventDefault();
//   let userId = document.getElementById("userId").value;

//   var userData = await fetchData(userId);

//   // Clear the existing content of the "userData" element
//   let userDataContainer = document.getElementById("userData");
//   userDataContainer.innerHTML = "";
//   console.log(userData);
//   createCard(userData);
// });

// async function fetchData(userId) {
//   let response = await fetch(`https://api.github.com/users/${userId}`);
//   let data = await response.json();
//   return data;
// }

// function createCard(userData) {
//   let select = document.getElementById("userData");
//   select.innerHTML = `<div class="card mb-3 bg-secondary mx-5" style="max-width: 768px;">
//         <div class="row">
//           <div class="col-md-4 p-5">
//             <img src="${userData.avatar_url}" class="img-fluid border border-rounded border-light w-80 rounded-circle" alt="Avatar">
//           </div>
//           <div class="col-md-8 p-4">
//             <div class="card-body">
//               <h5 class="card-title">${userData.name}</h5>
//               <p class="card-text">${userData.bio}</p>
             
//               <div class="row">
//                 <div class="col-md-4">Followers: ${userData.followers}</div>
//                 <div class="col-md-4">Following: ${userData.following}</div>
//                 <div class="col-md-4"> Repos: ${userData.public_repos}</div>
//               </div>

//               <div class="row">
//                 <div class="col-md-4">Twitter: ${userData.twitter_username === null ? "no account" : userData.twitter_username}</div>
//                 <div class="col-md-8">Location: ${userData.location}</div>
                
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>`;
// }
//---------------------------------- Second Approach ------------------------------------.//

class GitHubProfileViewer {
  constructor() {
    this.submitButton = document.getElementById("submit");
    this.userIdInput = document.getElementById("userId");
    this.userDataContainer = document.getElementById("userData");

    this.submitButton.addEventListener("click", async () => {
      await this.fetchData();
    });
  }

  async fetchData() {
    const userId = this.userIdInput.value;
    const response = await fetch(`https://api.github.com/users/${userId}`);
    const data = await response.json();
    this.createCard(data);
  }

  createCard(userData) {
    this.userDataContainer.innerHTML = ` 
            <div class="card mb-3 bg-secondary mx-5  text-light" style="max-width: 768px;">
                <div class="row">
                    <div class="col-md-4 p-5">
                        <img src="${userData.avatar_url}" class="img-fluid border border-rounded border-light w-80 rounded-circle" alt="Avatar">
                    </div>
                    <div class="col-md-8 p-4">
                        <div class="card-body">
                            <h5 class="card-title">${userData.name}</h5>
                            <p class="card-text">${userData.bio}</p>
                            <div class="row">
                                <div class="col-md-4">Followers: ${userData.followers}</div>
                                <div class="col-md-4">Following: ${userData.following}</div>
                                <div class="col-md-4"> Repos: ${userData.public_repos}</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">Twitter: ${userData.twitter_username === null ? "no account" : userData.twitter_username}</div>
                                <div class="col-md-8">Location: ${userData.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

const viewer = new GitHubProfileViewer();
