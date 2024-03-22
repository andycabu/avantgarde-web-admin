import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Section from "../components/Section";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Map from "../components/Map";
import Input from "../components/Input";
import useInputState from "../hooks/useInputState";
import { URL_LOCAL } from "../constants/constants";
import { addImages } from "../api/s3";

const Propertie = () => {
  const { state } = useLocation();
  const isCreating = !state;
  const defaultState = {
    title: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    houseSize: 0,
    area: 0,
    description: "",
    lat: 0,
    lng: 0,
    images: [],
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const navigate = useNavigate();

  const initialState = isCreating
    ? defaultState
    : {
        title: state.title,
        price: state.price,
        bedrooms: state.bedrooms,
        bathrooms: state.bathrooms,
        houseSize: state.houseSize,
        area: state.area,
        description: state.description,
        lat: state.lat,
        lng: state.lng,
        images: state.Images,
      };
  const [editedState, handleChange, setEditedState] =
    useInputState(initialState);
  const [originalState, setOriginalState] = useState(initialState);

  const [isEditing, setIsEditing] = useState(isCreating && true);

  const toggleEdit = () => {
    const editing = !isEditing;
    setIsEditing(editing);
    if (editing) {
      requestAnimationFrame(() => adjustTextareaHeight());
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = document.querySelector("#descriptionTextarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSave = async () => {
    const onProgress = (progress, image) => {
      setUploadProgress((prevProgress) => ({
        ...prevProgress,
        [image.title]: progress,
      }));
    };

    const results = await addImages(editedState.images, onProgress);

    setEditedState((prevState) => ({
      ...prevState,
      images: [...results],
    }));

    const newState = { ...editedState, images: [...results] };

    if (isCreating) {
      const res = await axios.post(`${URL_LOCAL}properties`, newState);
      if (res.status === 200) {
        navigate("/");
      }
    } else {
      const res = await axios.put(
        `${URL_LOCAL}properties${state.id}`,
        newState
      );

      console.log(res);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedState(originalState);
    setIsEditing(false);
    if (isCreating) {
      navigate("/");
    }
  };

  const handleAddImages = (e) => {
    setSelectedFiles(e.target.files);
    const newImages = Array.from(e.target.files).map((file) => ({
      title: file.name,
      type: file.type,
      img: URL.createObjectURL(file),
    }));

    setEditedState((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...newImages],
    }));
  };

  const handleRemoveImage = (id) => {
    setEditedState((prevState) => ({
      ...prevState,
      images: prevState.images.filter((image) => image.id !== id),
    }));
  };

  const information = [
    {
      id: 1,
      type: "beds",
      text: editedState.bedrooms,
      name: "bedrooms",
    },
    {
      id: 2,
      type: "baths",
      text: editedState.bathrooms,
      name: "bathrooms",
    },
    {
      id: 3,
      type: "houseSize",
      text: editedState.houseSize,
      name: "houseSize",
    },
    {
      id: 4,
      type: "lotSize",
      text: editedState.area,
      name: "area",
    },
  ];
  return (
    <Section className={"mt-[4.8rem]"}>
      <div className="pt-16 px-16 bg-white max-[800px]:px-8 max-[600px]:px-4">
        <div className="flex justify-end gap-4 mb-4">
          {isEditing ? (
            <>
              <Button
                text="Guardar"
                onClick={handleSave}
                className="py-2 px-4 text-[18px] h-[48px] hover:bg-green-600 bg-green-500"
              />
              <Button
                text="Cancelar"
                onClick={handleCancel}
                className="py-2 px-4 text-[18px] h-[48px] hover:bg-red-600 bg-red-500"
              />
            </>
          ) : (
            <Button
              text={isCreating ? "Crear propiedad" : "Editar propiedad"}
              onClick={toggleEdit}
              className="py-2 px-4 text-[18px] h-[48px] hover:bg-[#3e6f88]"
            />
          )}
        </div>
        <div className="flex justify-between items-start flex-wrap gap-4">
          {isEditing ? (
            <>
              <h3 className="text-[26px] font-bold w-full text-center">
                Añade los datos de la propiedad
              </h3>
              <div className="flex flex-wrap gap-4 justify-center w-full">
                <Input
                  label="Titulo"
                  name="title"
                  type="text"
                  value={editedState.title}
                  onChange={handleChange}
                  placeholder="Añade el titulo de la propiedad"
                />
                <Input
                  label="Precio"
                  name="price"
                  type="number"
                  value={editedState.price}
                  onChange={handleChange}
                  placeholder="Precio"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col">
              <h3 className="text-[26px]">{editedState.title}</h3>
              <span className="text-[28px]">{editedState.price} €</span>
            </div>
          )}
        </div>
        <div className="my-8 flex max-[800px]:grid grid-cols-2 max-[600px]:grid-cols-2 gap-4 justify-center">
          {information?.map((info) => {
            const infoLabels = {
              beds: "Habitaciones",
              baths: "Baños",
              houseSize: "Tamaño de la Casa",
              lotSize: "Tamaño del Lote",
            };
            const label = infoLabels[info.type];

            return (
              <div key={info.id} className="flex gap-4 items-center">
                <Icon name={info.type} />
                {isEditing ? (
                  <Input
                    label={label}
                    name={info.name}
                    type="number"
                    value={info.text}
                    size={info.text.length || 1}
                    onChange={handleChange}
                    placeholder="Hab."
                  />
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${info.text} M<sup>2</sup>`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {isEditing ? (
          <>
            <h3 className="text-[26px] font-bold w-full text-center">Fotos</h3>
            <div className="my-4  flex flex-wrap gap-4 justify-center">
              {editedState?.images?.map((image, index) => {
                return (
                  <div key={index} className=" relative mr-2 ">
                    <img
                      className="w-44 h-44 object-cover"
                      src={image.img}
                      alt={`Imagen ${index + 1}`}
                    />
                    <button
                      onClick={() => handleRemoveImage(image.id)}
                      className="absolute top-0 right-0 bg-red-500 text-white"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>

            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              type="file"
              multiple
              onChange={handleAddImages}
            />
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                {Array.from(selectedFiles).map((file) => (
                  <div key={file.name} className="flex flex-col mb-2">
                    <div className="flex justify-between items-center">
                      <span>{file.name}</span>
                      <span>{uploadProgress[file.name] || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                      <div
                        className="bg-green-600 h-1.5 rounded-full"
                        style={{ width: `${uploadProgress[file.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <Carousel
            height="h-screen max-[1200px]:h-[87vh] max-[1000px]:h-[70vh] max-[600px]:h-[46vh]"
            images={editedState?.images}
          />
        )}

        <div className="flex justify-center pt-16 flex-col items-center">
          <h3 className=" my-8 text-[26px] font-bold w-full text-center">
            Descripción del inmueble
          </h3>
          {isEditing ? (
            <textarea
              id="descriptionTextarea"
              value={editedState.description}
              name="description"
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-8 my-4"
            />
          ) : (
            <p className="w-[70%] max-[920px]:w-full whitespace-pre-wrap">
              {editedState.description}
            </p>
          )}
        </div>

        <div className="pb-16 flex flex-col items-center">
          <h3 className=" my-8 text-[26px] font-bold w-full text-center">
            Ubicación del inmueble
          </h3>
          {isEditing ? (
            <div className="flex gap-4 justify-center">
              <Input
                label="Latitud"
                type="number"
                name="lat"
                value={editedState.lat}
                size={editedState.lat.toString().length || 1}
                onChange={handleChange}
                placeholder="Latitud"
              />
              <Input
                label="Longitud"
                type="number"
                name="lng"
                value={editedState.lng}
                size={editedState.lng.toString().length || 1}
                onChange={handleChange}
                placeholder="Longitud"
              />
            </div>
          ) : (
            <>
              <span>
                {editedState.lat}, {editedState.lng}
              </span>
            </>
          )}
        </div>
        <div className="flex justify-center ">
          <Map
            locations={{
              lat: editedState.lat,
              lng: editedState.lng,
              title: editedState.title,
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Propertie;
