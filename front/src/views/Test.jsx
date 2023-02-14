export default function Test() {

    fetch('http://localhost:3002/api/products').then((res) => {
      res.json().then((data) =>{
          console.log(data)
      })
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-gray-700 font-bold">Statut: </div>
          <div className="text-gray-700 font-bold">Prix: </div>
          <div className="text-gray-700 font-bold">Créé le: </div>
          <ul className="mt-4">
              <li className="text-gray-700">
                Product
              </li>
              <li className="text-gray-700">
                Product
              </li>
              <li className="text-gray-700">
                Product
              </li>
          </ul>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Voir en détail
            </button>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Changer le statut
            </button>
          </div>
        </div>
      );
}