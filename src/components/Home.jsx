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
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const datajson = [
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Item 1",
      description: "Description for Item 1",
      imageUrl:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Other data items...
  ];

  // Use useDisclosure to manage the modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen(); // Open the modal when the "ADD+" button is clicked
  };
  const handleFileSelect = (e) => {
    const files = e.target.files;
    console.log(files);
  };
  return (
    <div className="px-4 lg:px-0 py-8 flex h-screen bg-black">
      <div className="w-1/5 text-white">
        <button
          onClick={handleClick}
          className="bg-white text-black text-gray-600 font-bold p-6 text-xl mx-12 mt-4 rounded-lg w-1/2 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300"
        >
          ADD+
        </button>
      </div>

      <div className="w-4/5 overflow-x-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {datajson.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
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

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="hoverborder border-white shadow-md overflow-hidden rounded onhover hover:scale-105 transition-transform duration-300">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <div className="p-3 bg-white">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-700 line-clamp-3">{description}</p>
        <p className="text-gray-700">{imageUrl}</p>
      </div>
    </div>
  );
};

export default Home;