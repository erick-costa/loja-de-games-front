import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Loja de Games</div>

          <div className="flex gap-4">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <div className="hover:underline">Produtos</div>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
