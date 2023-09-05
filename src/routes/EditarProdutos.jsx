import React from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos (){

    const {id} = useParams();
    document.title = "Editar Produtos" + id;


    return (
        <div>EditarProdutos</div>
    )
}