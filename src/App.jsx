import Card from "./components/Card";
import Map from "./components/Map";
import Section from "./components/Section";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_LOCAL } from "./constants/constants";

function App() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const getProperties = async () => {
    try {
      const res = await axios.get(`${URL_LOCAL}properties`);
      const data = res.data;
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    if (properties.length === 0) {
      getProperties();
    }
  }, []);

  // Si PROPERTIES está vacío o aún está cargando, muestra un indicador de carga o retorna null
  if (properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando propiedades...
      </div>
    );
  }

  return (
    <>
      <Section className={"mt-[4.8rem] "}>
        <div className="bg-white flex justify-center pt-8">
          <Button
            className="py-4 px-8"
            text="Crear propiedad"
            onClick={() => navigate("/nueva-propiedad")}
          />
        </div>
        <Card properties={properties} />
        <div className="bg-white flex justify-center">
          <Map locations={properties} />
        </div>
      </Section>
    </>
  );
}

export default App;
