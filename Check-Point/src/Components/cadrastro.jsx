import { useState } from "react"
import './cadastro.css'
import lixo from '../img/FiTrash2.png'
import edit from '../img/FiEdit.png'


function Cadastro() {
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");



    const [listaTarefas, setListaTarefas] = useState([])


    const [positivo, setPositivo] = useState(true)

    function salvarTarefa(event) {
        event.preventDefault();

        if (titulo.length && categoria.length && data.length && descricao.length != 0) {
            setListaTarefas([...listaTarefas, {
                id: Date.now(),
                titulo: titulo,
                categoria: categoria,
                data: data,
                descricao: descricao,
            },
            ]);
            setTitulo("");
            setCategoria("");
            setData("");
            setDescricao("");

        } else {
            return setPositivo(false)
        }
        setPositivo(true)
    }

    function temQuePreencher(cal) {


        if (positivo == false) {
            if (cal.length == 0) {
                return (
                    <p>Campo obrigatório</p>
                
                )


            }

        }

    }

    function editItemId(event) {
        event.preventDefault();

        const copyListaTarefas = [...listaTarefas];

        const index = copyListaTarefas.findIndex(
            (titulo) => titulo.id === id
        );

        copyListaTarefas[index].titulo = titulo;
        copyListaTarefas[index].categoria = categoria;
        copyListaTarefas[index].data = data;
        copyListaTarefas[index].descricao = descricao;

        setListaTarefas(copyListaTarefas);

        setId("")
        setTitulo("");
        setCategoria("");
        setData("");
        setDescricao("");
    }

    function apagarItemId(id) {

        const result = listaTarefas.filter((item) => item.id !== id)
        setListaTarefas(result)



    }



    function editarItemId(titulo, categoria, data, descricao, id) {
        setTitulo(titulo);
        setCategoria(categoria);
        setData(data);
        setDescricao(descricao);
        setId(id)

    }

    console.log(titulo.length);



    return (
        

        <div className="container">
            <div className="cadastro" >
                <div className="formulario">


                    <h2>Cadastrar tarefa</h2>

                    <form onSubmit={id ? editItemId : salvarTarefa} >
                        <input

                            value={titulo}
                            onChange={(event) => setTitulo(event.target.value)}
                            placeholder="Título" />

                        <br />
                        {temQuePreencher(titulo)}

                        <br />
                        <br />

                        <select

                            value={categoria}
                            onChange={(event) => setCategoria(event.target.value)}>
                            <option
                                disabled
                                value="">Categoria</option>
                            <option value="Categoria 1"> Trabalho</option>
                            <option value="Categoria 2"> Lazer</option>
                            <option value="Categoria 3"> Prioridade</option>
                            <option value="Categoria 4"> Outros</option>
                        </select>

                        <br />
                        {temQuePreencher(categoria)}
                        <br />
                        <br />

                        <input
                            type="date"
                            value={data}
                            onChange={(event) => setData(event.target.value)}
                            placeholder="Data          Ex: 02/02/2020" />


                        <br />
                        {temQuePreencher(data)}
                        <br />
                        <br />

                        <input
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)}
                            placeholder="Descrição" />

                        <br />
                        {temQuePreencher(descricao)}
                        <br />
                        <br />

                        <input 
                        className="botaoAdd" 
                        type="submit" value={id ? "Editar" : "Adicionar"} />


                    </form>
                </div>
            </div>

            <div className="tarefas">
                <div className="containerTarefa">
                    <h2>Minhas Tarefas</h2>
                    {
                        listaTarefas.length > 0 ? (
                            <ul >
                                {listaTarefas.map(({ id, titulo, categoria, data, descricao }) =>
                                    <li key={id} className="minhasTarefas">
                                        <div className="tarefasPrim">
                                            <h3>{titulo}</h3>
                                            
                                            <p>{categoria}</p>
                                            <p>{descricao}</p>
                                        </div>

                                        <div className="tarefasSec">
                                            <h4 className="tarefasData">{data}</h4>
                                            <button onClick={() => apagarItemId(id)} ><img src={lixo} alt="" /></button>
                                            <button onClick={() => editarItemId(titulo, categoria, data, descricao, id)} ><img src={edit} alt="" /></button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        ) : (
                            <p>Adicione uma tarefa</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cadastro