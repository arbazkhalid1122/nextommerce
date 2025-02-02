export default function TableOrder({ cart }) {
  return (
    <>
        <table className="w-full text-left my-3 border border-white/10 rounded-lg overflow-hidden shadow-md">
  <thead className="bg-white/10 text-black text-sm">
    <tr>
      <th className="py-2 px-3">Product Name</th>
      <th className="py-2 px-3">Color</th>
      <th className="py-2 px-3">Amount</th>
      <th className="py-2 px-3">Price</th>
      <th className="py-2 px-3">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item, i) => (
      <tr
        key={i}
        className={`text-xs transition-all duration-300 ${
          i % 2 === 0 ? "bg-white/10 hover:bg-white/20" : "bg-black/20 hover:bg-black/30"
        }`}
      >
        <td className="py-3 px-4 text-gray-700">{item.name.replace(/_/g, " ")}</td>
        <td className="py-3 px-4 text-gray-700">{item.color}</td>
        <td className="py-3 px-4 text-gray-700">{item.amount}</td>
        <td className="py-3 px-4 text-green-500 font-medium">{item.price}$</td>
        <td className="py-3 px-4 text-green-500 font-medium">{item.price * item.amount}$</td>
      </tr>
    ))}
  </tbody>
  <style jsx>{`
    th, td {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    th {
      font-weight: bold;
      text-transform: uppercase;
    }
  `}</style>
</table>

      </>
  );
}