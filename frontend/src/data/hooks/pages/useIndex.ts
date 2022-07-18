import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaPets, setListaPets] = useState<Pet[]>([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [valor, setValor] = useState(""),
    [mensagem, setMensagem] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((resposta) => {
      setListaPets(resposta.data);
    });
  }, []);

  useEffect(() => {
    if (petSelecionado === null) {
      limparFormulario();
    }
  }, [petSelecionado]);

  function adotar() {
    if (petSelecionado !== null) {
      if (validarDadosAdocao()) {
        ApiService.post("/adocoes", {
          pet_id: petSelecionado.id,
          email,
          valor,
        })
          .then(() => {
            setPetSelecionado(null);
            setMensagem("Pet adotado com sucesso");
          })
          .catch((error: AxiosError) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Preencha todos os campos corretamente");
      }
    }
  }

  function validarDadosAdocao() {
    return email.length > 0 && valor.length > 0;
  }

  function limparFormulario() {
    setEmail("");
    setValor("");
  }

  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar,
  };
}

/*
//dados estaticos de teste
[
      {
        id: 1,
        nome: "Bidu",
        historia:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat quam rerum inventore, itaque provident quidem temporibus eius numquam commodi quisquam repellat eum illum doloribus voluptas amet? Iste, possimus id.",
        foto: "https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/Como%20dar%20banho%20no%20pet%20%20-%20shutterstock.jpg?C7nGBysZ4pwp7VV93EYZoL.REdQQZCti&itok=UrBvcx7T",
      },
      {
        id: 2,
        nome: "Nala",
        historia:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat quam rerum inventore, itaque provident quidem temporibus eius numquam commodi quisquam repellat eum illum doloribus voluptas amet? Iste, possimus id.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyxBkvy4UJK4LSoEbQzTMjZJ5pFRemfRBDA&usqp=CAU",
      },
    ]

*/
