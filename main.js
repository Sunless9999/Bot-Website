let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

let isTeamModalOpen = false;
function toggleTeamModal() {
  if (isTeamModalOpen) {
    isTeamModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isTeamModalOpen = true;
  document.body.classList += " modal__open";
}
