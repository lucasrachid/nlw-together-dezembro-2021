const linksSocialMedia = {
  github: "lucasrachid",
  facebook: "rachid.martins.3",
  instagram: "rachid_martins",
  twitter: "RachidMartins96",
  youtube: "UCdGufFwIAgXj6f7OxHbee8Q",
};

const functions = {
  start() {
    // functions.changeUsername();
    functions.addSocialMediaClass();
    functions.changeSocialMediaUrl();
  },
  // changeUsername() {
  //   const userName = document.querySelector("h1");
  //   userName.innerHTML = "Lucas Batata Martins";
  // },
  addSocialMediaClass() {
    const socialLinks = document.getElementById("socialLinks").children;
    for (let li = 0; li < socialLinks.length; li++) {
      if (li == 0) {
        socialLinks[li].classList.add("youtube");
        socialLinks[li].href = "www.google.com.br";
      } else if (li == 1) {
        socialLinks[li].classList.add("facebook");
      } else if (li == 2) {
        socialLinks[li].classList.add("instagram");
      } else {
        socialLinks[li].classList.add("twitter");
      }
    }
  },
  changeSocialMediaUrl() {
    const urls = document.getElementsByTagName("a");
    for (let i = 0; i < urls.length; i++) {
      if (i == 0) {
        urls[i].href = `https://github.com/${linksSocialMedia.github}`;
      } else if (i == 1) {
        urls[
          i
        ].href = `https://www.youtube.com/channel/${linksSocialMedia.youtube}`;
      } else if (i == 2) {
        urls[i].href = `https://www.facebook.com/${linksSocialMedia.facebook}`;
      } else if (i == 3) {
        urls[
          i
        ].href = `https://www.instagram.com/${linksSocialMedia.instagram}/`;
      } else {
        urls[i].href = `https://twitter.com/${linksSocialMedia.twitter}`;
      }
    }
  },
};

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  /* .then() -> Promisse */
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("h1").innerHTML = data.name;
      document.querySelector("p").innerText = data.bio;
      document.getElementById("gitHubLink").href = data.html_url;
      document.getElementById("avatarPerson").src = data.avatar_url;
      document.getElementById("loginGithub").innerHTML = data.login;
    });
}

functions.start();
getGitHubProfileInfos();
