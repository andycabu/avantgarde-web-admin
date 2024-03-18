import Card from "./components/Card";
import Map from "./components/Map";
import Section from "./components/Section";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
function App() {
  const PROPERTIES = [
    {
      id: 1,
      price: "900.000",
      images: [
        "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?t=st=1710602707~exp=1710606307~hmac=25e4791660b9ad06868e71da7439c603a7d5d417311ab45a8bfdd9482eb948ba&w=996",
        "https://img.freepik.com/fotos-premium/casa-arquitectonica-renderizado-3d-rodeada-vegetacion-ilustracion_62754-2227.jpg?w=1060",
        "https://img.freepik.com/foto-gratis/moderno-edificio-oficinas_1127-3672.jpg?t=st=1710602881~exp=1710606481~hmac=65821ad7de73bf34ad07844ec6ea40a3d32e2c122f3f8027205bd6c4ea02d091&w=996",
      ],
      title: "Elegante propiedad con pista de pádel",
      description: `RESERVADO. Singular propiedad con una arquitectura elegante y funcional a 25 minutos de Barcelona, el aeropuerto y el mar. Situada en la parte alta del pueblo, tocando con el bosque, la propiedad está retirada y al mismo tiempo cerca de todos los servicios. Su ubicación le brinda privacidad, junto con unas vistas impresionantes al mar y montaña. Perfectamente pensada, dispone de conexiones orgánicas entre sus diversos ambientes, con un bonito revestimiento de ladrillo rojo y grandes ventanales que dejan traspasar la abundancia del espacio, luz y aire.

El salón-comedor tiene un volumen arquitectónico generoso, de doble altura y vigas de madera, que crea un espacio cálido y relajante. Además, dispone de salidas al jardín y la terraza cubierta – un lugar excepcionalmente acogedor que brinda sombra en verano y no impide el paso del sol en invierno. La cocina es de grandes dimensiones, con mucha superficie de trabajo y una acogedora zona de comedor.

La zona de noche de la casa es igualmente notable: todas las habitaciones son de dimensiones cómodas y gozan de mucha luz. Destaca la suite principal, que a parte de su baño completo dispone de un amplio vestidor.

La planta sótano se compone de garaje para dos coches, una sala de juegos, un gran comedor con salida al jardín, un baño completo y trastero.

La zona de barbacoa se encuentra cómodamente al lado de la piscina, está cubierta y lo suficientemente amplia como para albergar una gran reunión familiar. La propiedad cuenta con una pista de pádel de dimensiones reglamentarias.

*Al precio de venta hay que añadir los impuestos correspondientes y gastos notariales de la compraventa. La superficie informada del inmueble es la obtenida del catastro. La propiedad se vende sin muebles.`,

      information: [
        { id: 1, text: "6", type: "beds" },
        { id: 2, text: "4", type: "baths" },
        { id: 3, text: "259", type: "houseSize" },
        { id: 4, text: "1743", type: "lotSize" },
      ],
      lat: 41.3514705,
      lng: 1.9792419,
    },
    {
      id: 2,
      price: "900.000",
      images: [
        "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?t=st=1710602707~exp=1710606307~hmac=25e4791660b9ad06868e71da7439c603a7d5d417311ab45a8bfdd9482eb948ba&w=996",
        "https://img.freepik.com/fotos-premium/casa-arquitectonica-renderizado-3d-rodeada-vegetacion-ilustracion_62754-2227.jpg?w=1060",
        "https://img.freepik.com/foto-gratis/moderno-edificio-oficinas_1127-3672.jpg?t=st=1710602881~exp=1710606481~hmac=65821ad7de73bf34ad07844ec6ea40a3d32e2c122f3f8027205bd6c4ea02d091&w=996",
      ],
      title: "Elegante propiedad con pista de pádel",
      description: `RESERVADO. Singular propiedad con una arquitectura elegante y funcional a 25 minutos de Barcelona, el aeropuerto y el mar. Situada en la parte alta del pueblo, tocando con el bosque, la propiedad está retirada y al mismo tiempo cerca de todos los servicios. Su ubicación le brinda privacidad, junto con unas vistas impresionantes al mar y montaña. Perfectamente pensada, dispone de conexiones orgánicas entre sus diversos ambientes, con un bonito revestimiento de ladrillo rojo y grandes ventanales que dejan traspasar la abundancia del espacio, luz y aire.

El salón-comedor tiene un volumen arquitectónico generoso, de doble altura y vigas de madera, que crea un espacio cálido y relajante. Además, dispone de salidas al jardín y la terraza cubierta – un lugar excepcionalmente acogedor que brinda sombra en verano y no impide el paso del sol en invierno. La cocina es de grandes dimensiones, con mucha superficie de trabajo y una acogedora zona de comedor.

La zona de noche de la casa es igualmente notable: todas las habitaciones son de dimensiones cómodas y gozan de mucha luz. Destaca la suite principal, que a parte de su baño completo dispone de un amplio vestidor.

La planta sótano se compone de garaje para dos coches, una sala de juegos, un gran comedor con salida al jardín, un baño completo y trastero.

La zona de barbacoa se encuentra cómodamente al lado de la piscina, está cubierta y lo suficientemente amplia como para albergar una gran reunión familiar. La propiedad cuenta con una pista de pádel de dimensiones reglamentarias.

*Al precio de venta hay que añadir los impuestos correspondientes y gastos notariales de la compraventa. La superficie informada del inmueble es la obtenida del catastro. La propiedad se vende sin muebles.`,

      information: [
        { id: 1, text: "6", type: "beds" },
        { id: 2, text: "4", type: "baths" },
        { id: 3, text: "259", type: "houseSize" },
        { id: 4, text: "1743", type: "lotSize" },
      ],
      lat: 41.3514705,
      lng: 1.9792419,
    },
    {
      id: 3,
      price: "900.000",
      images: [
        "https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?t=st=1710602707~exp=1710606307~hmac=25e4791660b9ad06868e71da7439c603a7d5d417311ab45a8bfdd9482eb948ba&w=996",
        "https://img.freepik.com/fotos-premium/casa-arquitectonica-renderizado-3d-rodeada-vegetacion-ilustracion_62754-2227.jpg?w=1060",
        "https://img.freepik.com/foto-gratis/moderno-edificio-oficinas_1127-3672.jpg?t=st=1710602881~exp=1710606481~hmac=65821ad7de73bf34ad07844ec6ea40a3d32e2c122f3f8027205bd6c4ea02d091&w=996",
      ],
      title: "Elegante propiedad con pista de pádel",
      description: `RESERVADO. Singular propiedad con una arquitectura elegante y funcional a 25 minutos de Barcelona, el aeropuerto y el mar. Situada en la parte alta del pueblo, tocando con el bosque, la propiedad está retirada y al mismo tiempo cerca de todos los servicios. Su ubicación le brinda privacidad, junto con unas vistas impresionantes al mar y montaña. Perfectamente pensada, dispone de conexiones orgánicas entre sus diversos ambientes, con un bonito revestimiento de ladrillo rojo y grandes ventanales que dejan traspasar la abundancia del espacio, luz y aire.

El salón-comedor tiene un volumen arquitectónico generoso, de doble altura y vigas de madera, que crea un espacio cálido y relajante. Además, dispone de salidas al jardín y la terraza cubierta – un lugar excepcionalmente acogedor que brinda sombra en verano y no impide el paso del sol en invierno. La cocina es de grandes dimensiones, con mucha superficie de trabajo y una acogedora zona de comedor.

La zona de noche de la casa es igualmente notable: todas las habitaciones son de dimensiones cómodas y gozan de mucha luz. Destaca la suite principal, que a parte de su baño completo dispone de un amplio vestidor.

La planta sótano se compone de garaje para dos coches, una sala de juegos, un gran comedor con salida al jardín, un baño completo y trastero.

La zona de barbacoa se encuentra cómodamente al lado de la piscina, está cubierta y lo suficientemente amplia como para albergar una gran reunión familiar. La propiedad cuenta con una pista de pádel de dimensiones reglamentarias.

*Al precio de venta hay que añadir los impuestos correspondientes y gastos notariales de la compraventa. La superficie informada del inmueble es la obtenida del catastro. La propiedad se vende sin muebles.`,

      information: [
        { id: 1, text: "6", type: "beds" },
        { id: 2, text: "4", type: "baths" },
        { id: 3, text: "259", type: "houseSize" },
        { id: 4, text: "1743", type: "lotSize" },
      ],
      lat: 41.3514705,
      lng: 1.9792419,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Section className={"mt-[4.8rem] "}>
        <div>
          <Button
            text="Crear propiedad"
            onClick={() => navigate("/nueva-propiedad")}
          />
        </div>
        <Card properties={PROPERTIES} />
        <div className="bg-white flex justify-center">
          <Map locations={PROPERTIES} />
        </div>
      </Section>
    </>
  );
}

export default App;
