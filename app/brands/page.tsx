"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "@/redux/features/brands/brandsSlice";
import type { AppDispatch, RootState } from "@/redux/store";

export default function BrandsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector(
    (state: RootState) => state.brands
  );

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  if (loading) {
    return <p className="p-6">Loading brands...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Brands</h1>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {list.map((brand) => (
          <li
            key={brand._id}
            className="flex flex-col items-center rounded-lg border p-4"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={80}
              height={80}
              className="mb-2 h-20 w-20 object-contain"
            />
            <span className="text-center text-sm font-medium">
              {brand.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
