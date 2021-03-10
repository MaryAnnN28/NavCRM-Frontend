export const Favorites = () => {
  let favList: any = [{}]
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
  for (let i = 0; i < getArray.length; i++) {
    let x = getArray[i]
    favList[i] = JSON.parse(localStorage.getItem('faveItem' + [x]) || '')
  }
  const titles = Object.keys(faveList[0]);

  return

  <div>
    <h3>Your VIP Customers</h3>

    <table>
      <thead>
        <tr>
          {}
        </tr>
      </thead>
    </table>
  </div>
}