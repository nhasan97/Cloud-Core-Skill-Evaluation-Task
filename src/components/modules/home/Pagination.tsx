/* eslint-disable @typescript-eslint/no-explicit-any */
import { TPagination } from "@/src/types";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Pagination = ({
  pagination,
  handlePageChange,
}: {
  pagination: TPagination;
  handlePageChange: (url: string | null) => void;
}) => {
  return (
    <>
      {pagination && (
        <div className="flex justify-end items-center gap-6 border">
          <button
            disabled={!pagination.prev_page_url}
            onClick={() => handlePageChange(pagination.prev_page_url)}
            className="btn-style-icon-only btn-style-light"
          >
            <FaChevronLeft />
          </button>

          {pagination.links.map((link: any, index: number) => {
            if (
              link.label.includes("&laquo;") ||
              link.label.includes("&raquo;")
            )
              return null;

            return (
              <button
                key={index}
                onClick={() => handlePageChange(link.url)}
                disabled={!link.url}
                style={{
                  fontWeight: link.active ? "bold" : "normal",
                  backgroundColor: link.active ? "#202634" : "white",
                  color: link.active ? "white" : "#202634",
                }}
                className="btn-style-icon-only"
              >
                {link.label}
              </button>
            );
          })}

          <button
            disabled={!pagination.next_page_url}
            onClick={() => handlePageChange(pagination.next_page_url)}
            className="btn-style-icon-only btn-style-light"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
