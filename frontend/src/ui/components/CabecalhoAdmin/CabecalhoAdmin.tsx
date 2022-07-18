import {
  CabecalhoContainer,
  Logo,
  LinksContainer,
} from "./CabecalhoAdmin.style";

import { Link, Box } from "@mui/material";
import NextLink from "next/link";

export default function CabecalhoAdmin() {
  return (
    <CabecalhoContainer>
      <div>
        <Logo src={"/imagens/logo.svg"} />
        <LinksContainer>
          <Link href={"/pets/cadastro"} component={NextLink}>
            <a>Cadastrar Pet</a>
          </Link>

          <Link href={"/pets/relatorio"} component={NextLink}>
            <a>
              Relatório{" "}
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                de Adoção
              </Box>
            </a>
          </Link>
          <Link></Link>
        </LinksContainer>
      </div>
    </CabecalhoContainer>
  );
}
