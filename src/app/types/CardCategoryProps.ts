import React from "react";

export type CardCategoryProps = {
    className?: string;
    children?: React.ReactNode;
}

export type CardCategoryTrProps = {
    image?: string;
    name?: string;
    slug?: string;
    status?: string;
    action?: string;
    children?: React.ReactNode;
}
