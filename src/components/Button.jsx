export default function Button({ color = "gradient-red", children }) {
  return (
    <button className={`bg-${color} rounded-full px-6 py-3 text-ddark`}>
      {children}
    </button>
  );
}
