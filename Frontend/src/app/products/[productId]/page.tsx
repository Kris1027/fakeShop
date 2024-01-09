export default function DetailedProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  );
}
