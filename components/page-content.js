import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";

const PageContent = ({ className = "" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
        params: {
          category_id: '123', // Replace with the correct category_id for your products
          page: '1',
          country: 'US',
          sort_by: 'RELEVANCE',
          product_condition: 'ALL'
        },
        headers: {
          'x-rapidapi-key': 'acdb5fa251msh5c32a45500b91e5p1989b3jsn6437d12367d8',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.log('API Response:', response.data); // Debug: log API response
  
        if (response.data && response.data.data && response.data.data.products) {
          const productsData = response.data.data.products.map(product => ({
            title: product.title || 'No Title', // Default to 'No Title' if title is null or empty
            imageUrl: product.images && product.images.length > 0 ? product.images[0] : '/placeholder.jpg', // Use a placeholder image if images array is empty
            price: product.price ? product.price.current_price : 0, // Default to 0 if price is not available
            details: {
              brand: product.brand || '', // Handle other fields similarly
              rating: product.rating || 0,
            }
          }));
          
          setProducts(productsData);
        } else {
          console.error('API response did not contain expected data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log('Products:', products); // Debug: log products state

  return (
    <section className={`self-stretch flex flex-row items-start justify-end py-0 pr-12 pl-[49px] box-border max-w-full text-left text-xl text-gray-200 font-montserrat mq750:pl-6 mq750:pr-6 mq750:box-border ${className}`}>
      <div className="flex-1 flex flex-row items-start justify-start gap-[30px] max-w-full">
        <div className="w-[250px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border mq1050:hidden">
          <div className="self-stretch bg-white flex flex-row items-start justify-start pt-0 px-0 pb-[1269.2px] z-[2] lg:pb-[825px] lg:box-border mq750:pb-[536px] mq750:box-border">
            <img
              className="h-[1442.2px] w-[250px] relative hidden"
              alt=""
              src="/bg11.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[1]">
              <FormControl
                className="self-stretch h-[43px] font-italiana text-base text-gray-100"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "43px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#222",
                    fontSize: 16,
                    fontWeight: "Book",
                    fontFamily: "Gotham",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="12px"
                      height="6.5px"
                      src="/arrow-img.png"
                      style={{ marginRight: "3.7999999999999545px" }}
                    />
                  )}
                >
                  <MenuItem>COMPANY</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="self-stretch h-[43px] font-italiana text-base text-gray-100"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "43px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#222",
                    fontSize: 16,
                    fontWeight: "Book",
                    fontFamily: "Gotham",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="12px"
                      height="6.5px"
                      src="/arrow-img-1.png"
                      style={{ marginRight: "3.7999999999999545px" }}
                    />
                  )}
                >
                  <MenuItem>PRICE</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="self-stretch h-[43px] font-italiana text-base text-gray-100"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "43px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "43px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#222",
                    fontSize: 16,
                    fontWeight: "Book",
                    fontFamily: "Gotham",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="12px"
                      height="6.5px"
                      src="/arrow-img-2.png"
                      style={{ marginRight: "3.7999999999999545px" }}
                    />
                  )}
                >
                  <MenuItem>OTHER</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex-1 self-stretch flex flex-col items-start justify-start gap-[50px] pt-[53px] max-w-full">
          {/* Display products */}
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="flex flex-row items-center gap-[20px]">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-[100px] h-[100px] object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
