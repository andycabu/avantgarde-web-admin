import Card from "./components/Card";
import Map from "./components/Map";
import Section from "./components/Section";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [PROPERTIES, setProperties] = useState([]);
  const navigate = useNavigate();

  const getProperties = async () => {
    const res = await axios.get("http://localhost:3000/dev/properties ");
    const data = res.data;
    setProperties(data);
  };

  useEffect(() => {
    getProperties();
  }, []);
  console.log(PROPERTIES);

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
