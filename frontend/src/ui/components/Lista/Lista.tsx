import { Button } from "@mui/material";
import {
  ListaStyled,
  ItemList,
  Foto,
  Informacoes,
  Nome,
  Descricao,
} from "./Lista.style";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Foto src={pet.foto} />
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => {
                props.onSelect(pet);
              }}
            >
              Adotar {pet.nome}
            </Button>
          </Informacoes>
        </ItemList>
      ))}
    </ListaStyled>
  );
}
