const API = "https://rickandmortyapi.com/api/character";

const getApi = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API: ", error);
    });
};

const fillData = (data) => {
  let html = ``;
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html+=`<div class="idCharacter">#${ch.id}</div>`
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += `<p class="card-title">I'm ${ch.species} ${ch.gender} and i'm from ${ch.origin.name}. Now i'm ${ch.status} and my location is ${ch.location.name}.</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";
  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  }"><a class="page-link btn btn-dark" onclick="getApi('${
    info.prev
  }')">Prev</a></li>`;
  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"><a class="page-link btn btn-dark" onclick="getApi('${
    info.next
  }')">Next</a></li>`;
  document.getElementById("pagination").innerHTML = html;
};

getApi(API);
