import React from "react";
import "./pagination.css";

interface Pagination{
    number: number;
}

const Pagination: React.FC<Pagination> = ({ number }) => {
    return (
        <>
            <button>
                <span>
                    {number}
                </span>
            </button>
        </>
    );
};

export default Pagination;
