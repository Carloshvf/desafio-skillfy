import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    classNames("font-medium px-3 py-2 rounded", {
      "text-primary font-bold underline": location.pathname === path,
      "text-gray-600 hover:text-primary": location.pathname !== path,
    });

  return (
    <nav className="bg-white shadow p-4 mb-6 flex gap-6">
      <Link to="/" className={linkClass("/")}>
        Dashboard
      </Link>
      <Link to="/lista-tarefas" className={linkClass("/lista-tarefas")}>
        Lista de Tarefas
      </Link>
      <Link to="/nova-tarefa" className={linkClass("/nova-tarefa")}>
        Formulário de Tarefa
      </Link>
    </nav>
  );
};

export default Navbar;
