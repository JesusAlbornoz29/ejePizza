// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Pedido = () => {
    const [pedido, setPedido] = useState(null);

    useEffect(() => {
        console.log("Componente montado")
        const timeoutId = setTimeout(() => {
            setPedido('Pizza');
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
            console.log("Componente actualizado")
        };
    }, []);

    useEffect(() => {
        console.log("Componeente actualizado");
    });

    useEffect(() => {
        console.log("Componeente actualizado");
    }, [pedido]);


    const cancelarPedido = () => {
        console.log("Componente desmontado")
        setPedido(" ");
    };


    return (
        <div>
            <h1>¡Bienvenido a la pizzería!</h1>
            {pedido ? (
                <div>
                    <p>Tu Pedido: {pedido}</p>
                    <button onClick={() => cancelarPedido(setPedido(" "))}>Cancelar Pedido</button>
                    <button onClick={() => setPedido ("Pizza con Muzza")}>Cargar Pedido</button>
                </div>
                ) : (
                    <p>Cargando pedido...</p>
                  )
            }
        </div>
    );






}

export default Pedido;