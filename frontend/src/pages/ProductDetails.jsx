import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-950">
        <Header />
        <main className="mx-auto w-full max-w-3xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#061947]">
            Product not found
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            We could not find that product.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The product may have moved, or the link may be incorrect.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#061947] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b255f]"
          >
            Back to products
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:px-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full max-h-[520px] w-full rounded-lg object-cover shadow-lg"
        />
        <section className="flex flex-col justify-center">
          <Link
            to="/products"
            className="mb-6 text-sm font-semibold text-[#061947] hover:underline"
          >
            Back to products
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#061947]">
            Product details
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-[#061947]">
            {product.price}
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600">
            {product.description}
          </p>
          <button
            type="button"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#061947] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b255f] sm:w-auto"
          >
            Add to cart
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
