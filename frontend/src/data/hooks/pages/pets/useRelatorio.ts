import { useEffect, useState } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiService";

export function useRelatorio() {
  const [listaRelatorio, setListRelatorio] = useState<Relatorio[]>([]);

  useEffect(() => {
    ApiService.get("/adocoes").then((resposta) => {
      setListRelatorio(resposta.data);
    });
  }, []);

  return {
    listaRelatorio,
  };
}
