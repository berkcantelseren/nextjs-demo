type Props = {
  params: Promise<{ productId: string }>;
};

export default async function Product({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Product: {productId}</h1>;
}
