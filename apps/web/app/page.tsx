import { env } from "@/env";

const retrieveProducts = async () => {
  const productsUrl = `${env.PAYLOAD_API_BASE_URL}/products`;
  console.log(productsUrl);
  const res = await fetch(productsUrl);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (await res.json()) as any[];
};

export default async function Home() {
  const products = await retrieveProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Products</h1>
      <ul className="flex flex-col space-y-4">
        {/* {products?.map((product) => (
          <li key={product.id}>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p>{product.price}</p>
          </li>
        ))} */}
      </ul>
    </main>
  );
}
