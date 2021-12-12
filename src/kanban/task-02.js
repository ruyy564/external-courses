const listProfile = `
                        <li><a href="#" class="profile-list-item">My account</a></li>
                        <li><a href="#" class="profile-list-item">My tasks</a></li>
                        <li><a href="#" class="profile-list-item">Log out</a></li>
                    `;
const buttonProfile = document.getElementsByClassName('button-profile')[0];

buttonProfile.addEventListener('click', () => {
  const list = document.getElementById('profile-list');
  const imageArrow = document.getElementById('img-arrow');
  const ulListProfile = document.createElement('ulListProfile');
  const profile = document.getElementsByClassName('right-side')[0];

  if (list != null) {
    list.remove();
    imageArrow.src = 'img/arrow_down.svg';
  } else {
    imageArrow.src = 'img/arrow_up.svg';
    ulListProfile.id = 'profile-list';
    ulListProfile.innerHTML = listProfile;
    profile.append(ulListProfile);
  }
});

window.onclick = function (event) {
  const list = document.getElementById('profile-list');
  const imageArrow = document.getElementById('img-arrow');

  if (!event.target.matches('.button-profile')) {
    if (!event.target.matches('img')) {
      if (!event.target.matches('div')) {
        if (list != null) {
          list.remove();
          imageArrow.src = 'img/arrow_down.svg';
        }
      }
    }
  }
};
