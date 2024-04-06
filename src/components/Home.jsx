import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import backgroundImage from "../../images/image2.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const datajson = [
    // Your data items...
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.unsplash.com/photo-1711658364398-b7b697baf4e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more items as needed...
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleClick = () => {
    onOpen();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  const handleFileSelect = async (e) => {
    const files = e.target.files;
    console.log("====================================");
    console.log(files);
    console.log("====================================");
    if (files.length > 0) {
      const file = files[0]; // Assuming you're only uploading one file
      const formData = new FormData();
      formData.append("file", file); // Assuming the API expects the file under the key "file"
      console.log("====================================");
      console.log(formData);
      console.log("====================================");
      try {
        const response = await fetch(
          "https://15c2-14-139-241-214.ngrok-free.app/api/v1/file",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("File uploaded successfully:", data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  // Filter data based on search term
  const filteredData = datajson.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="px-4 lg:px-0 py-8 flex h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-1/5 text-white">
        <div className="flex justify-center items-center">
          <Input
            placeholder="Search Pdfs"
            htmlSize={20}
            width="auto"
            onChange={handleSearch}
            style={{ border: "1px solid gray", color: "black" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleClick}
            className="bg-white text-black text-gray-600 font-bold p-6 text-xl mx-12 mt-4 rounded-lg w-1/2 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300"
          >
            ADD+
          </button>
        </div>
      </div>

      <div className="w-4/5 overflow-x-hidden mr-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredData.length === 0
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : filteredData.map((data, index) => (
                <Card
                  key={index}
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  isLoading={loading}
                />
              ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add PDF.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="fileInput" className="mb-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add PDF.
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleFileSelect}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded">
      <div className="w-full h-40 rounded-t-lg"></div>
      <div className="p-3 bg-white">
        <h3 className="text-lg font-bold mb-2 text-transparent bg-gray-300 h-7 w-3/4"></h3>
        <p className="text-gray-700 line-clamp-3 bg-gray-300 h-5 w-full"></p>
        <p className="text-gray-700 bg-gray-300 h-5 w-1/2"></p>
      </div>
    </div>
  );
};

const Card = ({ title, description, imageUrl, isLoading }) => {
  return (
    <div
      className={`hover:border border-white shadow-md overflow-hidden rounded onhover hover:scale-105 transition-transform duration-300 ${
        isLoading ? "bg-gray-300" : ""
      }`}
    >
      {isLoading && <Skeleton />}
      {!isLoading && (
        <>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
          )}
          <div className="p-3 bg-white">
            <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
            {/* <p className="text-gray-700 line-clamp-3">{description}</p>
            <p className="text-gray-700">{imageUrl}</p> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
