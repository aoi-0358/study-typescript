export type User = {
  name: string;
} & PersonalData;

type PersonalData = {
  height: number;
  weight: number;
  realname: string;
};
type OptionalPersonalData ={
  [k in keyof PersonalData ]: PersonalData[k];
  //↑のMappedTypesでPersonalDataに後で追加されたプロパティrealname: string;をOptionalPersonalDataに自動で追加できる
}

const user: User = {
  name: "iii",
  height: 165,
  weight: 56,
};
