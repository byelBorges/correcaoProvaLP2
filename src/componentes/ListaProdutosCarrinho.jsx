import { Table, Button } from "react-bootstrap";
export default function ListaProdutosCarrinho(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Descricao</th>
                        <th>Quantidade</th>
                        <th>Preco</th>
                        <th>Subtotal</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProdutosCarrinho.map((item, i) => {
                            return (<tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td>{item.descricao}</td>
                                <td><input type="number" value={item.quantidade} /></td>
                                <td>{item.preco}</td>
                                <td>{item.quantidade * item.preco}</td>
                                <td><button>Excluir</button></td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <Table>
                <Button onClick={()=>{
                    props.mostrarLista(false);
                }}>Voltar</Button>
            </Table>
        </div>

    );
}