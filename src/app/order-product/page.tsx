export default function OrderProduct() {
  const handleClick = () => {
    console.log("placing your order.");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
