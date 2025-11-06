import React from "react";

type Props = {
    params: { id: string };
};

const ProyectPage = ({ params } : Props) => {

    // const project = 
    const nombre = params.id;

    return (
        <section className="bg-black-background w-screen h-screen text-white">
            <div>{nombre}</div>
        </section>
    );
};

export default ProyectPage;
