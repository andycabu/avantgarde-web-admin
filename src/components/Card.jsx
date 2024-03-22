import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_LOCAL } from "../constants/constants";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import Icon from "./Icon";
import Button from "./Button";

const Card = ({ properties }) => {
  const navigate = useNavigate();

  const deleteProperty = async (propertyId) => {
    try {
      await axios.delete(`${URL_LOCAL}properties${propertyId}`);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="grid bg-white grid-cols-3 place-items-center gap-6 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 py-8 px-12 max-[800px]:px-4 max-[600px]:px-4">
      {properties?.map((property) => {
        const goToPropertyDetails = () => {
          navigate(`/propiedad/${property.id}`, { state: property });
        };

        const information = [
          {
            id: 1,
            type: "beds",
            text: property.bedrooms,
          },
          {
            id: 2,
            type: "baths",
            text: property.bathrooms,
          },
          {
            id: 3,
            type: "houseSize",
            text: `${property.houseSize} M<sup>2</sup>`,
          },
          {
            id: 4,
            type: "lotSize",
            text: `${property.area} M<sup>2</sup>`,
          },
        ];
        return (
          <div
            key={property.id}
            className="flex flex-col justify-between w-full shadow-personalized cursor-pointer relative"
          >
            <div className="flex gap-4 my-4 justify-center">
              <Button
                onClick={goToPropertyDetails}
                className="py-2 px-4 text-[18px] h-[48px] hover:hover:bg-[#3e6f88]"
                text="Editar"
              />
              <Button
                onClick={() => deleteProperty(property.id)}
                className="py-2 px-4 text-[18px] h-[48px] hover:bg-red-600 bg-red-500 "
                text="Borrar"
              />
            </div>
            <Carousel images={property.Images} height={"h-[356px]"} />
            <div className="absolute bottom-[24%] text-white w-full p-4 ">
              <h3 className="text-white text_shadow text-[16px]">
                {property.title}
              </h3>
              <span className="text-[24px] text_shadow ">
                <a href="#" className="font-medium">
                  {property.price} €
                </a>
              </span>
            </div>
            <div className="w-full bg-white">
              <ul className="flex justify-between items-center py-8 px-8">
                {information?.map((info) => (
                  <li
                    className="flex flex-col items-center gap-2"
                    key={info.id}
                  >
                    <Icon name={info.type} />
                    <span
                      className="text-[14px]"
                      dangerouslySetInnerHTML={{ __html: info.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  properties: PropTypes.array.isRequired,
};

export default Card;
