const linksSocialMedia = {
  github: "lucasrachid",
  facebook: "rachid.martins.3",
  instagram: "rachid_martins",
  twitter: "RachidMartins96",
  youtube: "UCdGufFwIAgXj6f7OxHbee8Q",
};

const functions = {
  start() {
    functions.changeUsername();
    functions.changeSocialMediaLinks();
  },
  changeUsername() {
    const userName = document.querySelector("h1");
    userName.innerHTML = "Lucas batata Martins";
  },
  changeSocialMediaLinks() {
    const socialLinks = document.getElementById("socialLinks").children;
    for (let li = 0; li < socialLinks.length; li++) {
      console.log(socialLinks[li]);
      if (li == 0) {
        socialLinks[li].classList.add("youtube");
      } else if (li == 1) {
        socialLinks[li].classList.add("facebook");
      } else if (li == 2) {
        socialLinks[li].classList.add("instagram");
      } else {
        socialLinks[li].classList.add("twitter");
      }
      const social = socialLinks[li].getAttribute("class");
      console.log(social);
    }
  },
};

functions.start();
