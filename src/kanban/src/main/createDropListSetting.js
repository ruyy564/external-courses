export const createDropDownSetting= (event) => {
    const listSetting = `
                        <li><a href="#" >Delete</a></li>
                    `;
  let list = document.getElementById('list-setting');
  const ulList = document.createElement('ul');

  if (document.getElementById('list-setting') != null) {
    list.remove();
  } else {
    ulList.id = 'list-setting';
    ulList.innerHTML = listSetting;
    event.target.parentNode.after(ulList);
  }
}
