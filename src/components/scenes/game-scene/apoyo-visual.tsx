export default function ApoyoVisual() {
  return (
    <div className="flex flex-col gap-4">
      <img src="/src/assets/images/apoyo.png" alt="Apoyo" />
      <ul className="">
        <li>
          contenedor <span className="text-red-500">rojo</span> : residuos{" "}
          <span className="text-red-500">electrónicos </span> y{" "}
          <span className="text-red-500"> peligrosos</span>
        </li>
        <li>
          contenedor <span className="text-orange-500">naranja</span> : residuos{" "}
          <span className="text-orange-500">orgánicos</span>
        </li>
        <li>
          contenedor <span className="text-yellow-500">amarillo</span> :{" "}
          <span className="text-yellow-500">plástico</span> y{" "}
          <span className="text-yellow-500">metal</span>
        </li>
        <li>
          contenedor <span className="text-green-500">verde</span> :{" "}
          <span className="text-green-500">vidrio</span>
        </li>
        <li>
          contenedor <span className="text-blue-500">azul</span> :{" "}
          <span className="text-blue-500">papel</span> y{" "}
          <span className="text-blue-500">cartón</span>
        </li>
        <li>
          contenedor <span className="text-neutral-500">gris</span> : residuos{" "}
          <span className="text-neutral-500">generales</span>
        </li>
      </ul>
    </div>
  );
}
