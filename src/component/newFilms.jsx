import { useState } from "react";

function Modal({ addMovie }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        
    };
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [note, setNote] = useState("");




    const handleSubmit = (e) => {

        e.preventDefault();

        if (!titre || !description || !note) return;

        addMovie({ titre, description,image  ,note });

        setTitre("");
        setDescription("");
        setImage("");
        setNote("");
        closeModal();

    };

    return (
        <div className="flex justify-center items-end p-10">
           <div style={{ position: "relative", width: "100%" }}>
    <button
        onClick={openModal}
       
        className="absolute right-[-40px] top-[-96px] px-8 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
        Ajouter un Film
    </button>
</div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[26rem]">
                        <h2 className="text-2xl font-bold text-center mb-4">Ajouter un Film</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                                <label htmlFor="Image" className="block text-sm font-medium text-gray-700">Titre du Film</label>
                                <input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)} 
                                    accept="image/png, image/jpeg"
                                    type="file"
                                    placeholder="Image du Film"
                                    className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre du Film</label>
                                <input
                                    value={titre}
                                    onChange={(e) => setTitre(e.target.value)} 
                                    type="text"
                                    placeholder="Titre du Film"
                                    className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Description"
                                    className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note sur 10</label>
                                <input
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    type="number"
                                    min="1"
                                    max="10"
                                    placeholder="Ajouter une note sur 10"
                                    className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                            type="submit"
                            className="px-4 py-2 mt-5 text-white bg-green-500 rounded hover:bg-red-700"
                        >
                            Ajouter 
                        </button>
                        </form>

                        
                    </div>
                </div>
            )}
            
        </div>
    );
    
}


export default Modal;