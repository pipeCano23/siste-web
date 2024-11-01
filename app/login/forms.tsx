import { useState } from "react";

export function LoginClient({ onSubmit }: { onSubmit: any }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("nombre", formData.nombre);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("ciudad", formData.ciudad);
    console.log("Datos guardados en localStorage");
    onSubmit();
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Clientes
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Ciudad
            </label>
            <input
              type="text"
              placeholder="Ciudad destino"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export function LoginUsers({ onSubmit }: { onSubmit: any }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
