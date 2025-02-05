import { Link } from 'react-router-dom';

function CheckoutSuccessPage() {
  return (
    <div>
      <h1>Order Successful!</h1>
      <Link to="/">Back to Store</Link>
    </div>
  );
}

export default CheckoutSuccessPage;