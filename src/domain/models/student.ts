export interface IStudentRequestModel {
  rga: string,
  nome: string,
  curso: string,
  situacao: string,
  registrado_em: Date
}

export interface IStudentResponseModel {
  id: string,
  rga: string,
  nome: string,
  curso: string,
  situacao: string,
  registrado_em: Date
}