import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContentWrapper from "../components/content-wrapper";
import PageContent from "../components/page-content";
import ProductCardContainer from "../components/product-card-containers"; // Adjust path as per your file structure
import ProductCardContainers1 from "../components/product-card-containers1"; // Adjust path as per your file structure
import axios from "axios"; // For making HTTP requests

const AllProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track pagination

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/acdb5fa251msh5c32a45500b91e5p1989b3jsn6437d12367d8/products?page=${page}&limit=10`
      );
      const newProducts = response.data;
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onAllProductsContainerClick = useCallback(() => {
    router.push("/product-details");
  }, [router]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-row items-start justify-start leading-normal tracking-normal cursor-pointer"
      onClick={onAllProductsContainerClick}
    >
      <main className="flex-1 bg-white flex flex-col items-end justify-start pt-0 px-0 pb-4 gap-4 max-w-full lg:pb-16 lg:box-border">
        <ContentWrapper />
        <PageContent />

        {/* Products list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            // Alternate between ProductCardContainer and ProductCardContainers1 based on index
            index % 2 === 0 ? (
              <ProductCardContainer key={product.id} {...product} />
            ) : (
              <ProductCardContainers1 key={product.id} {...product} />
            )
          ))}
        </div>

        {/* Loading indicator */}
        {loading && <p className="text-center">Loading...</p>}
      </main>
    </div>
  );
};

export default AllProducts;
