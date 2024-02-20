export default 
function Footer({ items }) {

  if(items.length === 0) return  <footer className="stats">Daftar Belanja Masih Kosong.
  </footer>


  const totalItems = items.length
  const checkedItmes = items.filter((item) => item.checked).length
  const percentage = Math.round((checkedItmes / totalItems) * 100)


  return (
  <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItmes} barang sudah dibeli ({percentage}%)
  </footer>
  )
}