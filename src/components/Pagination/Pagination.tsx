import React from "react";

interface PaginationProps {
    numberPage: number;
    isActive: number;
    setIsActive: (numberPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ numberPage, isActive, setIsActive }) => {
    const active = numberPage === isActive;

    return (
        <button
            onClick={() => setIsActive(numberPage)}
            style={{
                transform: active ? "scale(1.1)" : "",
                background: active ? "rgba(255, 255, 255, 0.85)" : ""
            }}
        >
            {numberPage}
        </button>
    );
};

export default Pagination;
